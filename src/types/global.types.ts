import { MutableRefObject } from "react"

export type SectionNames =
  | "welcome"
  | "about"
  | "skills"
  | "projects"
  | "contact"
  | "experience"

export interface ISection {
  className?: string
  currentSection: SectionNames
  callbacks: MutableRefObject<Record<string, Record<string, () => void>>>
}

export type ProjectType = {
  title: string
  content: string
}
export type Skill = {
  value: number
  label: string
}
export type WorkExperience = {
  title: string
  start: string
  end?: string
  location?: WorkPlaces
  content: string
}
export type WorkPlaces = "8200" | "Ind."

export type FullPageEvents = "onLeave" | "afterReload" | "beforeLeave"
