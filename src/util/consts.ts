import { AIChatProject, AlgoTradeProject } from "../assets";
import { Skill, WorkPlaces, WorkExperience, ProjectType } from "../types";

export const skillset: Skill[] = [
  { label: "CSS", value: 100 },
  { label: "HTML", value: 100 },
  { label: "JavaScript", value: 100 },
  { label: "TypeScript", value: 100 },
  { label: "React", value: 100 },
  { label: "Node.js", value: 100 },
  { label: "MongoDB", value: 100 },
  { label: "SQL", value: 100 },
  { label: "React-Native", value: 95 },
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
    content: [
      `At IDF 8200 Unit, I spearheaded the creation of several full-stack
    applications, streamlining operations for intelligence teams.`,
      `My
    work involved designing, developing, deploying, and maintaining
    scalable APIs and microservices, alongside crafting intuitive
    React frontend components integrated with diverse APIs and
    databases.`,
      ` Utilizing advanced AI tools, my efforts significantly
    boosted performance by optimizing database use and implementing
    efficient caching mechanisms with technologies like Redis,
    Node.js, and TypeScript. `,
      `Additionally, I played a key role in
    transitioning our infrastructure to a micro-frontend architecture,
    enhancing CI/CD pipelines and reducing costs. My contributions to
    the logging framework, including organizing and indexing logs,
    greatly improved operational efficiency and business insights. `,
      `I
    also took pride in mentoring new team members, ensuring a smooth
    onboarding process and knowledge transfer.`,
    ],
    skills: [
      "javaScript",
      "typeScript",
      "node.js",
      "backend",
      "frontend",
      "elasticSearch",
      "architecture",
      "MSSQL",
      "SQL",
    ],
  },
  {
    title: "FULL STACK",
    start: "2020",
    content: [
      "As an Independent Full-Stack Engineer, I have crafted website applications with various levels of complexity. I focused on building robust architectures and delivering seamless user experiences, which continuously push the boundaries of modern web development.",
    ],
    skills: [
      "architecture",
      "frontend",
      "backend",
      "javaScript",
      "typeScript",
      "MongoDB",
      "node.js",
      "dataStructures",
    ],
  },
  {
    title: "GAME DEVELOPER",
    start: "2020",
    content: [
      "As an Independent Game Developer, I have developed a portfolio of engaging 2D and 3D arcade games. My projects feature sophisticated AI systems for enemy and non-playable characters, along with robust saving systems that let players seamlessly continue their adventures. This role has refined my skills in game design, AI programming, and creating dynamic gameplay experiences.",
    ],
    skills: ["c#", "unity"],
  },
  // {
  //   title: "FULL STACK & GAME DEVELOPER",
  //   // location: "8200 Unit",
  //   start: "2020",
  //   content: [
  //     `As an Independent Game Developer and Full-Stack Engineer, I have crafted a portfolio of
  //   engaging 2D and 3D arcade games, aswell as website applications with various complexity levels.
  //   My creations feature sophisticated AI systems for enemy and non-playable characters (NPCs), enriching the gaming
  //   experience. I also implemented robust saving systems, allowing
  //   players to seamlessly continue their adventures. This role has
  //   honed my skills in game design, AI programming, and user
  //   experience, driving me to continuously push the boundaries of
  //   creativity and technical expertise.`,
  //   ],
  //   skills: [
  //     "c#",
  //     "unity",
  //     "architecture",
  //     "frontend",
  //     "backend",
  //     "javaScript",
  //     "typeScript",
  //     "MongoDB",
  //     "node.js",
  //     "dataStructures",
  //   ],
  // },
  {
    title: "TUTOR",
    // location: "8200 Unit",
    start: "2021",
    content: [
      `I have empowered students across various levels, from middle
    school to university, to achieve academic success. I specialize in
    tailoring my teaching methods to meet individual needs, ensuring
    that complex concepts are made accessible and engaging. Whether
    guiding a middle schooler through their first coding class or
    helping a university student tackle advanced algorithms, my
    approach is always supportive, encouraging, and aimed at fostering
    a deep understanding and love for learning.`,
    ],
    skills: ["leetCode", "architecture", "dataStructures"],
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
