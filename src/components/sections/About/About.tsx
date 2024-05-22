import { ISection } from "../../../types"
import "./about.css"
import clsx from "clsx"

interface IAbout extends ISection {}

const About = (props: IAbout) => {
  const { className } = props
  return (
    <section id='about' className={clsx("about-container", className)}>
      <h1>Sagiv Mishaan</h1>
      <p>
        Experienced Full-Stack Engineer with a passion for innovative
        technology.
      </p>
    </section>
  )
}

export default About
