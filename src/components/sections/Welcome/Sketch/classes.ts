import { BuildingConfig, SkylineConfig } from "./types"

export class Building {
  layer: number
  x: number
  y: number
  width: number
  height: number
  color: string
  slantedTop: boolean
  slantedTopHeight: number
  slantedTopDirection: boolean
  spireTop: boolean
  spireTopWidth: number
  spireTopHeight: number
  antennaTop: boolean
  antennaTopWidth: number
  antennaTopHeight: number

  constructor(config: BuildingConfig) {
    this.reset(config)
  }

  reset(config: BuildingConfig) {
    this.layer = config.layer
    this.x = config.x
    this.y = config.y
    this.width = config.width
    this.height = config.height
    this.color = config.color
    this.slantedTop = Math.floor(Math.random() * 10) === 0
    this.slantedTopHeight = this.width / (Math.random() * 2 + 2)
    this.slantedTopDirection = Math.round(Math.random()) === 0
    this.spireTop = Math.floor(Math.random() * 15) === 0
    this.spireTopWidth =
      Math.random() * (this.width * 0.07 - this.width * 0.01) +
      this.width * 0.01
    this.spireTopHeight = Math.random() * (20 - 10) + 10
    this.antennaTop = !this.spireTop && Math.floor(Math.random() * 10) === 0
    this.antennaTopWidth = this.layer / 2
    this.antennaTopHeight = Math.random() * (20 - 5) + 5
  }

  render(context: CanvasRenderingContext2D) {
    context.fillStyle = context.strokeStyle = this.color
    context.lineWidth = 2

    context.beginPath()
    context.rect(this.x, this.y, this.width, this.height)
    context.fill()
    context.stroke()

    if (this.slantedTop) {
      context.beginPath()
      context.moveTo(this.x, this.y)
      context.lineTo(this.x + this.width, this.y)
      if (this.slantedTopDirection) {
        context.lineTo(this.x + this.width, this.y - this.slantedTopHeight)
      } else {
        context.lineTo(this.x, this.y - this.slantedTopHeight)
      }
      context.closePath()
      context.fill()
      context.stroke()
    }

    if (this.spireTop) {
      context.beginPath()
      context.moveTo(this.x + this.width / 2, this.y - this.spireTopHeight)
      context.lineTo(this.x + this.width / 2 + this.spireTopWidth, this.y)
      context.lineTo(this.x + this.width / 2 - this.spireTopWidth, this.y)
      context.closePath()
      context.fill()
      context.stroke()
    }

    if (this.antennaTop) {
      context.beginPath()
      context.moveTo(this.x + this.width / 2, this.y - this.antennaTopHeight)
      context.lineTo(this.x + this.width / 2, this.y)
      context.lineWidth = this.antennaTopWidth
      context.stroke()
    }
  }
}

export class Skyline {
  x: number
  buildings: Building[]
  layer: number
  width: { min: number; max: number }
  height: { min: number; max: number }
  speed: number
  color: string

  constructor(config: SkylineConfig) {
    this.x = 0
    this.buildings = []
    this.layer = config.layer
    this.width = config.width
    this.height = config.height
    this.speed = config.speed
    this.color = config.color
    this.populate()
  }

  populate() {
    let totalWidth = 0
    while (totalWidth <= window.innerWidth + this.width.max * 2) {
      const newWidth = Math.round(
        Math.random() * (this.width.max - this.width.min) + this.width.min
      )
      const newHeight = Math.round(
        Math.random() * (this.height.max - this.height.min) + this.height.min
      )
      this.buildings.push(
        new Building({
          layer: this.layer,
          x:
            this.buildings.length === 0
              ? 0
              : this.buildings[this.buildings.length - 1].x +
                this.buildings[this.buildings.length - 1].width,
          y: window.innerHeight - newHeight,
          width: newWidth,
          height: newHeight,
          color: this.color
        })
      )
      totalWidth += newWidth
    }
  }

  update(dt: number) {
    this.x -= (window.innerWidth / 10) * this.speed * dt

    const firstBuilding = this.buildings[0]
    if (firstBuilding.width + firstBuilding.x + this.x < 0) {
      const newWidth = Math.round(
        Math.random() * (this.width.max - this.width.min) + this.width.min
      )
      const newHeight = Math.round(
        Math.random() * (this.height.max - this.height.min) + this.height.min
      )
      const lastBuilding = this.buildings[this.buildings.length - 1]
      firstBuilding.reset({
        layer: this.layer,
        x: lastBuilding.x + lastBuilding.width,
        y: window.innerHeight - newHeight,
        width: newWidth,
        height: newHeight,
        color: this.color
      })
      this.buildings.push(this.buildings.shift()!)
    }
  }

  render(context: CanvasRenderingContext2D) {
    context.save()
    context.translate(
      this.x,
      ((window.innerHeight - window.innerHeight / 10) / 20) * this.layer
    )
    for (let i = this.buildings.length - 1; i >= 0; i--) {
      this.buildings[i].render(context)
    }
    context.restore()
  }
}
