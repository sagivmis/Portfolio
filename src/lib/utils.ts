import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export function useReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export const sectionIds = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
] as const

export type SectionId = (typeof sectionIds)[number]

export const navLinks: { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export const heroRoles = [
  "Full-Stack Engineer",
  "Game Developer",
  "Builder",
  "Problem Solver",
]

export const skillGroups: Record<string, string[]> = {
  Frontend: ["CSS", "HTML", "JavaScript", "TypeScript", "React", "React-Native"],
  Backend: ["Node.js", "Python", "C#"],
  Data: ["MongoDB", "SQL", "ElasticSearch"],
  Game: ["Unity"],
}
