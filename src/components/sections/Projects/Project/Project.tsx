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
  useRef,
  useState
} from "react"
import MinimizeIcon from "@mui/icons-material/Minimize"
import useOnClickOutside from "../../../../hooks/useOnClickOutside"
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined"
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"

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

  const [isExpanded, setIsExpanded] = useState(false)

  const projectRef = useRef<HTMLDivElement>(null)
  const isSelected = useMemo(() => selected, [selected])

  const handleClickOutside = useCallback(() => {
    if (isSelected) {
      removeSelection()
    }
    if (isExpanded) {
      setIsExpanded(false)
    }
  }, [isSelected, isExpanded, removeSelection])

  const handleExpandProject = useCallback(() => {
    setIsExpanded(true)
  }, [])

  const handleMinimizeProject = useCallback(() => {
    setIsExpanded(false)
  }, [])

  useOnClickOutside(projectRef, handleClickOutside)

  console.log(project.images ? project.images : "nill")
  return (
    <div
      className={clsx("project", {
        selected: isSelected,
        expanded: isExpanded
      })}
      onClick={() => {
        changeSelection(index)
        onClick && onClick()
      }}
      ref={projectRef}
    >
      <div
        className='background'
        style={{
          background: `url(${
            project?.images
              ? project.images.img1
              : "src/assets/projects/skeleton/skeleton.png"
          })`,
          backgroundSize: "150%",
          // backgroundPositionY: "0%",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      {isSelected && (
        <div className='project-controls'>
          <FullscreenOutlinedIcon
            className='project-control'
            onClick={isExpanded ? handleMinimizeProject : handleExpandProject}
          />
          <CloseOutlinedIcon
            className='project-control'
            onClick={() => {
              handleClickOutside()
              onClick && onClick()
            }}
          />
        </div>
      )}
      <div
        className='project-info'
        style={{ visibility: !isSelected ? "hidden" : "visible" }}
      >
        <h3 className='project-title'>{project.title}</h3>
        <p className='project-content'>{project.content}</p>
        {isExpanded && "images"}
      </div>
    </div>
  )
}

export default memo(Project)
