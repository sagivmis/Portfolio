import clsx from "clsx"
import "./projects.css"
import { ISection, ProjectType } from "../../../types"
import Project from "./Project/Project"

interface IProjects extends ISection {}

const projects: ProjectType[] = [
  {
    title: "Cryptocurrency Algo-Trade Bot",
    content: "Developed using Python with pandas and numpy."
  },
  {
    title: "Independent Game Development",
    content: "Created 2D and 3D arcade games with AI systems for NPCs."
  }
]

const Projects = (props: IProjects) => {
  const { className } = props
  return (
    <section className={clsx("projects-container", className)} id='projects'>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </section>
  )
}

export default Projects
