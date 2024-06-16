import clsx from "clsx"
import { Skeleton } from "../../../../assets"
import { ProjectType } from "../../../../types"
import "./project.css"
import {
  Dispatch,
  SetStateAction,
  memo,
  useCallback,
  useMemo,
  useRef
} from "react"
import MinimizeIcon from "@mui/icons-material/Minimize"
import useOnClickOutside from "../../../../hooks/useOnClickOutside"

interface IProject {
  project: ProjectType
  selected: boolean
  index: number
  changeSelection: Dispatch<SetStateAction<number>>
  onClick?: () => void
  removeSelection: () => void
}

const Project = (props: IProject) => {
  const {
    project,
    selected,
    index,
    removeSelection,
    onClick,
    changeSelection
  } = props

  const projectRef = useRef<HTMLDivElement>(null)
  const isSelected = useMemo(() => selected, [selected])

  const handleRemoveSelection = useCallback(() => {
    if (isSelected) {
      removeSelection()
    }
  }, [removeSelection, isSelected])

  useOnClickOutside(projectRef, handleRemoveSelection)

  console.log(project.images ? project.images : "nill")
  return (
    <div
      className={clsx("project", { selected: isSelected })}
      onClick={() => {
        changeSelection(index)
        onClick && onClick()
      }}
      style={{
        background: `url(${
          project?.images
            ? project.images.img1
            : "src/assets/projects/skeleton.png"
        })`,
        backgroundSize: "150%",
        // backgroundPositionY: "0%",
        backgroundRepeat: "no-repeat"
      }}
      ref={projectRef}
    >
      <div
        className='minimize-project-container'
        onClick={() => {
          handleRemoveSelection()
          onClick && onClick()
        }}
      >
        {isSelected && <MinimizeIcon />}
      </div>
      <div
        className='project-info'
        style={{ visibility: !isSelected ? "hidden" : "visible" }}
      >
        <h3 className='project-title'>{project.title}</h3>
        <p className='project-content'>{project.content}</p>
      </div>
      <div className='project-images-container'>
        {/* <img
          className='project-image'
          src={project.images ? project.images.img1 : Skeleton}
          alt='example'
        /> */}
      </div>
    </div>
  )
}

export default memo(Project)
