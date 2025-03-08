import { MutableRefObject } from "react";

export type SectionNames =
  | "welcome"
  | "about"
  | "skills"
  | "projects"
  | "contact"
  | "experience"
  | "";

export interface ISection {
  className?: string;
  currentSection: SectionNames;
  callbacks: MutableRefObject<Record<string, Record<string, () => void>>>;
}

export type ProjectType = {
  title: string;
  content: string;
  images?: Record<string, string>;
};
export type Skill = {
  value: number;
  label: string;
};

export type WorkSkill =
  | "node.js"
  | "react"
  | "MSSQL"
  | "MongoDB"
  | "SQL"
  | "frontend"
  | "backend"
  | "python"
  | "unity"
  | "c#"
  | "reactNative"
  | "javaScript"
  | "typeScript"
  | "elasticSearch"
  | "architecture"
  | "leetCode"
  | "dataStructures";

export type WorkExperience = {
  title: string;
  start: string;
  end?: string;
  location?: WorkPlaces;
  content: string[];
  skills: WorkSkill[];
};
export type WorkPlaces = "8200" | "Ind.";

export type FullPageEvents = "onLeave" | "afterReload" | "beforeLeave";
