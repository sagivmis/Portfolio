import React, { useEffect, useMemo, useState } from "react";
import { ISection } from "../../../types";
import clsx from "clsx";
import "./career-experience.css";
import { experiences } from "../../../util";
import Experience from "./Experience";

interface ICareerExperience extends ISection {}

const CareerExperience = (props: ICareerExperience) => {
  const { currentSection, className, callbacks } = props;
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(-1);
  const [prevSelectedExperienceIndex, setPrevSelectedExperienceIndex] =
    useState(-1);

  const handleChangeSelectedExperience = (index: number) => {
    setSelectedExperienceIndex(selectedExperienceIndex === index ? -1 : index);
  };

  const handleResetSelectedExperience = () => {
    setPrevSelectedExperienceIndex(selectedExperienceIndex);
    setSelectedExperienceIndex(-1);
  };

  const hardResetSelectedExperience = () => {
    setPrevSelectedExperienceIndex(-1);
    setSelectedExperienceIndex(-1);
  };

  useEffect(() => {
    callbacks.current["onLeave"] = { experience: hardResetSelectedExperience };
  }, [callbacks]);

  return (
    <section
      className={clsx("career-experience-section-container", className)}
      id="experience"
    >
      <div className="career-experience-content-container content-container">
        <div className="career-experience-container">
          {experiences.map((experience, index) => {
            return (
              <Experience
                index={index}
                experience={experience}
                selected={selectedExperienceIndex === index}
                isLast={index === experiences.length - 1}
                isPrevSelected={prevSelectedExperienceIndex === index}
                removeSelection={handleResetSelectedExperience}
                onClick={() => handleChangeSelectedExperience(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerExperience;
