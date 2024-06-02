import React from "react"
import "./welcome.css"
import { ISection } from "../../../types"
import SketchComponent from "./Sketch/Sketch"

interface IWelcome extends ISection {}
const Welcome = (props: IWelcome) => {
  const { className } = props
  return (
    <section className='welcome-container'>
      <div className='welcome-content-container'>
        {/* <SketchComponent /> */}
      </div>
    </section>
  )
}

export default Welcome
