import React from "react"
import "./link-bar.css"

const LinkBar = () => {
  return (
    <nav className='link-bar-container'>
      <ul className='link-list'>
        <li className='link'>
          <a href='#about'>About Me</a>
        </li>
        <li className='link'>
          <a href='#skills'>Skills</a>
        </li>
        <li className='link'>
          <a href='#projects'>Projects</a>
        </li>
        <li className='link'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default LinkBar
