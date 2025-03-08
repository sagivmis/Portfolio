import clsx from "clsx";
import { WorkExperience } from "../../../../types";
import "./experience.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IExperience {
  experience: WorkExperience;
  index: number;
  selected: boolean;
  isPrevSelected: boolean;
  isLast?: boolean;
  onClick?: () => void;
  removeSelection: () => void;
}

const Experience = (props: IExperience) => {
  const {
    selected,
    onClick,
    removeSelection,
    experience: { content, start, title, end, location },
  } = props;

  const experienceRef = useRef<HTMLDivElement>();

  useOnClickOutside(experienceRef, removeSelection);

  return (
    <Accordion
      classes={{ root: "experience-accordion-container" }}
      expanded={selected}
    >
      <AccordionSummary
        className="experience-accordion-title"
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        onClick={() => onClick()}
      >
        <Typography component="span">
          <h4 className="experience-title">
            <span className="experience-description">{title}</span>
            {location && (
              <span className="experience-location">{location}</span>
            )}
            <span className="experience-duration">
              {start} – {end || "PRESENT"}
            </span>
          </h4>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="experience-accordion-content">
        {content.map((con) => (
          <p className="experience-content" ref={experienceRef}>
            {con}
          </p>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default Experience;
