import clsx from "clsx"
import "./projects.css"
import { ISection } from "../../../types"
import Project from "./Project/Project"
import {
  CSSProperties,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react"
import { projects } from "../../../util/consts"

interface IProjects extends ISection {}

const Projects = (props: IProjects) => {
  const { currentSection, className } = props
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1)
  const [style, setStyle] = useState<CSSProperties>()

  const isCurrentSection = useMemo(
    () => currentSection === "projects",
    [currentSection]
  )

  const handleChangeSelection = (index: number) => {
    if (index !== selectedProjectIndex) setSelectedProjectIndex(index)
  }

  const handleResetSelectedProject = useCallback(() => {
    setSelectedProjectIndex(-1)
  }, [])

  useEffect(() => {
    if (!isCurrentSection)
      setTimeout(() => !isCurrentSection && setStyle({ display: "none" }), 700)
    // ms of delay should be equal to full page delay
    else setTimeout(() => isCurrentSection && setStyle(undefined), 700 / 3)
  }, [currentSection, isCurrentSection])

  return (
    <section className={clsx("projects-container", className)} style={style}>
      <div className='content-container'>
        {projects.map(
          (project, index) =>
            index % 3 === 0 && (
              <div className='slide'>
                {projects[index] && (
                  <Project
                    project={projects[index]}
                    selected={selectedProjectIndex === index}
                    removeSelection={handleResetSelectedProject}
                    index={index}
                    changeSelection={handleChangeSelection}
                  />
                )}
                {projects[index + 1] && (
                  <Project
                    project={projects[index + 1]}
                    selected={selectedProjectIndex === index + 1}
                    removeSelection={handleResetSelectedProject}
                    index={index + 1}
                    changeSelection={setSelectedProjectIndex}
                  />
                )}
                {projects[index + 2] && (
                  <Project
                    project={projects[index + 2]}
                    selected={selectedProjectIndex === index + 2}
                    removeSelection={handleResetSelectedProject}
                    index={index + 2}
                    changeSelection={setSelectedProjectIndex}
                  />
                )}
              </div>
            )
        )}
      </div>
    </section>
  )
}

export default memo(Projects)
