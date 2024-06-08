import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react"
import { ISection } from "../../../types"
import clsx from "clsx"
import "./career-experience.css"
import { experiences } from "../../../util"
import Experience from "./Experience"
import useOnClickOutside from "../../../hooks/useOnClickOutside"

interface ICareerExperience extends ISection {}

const CareerExperience = (props: ICareerExperience) => {
  const { currentSection, className, callbacks } = props
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(-1)
  const [prevSelectedExperienceIndex, setPrevSelectedExperienceIndex] =
    useState(-1)
  const [style, setStyle] = useState<CSSProperties>()

  const isCurrentSection = useMemo(
    () => currentSection === "experience",
    [currentSection]
  )

  const handleChangeSelectedExperience = (index: number) => {
    setSelectedExperienceIndex(index)
  }

  const handleResetSelectedExperience = () => {
    setPrevSelectedExperienceIndex(selectedExperienceIndex)
    setSelectedExperienceIndex(-1)
  }

  const hardResetSelectedExperience = () => {
    setPrevSelectedExperienceIndex(-1)
    setSelectedExperienceIndex(-1)
  }

  useEffect(() => {
    callbacks.current["onLeave"] = { experience: hardResetSelectedExperience }
  }, [callbacks])

  useEffect(() => {
    if (!isCurrentSection)
      setTimeout(() => !isCurrentSection && setStyle({ display: "none" }), 700)
    // ms of delay should be equal to full page delay
    else setTimeout(() => isCurrentSection && setStyle(undefined), 700 / 3)
  }, [currentSection, isCurrentSection])

  return (
    <section className={clsx("career-experience-section-container", className)}>
      <div
        className='career-experience-content-container content-container'
        style={style}
      >
        <div className='summary-container'>
          <span className='summary'>
            Experienced Full-Stack Engineer with a passion for innovative
            technology.
          </span>
        </div>
        <div className='career-experience-container'>
          {experiences.map((experience, index) => {
            return (
              <Experience
                index={index}
                experience={experience}
                selected={selectedExperienceIndex === index}
                isLast={index === experiences.length - 1}
                isPrevSelected={prevSelectedExperienceIndex === index}
                removeSelection={handleResetSelectedExperience}
                onClick={() => handleChangeSelectedExperience(index)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CareerExperience
