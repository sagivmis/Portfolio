import clsx from "clsx";
import { ProjectType } from "../../../../types";
import "./project.css";
import {
  Dispatch,
  SetStateAction,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
interface IProject {
  project: ProjectType;
  selected: boolean;
  index: number;
  changeSelection: Dispatch<SetStateAction<number>>;
  onClick?: () => void;
  removeSelection: () => void;
}

const Project = (props: IProject) => {
  const {
    project,
    selected,
    index,
    removeSelection,
    onClick,
    changeSelection,
  } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const projectRef = useRef<HTMLDivElement>(null);
  const isSelected = useMemo(() => selected, [selected]);

  const handleExpandProject = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const handleMinimizeProject = useCallback(() => {
    setIsExpanded(false);
  }, []);

  const handleClickOutside = useCallback(() => {
    removeSelection();
    setIsExpanded(false);
    handleMinimizeProject();
  }, [setIsExpanded, removeSelection, handleMinimizeProject]);

  useOnClickOutside(projectRef, handleClickOutside);

  return (
    <div
      className={clsx("project", {
        selected: isSelected,
        expanded: isExpanded,
      })}
      onClick={() => {
        changeSelection(index);
        onClick && onClick();
        handleExpandProject();
      }}
      ref={projectRef}
    >
      <div
        className="background"
        style={{
          background: `url(${
            project?.images
              ? project.images.img1
              : "src/assets/projects/skeleton/skeleton.png"
          })`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="background-overlay"></div>
      </div>
      {isSelected && (
        <div className="project-controls">
          <CloseOutlinedIcon
            className="project-control"
            onClick={() => {
              handleClickOutside();
              // onClick && onClick();
            }}
          />
        </div>
      )}
      <div
        className="project-info"
        style={{ visibility: !isSelected ? "hidden" : "visible" }}
      >
        <h3 className="project-title">{project.title}</h3>
        <p className="project-content">{project.content}</p>
      </div>
      {project.images && isExpanded && (
        <ImageGallery
          showFullscreenButton={false}
          showPlayButton={false}
          items={Object.values(project.images).map((image) => {
            return { original: image };
          })}
        />
      )}
    </div>
  );
};

export default memo(Project);
