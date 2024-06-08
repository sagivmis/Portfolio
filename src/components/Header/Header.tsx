import { CSSProperties, useEffect, useState } from "react"
import { SectionNames } from "../../types"
import LinkBar from "./LinkBar"
import "./header.css"

interface IHeader {
  currentSection: SectionNames
}

const Header = (props: IHeader) => {
  const { currentSection } = props
  const [style, setStyle] = useState<CSSProperties>()

  useEffect(() => {
    if (currentSection === "welcome") setStyle({ display: "none" })
    else if (currentSection === "about") setStyle({ display: "block" })
    else
      setStyle({
        display: "block",
        backgroundColor: "var(--background)",
        borderColor: "transparent"
      })
  }, [currentSection])

  return (
    <div className='header-container' style={style}>
      <LinkBar currentSection={currentSection} />
    </div>
  )
}

export default Header
