import { ISection } from "../../../types"
import "./about.css"
import clsx from "clsx"
import Sagiv from "../../../assets/Sagiv.png"

interface IAbout extends ISection {}

const About = (props: IAbout) => {
  const { className } = props
  return (
    <section id='about' className={clsx("about-container", className)}>
      <div className='about-content-container'>
        <img src={Sagiv} alt='image' className='about-logo' />
        {/* <h1>Sagiv Mishaan</h1> */}
        <p className='about-content'>
          Experienced Full-Stack Engineer with a passion for innovative
          technology.
        </p>
      </div>
    </section>
  )
}

export default About
