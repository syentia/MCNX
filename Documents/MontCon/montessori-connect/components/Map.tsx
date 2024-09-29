import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { School } from '@/types/school'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ''

interface MapProps {
  schools: School[]
}

export default function Map({ schools }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    if (map.current || !mapContainer.current) return // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-96.7970, 32.7767], // Dallas coordinates
      zoom: 10
    })

    map.current.on('load', () => {
      setMapLoaded(true)
    })

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!map.current || !mapLoaded) return

    // Remove existing markers
    const markers = document.getElementsByClassName('mapboxgl-marker')
    while (markers[0]) {
      markers[0].remove()
    }

    // Add markers for each school
    schools.forEach(school => {
      new mapboxgl.Marker()
        .setLngLat(school.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${school.name}</h3><p>${school.address}</p>`))
        .addTo(map.current!)
    })
  }, [schools, mapLoaded])

  return <div ref={mapContainer} className="w-full h-full" />
}
