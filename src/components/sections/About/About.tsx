import { ISection } from "../../../types"
import "./about.css"
import clsx from "clsx"
import Sagiv from "../../../assets/Sagiv.png"
import { Avatar } from "@mui/material"
import { Profile } from "../../../assets"
import { CSSProperties, useEffect, useMemo, useRef, useState } from "react"
import SpeedIcon from "@mui/icons-material/SpeedOutlined"
import DevicesIcon from "@mui/icons-material/DevicesOutlined"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined"
import ProgressBar from "../../../util/components/ProgressBar"
import { skillset } from "../../../util"

interface IAbout extends ISection {}

const About = (props: IAbout) => {
  const { className, currentSection } = props
  const [style, setStyle] = useState<CSSProperties>()
  const [showSkillset, setShowSkillset] = useState(true)

  const isCurrentSection = useMemo(
    () => currentSection === "about",
    [currentSection]
  )

  useEffect(() => {
    if (!isCurrentSection)
      setTimeout(() => {
        !isCurrentSection && setStyle({ display: "none" })
        setShowSkillset(false)
      }, 700)
    //ms of delay should be equal to full page delay
    else
      setTimeout(() => {
        isCurrentSection && setStyle(undefined)
        setShowSkillset(true)
      }, 700 / 3)
  }, [currentSection, isCurrentSection])

  return (
    <section className={clsx("about-container", className)}>
      <div className='about-content-container' style={style}>
        <h2 className='sagiv-logo fill-title'>
          <a href=''>
            <span>Sagiv Mishaan</span>
          </a>
        </h2>
        <span className='about-content'>
          <div className='top-content-container'>
            <div className='about-items'>
              <div
                className='about-item-container'
                style={{ animationDelay: "550ms" }}
              >
                <span className='hexagon-wrap'>
                  <span className='hexagon'>
                    <SpeedIcon className='about-item-icon' />
                  </span>
                </span>

                <h4 className='about-item-title'>Fast</h4>
                <p className='about-item-content'>
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </div>
              <div
                className='about-item-container'
                style={{ animationDelay: "700ms" }}
              >
                <span className='hexagon-wrap'>
                  <span className='hexagon'>
                    <DevicesIcon className='about-item-icon' />
                  </span>
                </span>

                <h4 className='about-item-title'>Responsive</h4>
                <p className='about-item-content'>
                  My layouts will work on any device, big or small.
                </p>
              </div>
              <div
                className='about-item-container'
                style={{ animationDelay: "850ms" }}
              >
                <span className='hexagon-wrap'>
                  <span className='hexagon'>
                    <LightbulbOutlinedIcon className='about-item-icon' />
                  </span>
                </span>

                <h4 className='about-item-title'>Intuitive</h4>
                <p className='about-item-content'>
                  Strong preference for easy to use, intuitive UX/UI.
                </p>
              </div>
              <div
                className='about-item-container'
                style={{ animationDelay: "1000ms" }}
              >
                <span className='hexagon-wrap'>
                  <span className='hexagon'>
                    <RocketLaunchOutlinedIcon className='about-item-icon' />
                  </span>
                </span>
                <h4 className='about-item-title'>Dynamic</h4>
                <p className='about-item-content'>
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </div>
            </div>
          </div>
          <div className='bottom-content-container'>
            <div className='bottom-content'>
              <div className='general-info-container'>
                <Avatar
                  alt='Sagiv Mishaan'
                  src={Profile}
                  className='profile-avatar'
                  classes={{ img: "profile-image" }}
                />
                <h4 className='about-me-title'>Who's this guy?</h4>
                <p className='about-me-content'>
                  I'm a Full-Stack Engineer for 8200 unit in Israel. I have
                  serious passion for UI effects, animations and creating
                  intuitive, dynamic user experiences. <br />
                  <a href='#contact' className='contact'>
                    Let's make something special.
                  </a>
                </p>
              </div>
              <div className='skillset'>
                {showSkillset &&
                  skillset.map((skill, index) => (
                    <ProgressBar
                      label={skill.label}
                      value={skill.value}
                      max={100}
                      animationDelay={index * 20}
                    />
                  ))}
              </div>
            </div>
          </div>
        </span>
      </div>
    </section>
  )
}

export default About
