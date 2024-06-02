export interface BuildingConfig {
  layer: number
  x: number
  y: number
  width: number
  height: number
  color: string
}
export interface SkylineConfig {
  layer: number
  width: { min: number; max: number }
  height: { min: number; max: number }
  speed: number
  color: string
}
