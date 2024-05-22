import React from "react"
import "./skills.css"
import clsx from "clsx"
import { ISection } from "../../../types"

interface ISkills extends ISection {}

export type Skill = {
  name: string
  badge?: string
}
const skills: Skill[] = [
  { name: "Javascript", badge: "" },
  { name: "TypeScript", badge: "" },
  { name: "Python", badge: "" },
  { name: "C#", badge: "" },
  { name: "React", badge: "" },
  { name: "Node.js", badge: "" }
]

const Skills = (props: ISkills) => {
  const { className } = props

  return (
    <section className={clsx("skills-container", className)} id='skills'>
      <div className='skills-content-container'>
        <h2 className='skills-title'>Skills</h2>
        <ul className='skills-list'>
          {skills.map((skill) => (
            <li className='skill'>{skill.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
