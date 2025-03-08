import { useEffect, useRef, useState } from "react";
import Header from "../Header";
import { Contact, About, Projects, Skills } from "../sections";
import "./portfolio.css";
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
    const setVH = () =>
      document.documentElement.style.setProperty(
        "--100vh",
        `${window.innerHeight}px`
      );
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
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
