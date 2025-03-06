import { useEffect, useRef, useState } from "react";
import Header from "../Header";
import { Contact, About, Projects, Skills } from "../sections";
import "./portfolio.css";
import ReactFullpage, { Item } from "@fullpage/react-fullpage";
import Welcome from "../sections/Welcome";
import { FullPageEvents, SectionNames } from "../../types";
import CareerExperience from "../sections/CareerExperience";

function Portfolio() {
  const [currentSection, setCurrentSection] = useState<SectionNames>(
    (window.location.hash.split("#")[1] as SectionNames) || ""
  );

  const callbacks = useRef<Record<FullPageEvents, Record<string, () => void>>>({
    onLeave: {},
    afterReload: {},
    beforeLeave: {},
  });

  const sectionProps = {
    className: "section-container",
    currentSection,
    callbacks,
  };

  useEffect(() => {
    const vh = window.innerHeight;
    const setVH = () =>
      document.documentElement.style.setProperty("--100vh", `${vh}px`);
    setVH();
    document.addEventListener("resize", setVH);
    return () => document.removeEventListener("resize", setVH);
  }, []);

  return (
    <div className="portfolio-container">
      <Header currentSection={currentSection} />
      <div className="body-container">
        <div className="section" data-anchor="about">
          <About {...sectionProps} />
        </div>
        <div className="section" data-anchor="experience">
          <CareerExperience {...sectionProps} />
        </div>
        <div className="section" data-anchor="projects">
          <Projects {...sectionProps} />
        </div>
        <div className="section" data-anchor="contact">
          <Contact {...sectionProps} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
