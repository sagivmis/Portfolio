import { useState } from "react"
import Header from "../Header"
import { Contact, About, Projects, Skills } from "../sections"
import "./portfolio.css"
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage"
import Welcome from "../sections/Welcome"

function Portfolio() {
  const sectionProps = { className: "section-container" }

  const [fullPageApi, setFullPageApi] = useState<fullpageApi>(null)

  return (
    <div className='portfolio-container'>
      <Header fullPageApi={fullPageApi} />
      <div className='body-container'>
        <ReactFullpage
          credits={{ enabled: false }}
          fitToSection={true}
          navigation
          licenseKey={"F00M9-H03MK-A9KJK-AJTJ7-JKJLM"}
          render={({ state, fullpageApi }) => {
            setFullPageApi(fullpageApi)

            return (
              <ReactFullpage.Wrapper>
                <div className='section' data-anchor='welcome'>
                  <Welcome {...sectionProps} />
                </div>
                <div className='section' data-anchor='about'>
                  <About {...sectionProps} />
                </div>
                <div className='section' data-anchor='skills'>
                  <Skills {...sectionProps} />
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
