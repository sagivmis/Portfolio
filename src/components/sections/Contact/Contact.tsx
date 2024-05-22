import clsx from "clsx"
import "./contact.css"
import { ISection } from "../../../types"
import Mail from "@mui/icons-material/MailOutlineOutlined"
import { Fiverr, GitHub, LinkedIn as LinkedInIcon } from "../../../assets"
import Footer from "../../Footer"

interface IContact extends ISection {}

const Contact = (props: IContact) => {
  const { className } = props
  return (
    <section
      id='contact'
      className={clsx("contact-footer-container", className)}
    >
      <div className='contact-footer'>
        <div className='contact-container'>
          <h2>Contact</h2>
          <span className='contact-options'>
            <span className='contact'>
              <span></span>
              <a href='mailto:sagivmishaan@gmail.com' className='contact-link'>
                <Mail />
                {/* sagivmishaan@gmail.com */}
              </a>
            </span>
            <span className='contact'>
              <a
                href='https://www.linkedin.com/in/sagiv-mishaan-34262a155/'
                className='contact-link'
              >
                <img
                  src={LinkedInIcon}
                  alt='linkedin'
                  className='contact-icon'
                />
              </a>
            </span>
            <span className='contact'>
              <a href='https://github.com/sagivmis' className='contact-link'>
                <img src={GitHub} alt='linkedin' className='contact-icon' />
              </a>
            </span>
            <span className='contact'>
              <a href='https://www.fiverr.com/yapikia' className='contact-link'>
                <img src={Fiverr} alt='linkedin' className='contact-icon' />
              </a>
            </span>
          </span>
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default Contact
