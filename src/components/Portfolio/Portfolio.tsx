import Footer from "../Footer"
import Header from "../Header"
import sections from "../sections"
import "./portfolio.css"

function Portfolio() {
  return (
    <div className='portfolio-container'>
      <Header />
      <div className='body-container'>
        {Object.values(sections).map((section) => {
          return section({ className: "section" })
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
