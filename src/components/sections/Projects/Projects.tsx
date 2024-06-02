import clsx from "clsx"
import "./projects.css"
import { ISection, ProjectType } from "../../../types"
import Project from "./Project/Project"

interface IProjects extends ISection {}

const projects: ProjectType[] = [
  {
    title: "Cryptocurrency Algo-Trade Bot",
    content:
      "Developed using Python with pandas and numpy for the backend and\n React with Electron for the front-end."
  },
  {
    title: "AI Chatbot",
    content: "with dashboard for user preferences and file management."
  },
  {
    title: "Independent Game Development",
    content: "Created 2D and 3D arcade games with AI systems for NPCs."
  }
]

const Projects = (props: IProjects) => {
  const { className } = props
  return (
    <section className={clsx("projects-container", className)}>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </section>
  )
}

export default Projects