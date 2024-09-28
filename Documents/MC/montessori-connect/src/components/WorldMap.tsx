'use client';

import React, { useState, useEffect } from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWxmcmVkLWEiLCJhIjoiY20xbGltYnNzMDVqbjJwb3c4Zzlvd2MxeCJ9.FjuhyBEszWYwf38VFncKNg';

const continentData = {
  'North America': { schools: 1500, info: 'Largest concentration in the US' },
  'South America': { schools: 800, info: 'Growing rapidly in Brazil' },
  'Europe': { schools: 2000, info: 'Widespread across the continent' },
  'Africa': { schools: 500, info: 'Emerging presence, especially in South Africa' },
  'Asia': { schools: 3000, info: 'Strong presence in India and Japan' },
  'Oceania': { schools: 400, info: 'Well-established in Australia' },
};

const WorldMap: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1.5
  });

  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch('/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        // Add school count to each country's properties
        data.features = data.features.map(feature => {
          const continent = getContinent(feature.properties.NAME);
          feature.properties.schoolCount = continentData[continent]?.schools || 0;
          return feature;
        });
        setGeojsonData(data);
      });
  }, []);

  const getContinent = (countryName: string): string => {
    // This is a simplified mapping. You might need a more comprehensive solution.
    const continents = {
      'North America': ['United States', 'Canada', 'Mexico'],
      'South America': ['Brazil', 'Argentina', 'Colombia'],
      'Europe': ['France', 'Germany', 'United Kingdom'],
      'Africa': ['Nigeria', 'South Africa', 'Egypt'],
      'Asia': ['China', 'India', 'Japan'],
      'Oceania': ['Australia', 'New Zealand']
    };

    for (const [continent, countries] of Object.entries(continents)) {
      if (countries.includes(countryName)) {
        return continent;
      }
    }
    return 'Other';
  };

  const layerStyle = {
    id: 'countries',
    type: 'fill',
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'schoolCount'],
        0, '#FFEDA0',
        500, '#FED976',
        1000, '#FEB24C',
        1500, '#FD8D3C',
        2000, '#FC4E2A',
        2500, '#E31A1C',
        3000, '#BD0026'
      ],
      'fill-opacity': 0.7
    }
  };

  return (
    <div className="relative h-[600px]">
      <Map
        {...viewport}
        onMove={evt => setViewport(evt.viewState)}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {geojsonData && (
          <Source type="geojson" data={geojsonData}>
            <Layer {...layerStyle} />
          </Source>
        )}
      </Map>
    </div>
  );
};

export default WorldMap;
