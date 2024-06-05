import { useRef, useState } from "react"
import Header from "../Header"
import { Contact, About, Projects, Skills } from "../sections"
import "./portfolio.css"
import ReactFullpage, { Item } from "@fullpage/react-fullpage"
import Welcome from "../sections/Welcome"
import { FullPageEvents, SectionNames } from "../../types"
import CareerExperience from "../sections/CareerExperience"

function Portfolio() {
  const [currentSection, setCurrentSection] = useState<SectionNames>(
    (window.location.hash.split("#")[1] as SectionNames) || ""
  )

  const [isFirstRender, setIsFirstRender] = useState(true)
  const callbacks = useRef<Record<FullPageEvents, Record<string, () => void>>>({
    onLeave: {},
    afterReload: {},
    beforeLeave: {}
  })
  const sectionProps = {
    className: "section-container",
    currentSection,
    callbacks
  }

  return (
    <div className='portfolio-container'>
      <Header />
      <div className='body-container'>
        <ReactFullpage
          credits={{ enabled: false }}
          fitToSection={true}
          navigation
          onLeave={(origin: Item, dest: Item, direction: string, trigger) => {
            setCurrentSection(dest.anchor as SectionNames)
            // onLeave()
            Object.values(callbacks.current["onLeave"]).forEach((callback) => {
              callback()
            })
          }}
          afterLoad={(origin: Item, dest: Item, direction: string, trigger) => {
            setCurrentSection(dest.anchor as SectionNames)
            console.log(dest.anchor)
          }}
          beforeLeave={(
            origin: Item,
            dest: Item,
            direction: string,
            trigger
          ) => {
            setCurrentSection(dest.anchor as SectionNames)
          }}
          licenseKey={"F00M9-H03MK-A9KJK-AJTJ7-JKJLM"}
          keyboardScrolling
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className='section' data-anchor='welcome'>
                  <Welcome {...sectionProps} />
                </div>
                <div className='section' data-anchor='about'>
                  <About {...sectionProps} />
                </div>
                <div className='section' data-anchor='experience'>
                  <CareerExperience {...sectionProps} />
                </div>
                <div className='section' data-anchor='projects'>
                  <Projects {...sectionProps} />
                </div>
                <div className='section' data-anchor='contact'>
                  <Contact {...sectionProps} />
                </div>
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </div>
    </div>
  )
}

export default Portfolio
