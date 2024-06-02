import { ISection } from "../../../types"
import "./about.css"
import clsx from "clsx"
import Sagiv from "../../../assets/Sagiv.png"
import { Avatar } from "@mui/material"
import { Profile } from "../../../assets"
import { CSSProperties, useEffect, useMemo, useState } from "react"

interface IAbout extends ISection {}

const About = (props: IAbout) => {
  const { className, currentSection } = props
  const [style, setStyle] = useState<CSSProperties>()

  const isCurrentSection = useMemo(
    () => currentSection === "about",
    [currentSection]
  )

  const handleChangeRenderedStyle = () => {}

  useEffect(() => {
    if (!isCurrentSection)
      setTimeout(() => !isCurrentSection && setStyle({ display: "none" }), 700)
    //ms of delay should be equal to full page delay
    else setTimeout(() => isCurrentSection && setStyle(undefined), 700 / 3)
  }, [currentSection, isCurrentSection])

  return (
    <section className={clsx("about-container", className)}>
      <div className='about-content-container' style={style}>
        <img src={Sagiv} alt='image' className='about-logo' />
        <span className='about-content'>
          <div className='left-content'>
            <Avatar
              alt='Sagiv Mishaan'
              src={Profile}
              className='profile-avatar'
              classes={{ img: "profile-image" }}
            />
          </div>
          <div className='right-content'>
            <div className='experience-container'>
              <span className='experience'>
                <span className='experience-content summary'>
                  Experienced Full-Stack Engineer with a passion for innovative
                  technology.
                </span>
              </span>
              <span className='experience'>
                <span className='experience-title heading'>
                  <div className='experience-info'>
                    <span className='experience-description'>
                      FULL STACK ENGINEER,
                    </span>
                    <span className='experience-location'>8200 Unit</span>
                  </div>
                  <span className='experience-duration'>2022 – PRESENT</span>
                </span>
                <span className='experience-content'>
                  Experienced Full-Stack Engineer with a passion for innovative
                  technology.
                </span>
              </span>
              <span className='experience'>
                <span className='experience-title heading'>
                  <div className='experience-info'>
                    <span className='experience-description'>
                      FULL STACK & GAME DEVELOPER
                    </span>
                    {/* <span className='experience-location'>Freelance</span> */}
                  </div>
                  <span className='experience-duration'>2020 – PRESENT</span>
                </span>
                <span className='experience-content'>
                  Independent Full-Stack Engineer with a passion for innovative
                  technology.
                </span>
              </span>

              <span className='experience'>
                <span className='experience-title heading'>
                  <div className='experience-info'>
                    <span className='experience-description'>TUTOR, </span>
                    <span className='experience-location'>Independent</span>
                  </div>
                  <span className='experience-duration'>2020 – PRESENT</span>
                </span>
                <span className='experience-content'>
                  Teaching and helping students with a wide range of levels,
                  from middle school to academic students (B.Sc.)
                </span>
              </span>
            </div>
          </div>
        </span>
      </div>
    </section>
  )
}

export default About
