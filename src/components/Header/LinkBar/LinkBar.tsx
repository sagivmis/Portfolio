import React, { useCallback } from "react"
import "./link-bar.css"
import { fullpageApi } from "@fullpage/react-fullpage"

interface ILinkBar {
  fullPageApi: fullpageApi
}
const LinkBar = (props: ILinkBar) => {
  const { fullPageApi } = props

  const goTo = useCallback(
    (dest: string) => {
      fullPageApi.moveTo(dest)
    },
    [fullPageApi]
  )

  return (
    <nav className='link-bar-container'>
      <ul className='link-list'>
        <li className='link' onClick={() => goTo("about")}>
          About
          {/* <a href='#about'>About Me</a> */}
        </li>
        <li className='link' onClick={() => goTo("skills")}>
          Skills
          {/* <a href='#skills'>Skills</a> */}
        </li>
        <li className='link' onClick={() => goTo("projects")}>
          Projects
          {/* <a href='#projects'>Projects</a> */}
        </li>
        <li className='link' onClick={() => goTo("contact")}>
          Contact
          {/* <a href='#contact'>Contact</a> */}
        </li>
      </ul>
    </nav>
  )
}

export default LinkBar
