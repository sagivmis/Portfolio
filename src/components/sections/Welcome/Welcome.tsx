import React, { CSSProperties, useEffect, useMemo, useState } from "react"
import "./welcome.css"
import { ISection } from "../../../types"
import SketchComponent from "./Sketch/Sketch"
import clsx from "clsx"

interface IWelcome extends ISection {}
const Welcome = (props: IWelcome) => {
  const { className, currentSection } = props
  const [style, setStyle] = useState<CSSProperties>()

  const isCurrentSection = useMemo(
    () => currentSection === "welcome" || currentSection === "",
    [currentSection]
  )

  useEffect(() => {
    if (!isCurrentSection)
      setTimeout(() => !isCurrentSection && setStyle({ display: "none" }), 700)
    // ms of delay should be equal to full page delay
    else setTimeout(() => isCurrentSection && setStyle(undefined), 700 / 3)
  }, [currentSection, isCurrentSection])
  return (
    <section className={clsx("welcome-container", className)} style={style}>
      <div className='welcome-content-container'>
        <div className='intro'>
          <div className='upper'>
            <h4 className='welcome-title'>Hello, I'm</h4>
            <div className='border-anim-container'>
              <a href='#about' className='border-animation'>
                <div className='border-animation__inner'>Sagiv Mishaan</div>
              </a>
            </div>{" "}
            <h4>.</h4>
          </div>
          <div className='lower'>
            <h4 className='welcome-subtitle'>I'm a full-stack web developer</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
