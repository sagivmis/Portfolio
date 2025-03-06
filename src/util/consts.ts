import { AIChatProject, AlgoTradeProject } from "../assets";
import { Skill, WorkPlaces, WorkExperience, ProjectType } from "../types";

export const skillset: Skill[] = [
  { label: "CSS", value: 95 },
  { label: "HTML", value: 95 },
  { label: "JavaScript", value: 95 },
  { label: "TypeScript", value: 95 },
  { label: "React", value: 95 },
  { label: "Node.js", value: 95 },
  { label: "MongoDB", value: 95 },
  { label: "SQL", value: 95 },
  { label: "React-Native", value: 90 },
  { label: "ElasticSearch", value: 75 },
  { label: "Unity", value: 75 },
  { label: "Python", value: 70 },
  { label: "C#", value: 65 },
];

export const experiences: WorkExperience[] = [
  {
    title: "FULL STACK ENGINEER",
    location: "8200",
    start: "2022",
    content: `At IDF 8200 Unit, I spearheaded the creation of several full-stack
    applications, streamlining operations for intelligence teams. My
    work involved designing, developing, deploying, and maintaining
    scalable APIs and microservices, alongside crafting intuitive
    React frontend components integrated with diverse APIs and
    databases. Utilizing advanced AI tools, my efforts significantly
    boosted performance by optimizing database use and implementing
    efficient caching mechanisms with technologies like Redis,
    Node.js, and TypeScript. Additionally, I played a key role in
    transitioning our infrastructure to a micro-frontend architecture,
    enhancing CI/CD pipelines and reducing costs. My contributions to
    the logging framework, including organizing and indexing logs,
    greatly improved operational efficiency and business insights. I
    also took pride in mentoring new team members, ensuring a smooth
    onboarding process and knowledge transfer.`,
  },
  {
    title: "FULL STACK & GAME DEVELOPER",
    // location: "8200 Unit",
    start: "2020",
    content: `As an Independent Game Developer and Full-Stack Engineer, I have crafted a portfolio of
    engaging 2D and 3D arcade games, aswell as website applications with various complexity levels. 
    My creations feature sophisticated AI systems for enemy and non-playable characters (NPCs), enriching the gaming
    experience. I also implemented robust saving systems, allowing
    players to seamlessly continue their adventures. This role has
    honed my skills in game design, AI programming, and user
    experience, driving me to continuously push the boundaries of
    creativity and technical expertise.`,
  },
  {
    title: "TUTOR",
    // location: "8200 Unit",
    start: "2021",
    content: `I have empowered students across various levels, from middle
    school to university, to achieve academic success. I specialize in
    tailoring my teaching methods to meet individual needs, ensuring
    that complex concepts are made accessible and engaging. Whether
    guiding a middle schooler through their first coding class or
    helping a university student tackle advanced algorithms, my
    approach is always supportive, encouraging, and aimed at fostering
    a deep understanding and love for learning.`,
  },
];

export const workLocationsMapping: Record<WorkPlaces, string> = {
  "8200": "8200 IDF Unit",
  "Ind.": "Independent",
};
export const projects: ProjectType[] = [
  {
    title: "Cryptocurrency Algo-Trade Bot",
    content:
      "Developed using Python with pandas and numpy for the backend and\n React with Electron for the front-end.",
    images: AlgoTradeProject,
  },
  {
    title: "AI Chatbot",
    content: "with dashboard for user preferences and file management.",
    images: AIChatProject,
  },
  {
    title: "Independent Game Development",
    content: "Created 2D and 3D arcade games with AI systems for NPCs.",
  },
];
