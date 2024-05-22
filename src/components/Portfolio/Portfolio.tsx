import Footer from "../Footer"
import Header from "../Header"
import { Contact, About, Projects, Skills } from "../sections"
import "./portfolio.css"

function Portfolio() {
  const sectionProps = { className: "section" }
  return (
    <div className='portfolio-container'>
      <Header />
      <div className='body-container'>
        <About {...sectionProps} />
        <Skills {...sectionProps} />
        <Projects {...sectionProps} />
        <Contact {...sectionProps} />
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
