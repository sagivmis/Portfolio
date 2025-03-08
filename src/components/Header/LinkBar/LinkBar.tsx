import { CSSProperties, useEffect, useState } from "react";
import { SectionNames } from "../../../types";
import "./link-bar.css";

interface ILinkBar {
  currentSection: SectionNames;
}
const LinkBar = (props: ILinkBar) => {
  const { currentSection } = props;
  const [linkStyle, setLinkStyle] = useState<CSSProperties>();

  return (
    <nav className="link-bar-container">
      <ul className="link-list">
        <li className="link">
          <a href="#about" style={linkStyle}>
            About
          </a>
        </li>
        <li className="link">
          <a href="#experience" style={linkStyle}>
            Experience
          </a>
        </li>
        <li className="link">
          <a href="#projects" style={linkStyle}>
            Projects
          </a>
        </li>
        <li className="link">
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default LinkBar;
