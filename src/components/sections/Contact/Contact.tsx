import clsx from "clsx"
import "./contact.css"
import { ISection } from "../../../types"

interface IContact extends ISection {}

const Contact = (props: IContact) => {
  const { className } = props
  return (
    <section id='contact' className={clsx("contact-container", className)}>
      <h2>Contact</h2>
      <p>
        Email:
        <a href='mailto:sagivmishaan@gmail.com'>sagivmishaan@gmail.com</a>
      </p>
      <p>
        LinkedIn:
        <a href='https://www.linkedin.com/in/sagiv-mishaan-34262a155/'>
          Sagiv Mishaan
        </a>
      </p>
      <p>
        GitHub: <a href='https://github.com/sagivmis'>sagivmis</a>
      </p>
    </section>
  )
}

export default Contact
