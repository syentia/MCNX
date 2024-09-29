export interface School {
  id: number
  name: string
  address: string
  phone: string
  isHiring: boolean
  coordinates: [number, number] // [longitude, latitude]
}
