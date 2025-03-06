import clsx from "clsx";
import "./projects.css";
import { ISection } from "../../../types";
import Project from "./Project/Project";
import { memo, useCallback, useState } from "react";
import { projects } from "../../../util/consts";

interface IProjects extends ISection {}

const Projects = (props: IProjects) => {
  const { className } = props;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);

  const handleChangeSelection = (index: number) => {
    if (index !== selectedProjectIndex) setSelectedProjectIndex(index);
  };

  const handleResetSelectedProject = useCallback(() => {
    setSelectedProjectIndex(-1);
  }, []);

  return (
    <section className={clsx("projects-container", className)} id="projects">
      <div id="background"></div>

      <div className="projects-content-container content-container">
        {projects.map(
          (project, index) =>
            index % 3 === 0 && (
              <>
                {projects[index] && (
                  <Project
                    key={`${index}`}
                    project={projects[index]}
                    selected={selectedProjectIndex === index}
                    removeSelection={handleResetSelectedProject}
                    index={index}
                    changeSelection={handleChangeSelection}
                  />
                )}
                {projects[index + 1] && (
                  <Project
                    key={`${index + 1}`}
                    project={projects[index + 1]}
                    selected={selectedProjectIndex === index + 1}
                    removeSelection={handleResetSelectedProject}
                    index={index + 1}
                    changeSelection={handleChangeSelection}
                  />
                )}
                {projects[index + 2] && (
                  <Project
                    key={`${index + 2}`}
                    project={projects[index + 2]}
                    selected={selectedProjectIndex === index + 2}
                    removeSelection={handleResetSelectedProject}
                    index={index + 2}
                    changeSelection={handleChangeSelection}
                  />
                )}
              </>
            )
        )}
      </div>
    </section>
  );
};

export default memo(Projects);
