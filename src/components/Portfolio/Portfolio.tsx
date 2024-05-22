import Header from "../Header"
import { Contact, About, Projects, Skills } from "../sections"
import "./portfolio.css"
import ReactFullpage from "@fullpage/react-fullpage"

function Portfolio() {
  const sectionProps = { className: "section-container" }

  return (
    <div className='portfolio-container'>
      <Header />
      <div className='body-container'>
        <ReactFullpage
          credits={{ enabled: false }}
          fitToSection={true}
          anchors={["slide1", "slide2", "slide3", "slide4"]}
          licenseKey={"F00M9-H03MK-A9KJK-AJTJ7-JKJLM"}
          render={({ state, fullpageApi }) => {
            console.log(state, fullpageApi)
            return (
              <ReactFullpage.Wrapper>
                <div className='section' data-anchor='slide1'>
                  <About {...sectionProps} />
                </div>
                <div className='section' data-anchor='slide2'>
                  <Skills {...sectionProps} />
                </div>
                <div className='section' data-anchor='slide3'>
                  <Projects {...sectionProps} />
                </div>
                <div className='section' data-anchor='slide4'>
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
