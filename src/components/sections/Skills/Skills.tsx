import React from "react"
import "./skills.css"
import clsx from "clsx"
import { ISection } from "../../../types"

interface ISkills extends ISection {}

const Skills = (props: ISkills) => {
  const { className } = props

  return (
    <section className={clsx("skills-container", className)} id='skills'>
      <div className='skills-content-container'>
        <h2 className='skills-title'>Skills</h2>
        <ul className='skills-list'>
          <li className='skill'>JavaScript</li>
          <li className='skill'>TypeScript</li>
          <li className='skill'>Python</li>
          <li className='skill'>C#</li>
          <li className='skill'>React</li>
          <li className='skill'>Node.js</li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
