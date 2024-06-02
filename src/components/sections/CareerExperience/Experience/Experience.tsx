import clsx from "clsx"
import { WorkExperience } from "../../../../types"
import "./experience.css"
import { Chip, Tooltip } from "@mui/material"
import { workLocationsMapping } from "../../../../util"
import { useMemo, useRef } from "react"
import useOnClickOutside from "../../../../hooks/useOnClickOutside"

interface IExperience {
  experience: WorkExperience
  index: number
  selected: boolean
  isPrevSelected: boolean
  isLast?: boolean
  onClick?: () => void
  removeSelection: () => void
}

const Experience = (props: IExperience) => {
  const {
    index,
    selected,
    isLast,
    onClick,
    removeSelection,
    isPrevSelected,
    experience: { content, start, title, end, location }
  } = props

  const experienceRef = useRef<HTMLDivElement>()

  useOnClickOutside(experienceRef, removeSelection)
  return (
    <div
      className={clsx("experience-container", { last: isLast, selected })}
      style={
        selected || isPrevSelected
          ? undefined
          : { animationDelay: `${600 + index * 200}ms` }
      }
      onClick={onClick}
      ref={experienceRef}
    >
      <span className='experience-title-container heading'>
        <h4 className='experience-title'>
          <span className='experience-description'>{title}</span>
          {/* {location && <span className='experience-location'>{location}</span>} */}
          {location && (
            <Tooltip title={workLocationsMapping[location]} placement='top'>
              <Chip label={location} />
            </Tooltip>
          )}
        </h4>
        <span className='experience-duration'>
          {start} – {end || "PRESENT"}
        </span>
      </span>
      <span className='experience-content'>{content}</span>
      <span className='fader'></span>
    </div>
  )
}

export default Experience
