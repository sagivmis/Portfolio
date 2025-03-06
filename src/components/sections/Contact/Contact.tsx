import clsx from "clsx";
import "./contact.css";
import { ISection } from "../../../types";
import Mail from "@mui/icons-material/MailOutlineOutlined";
import { Fiverr, GitHub, LinkedIn as LinkedInIcon } from "../../../assets";
import Footer from "../../Footer";

interface IContact extends ISection {}

const Contact = (props: IContact) => {
  const { className } = props;
  return (
    <section
      className={clsx("contact-footer-container", className)}
      id="contact"
    >
      <div className="contact-content-container content-container">
        <div className="contact-footer">
          <div className="contact-container">
            <h2>Contact</h2>
            <span className="contact-options">
              <span className="contact">
                <a
                  href="mailto:sagivmishaan@gmail.com"
                  className="contact-link"
                >
                  <Mail />
                </a>
              </span>
              <span className="contact">
                <a
                  href="https://www.linkedin.com/in/sagiv-mishaan-34262a155/"
                  className="contact-link"
                >
                  <img
                    src={LinkedInIcon}
                    alt="linkedin"
                    className="contact-icon"
                  />
                </a>
              </span>
              <span className="contact">
                <a href="https://github.com/sagivmis" className="contact-link">
                  <img src={GitHub} alt="linkedin" className="contact-icon" />
                </a>
              </span>
              <span className="contact">
                <a
                  href="https://www.fiverr.com/yapikia"
                  className="contact-link"
                >
                  <img src={Fiverr} alt="linkedin" className="contact-icon" />
                </a>
              </span>
            </span>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
