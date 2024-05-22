import { ISection, ProjectType } from "../../../../types"
import "./project.css"

interface IProject extends ISection {
  project: ProjectType
}

const Project = (props: IProject) => {
  const { project } = props
  return (
    <div className='project'>
      <h3 className='project-title'>{project.title}</h3>
      <p className='project-content'>{project.content}</p>
    </div>
  )
}

export default Project
