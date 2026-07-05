import {
  AIChatProject,
  AlgoTradeProject,
  GamesProject,
  SnapicProject,
} from "../assets";
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
      "As an Independent Full-Stack Engineer, I have crafted website applications with various levels of complexity.",
      "I focused on building robust architectures and delivering seamless user experiences, which continuously push the boundaries of modern web development.",
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
      "As an Independent Game Developer, I have developed a portfolio of engaging 2D and 3D arcade games.",
      "My projects feature sophisticated AI systems for enemy and non-playable characters, along with robust saving systems that let players seamlessly continue their adventures.",
      "This role has refined my skills in game design, AI programming, and creating dynamic gameplay experiences.",
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
    school to university, to achieve academic success.`,
      `I specialize in
    tailoring my teaching methods to meet individual needs, ensuring
    that complex concepts are made accessible and engaging.`,
      `Whether
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
    title: "Snapic",
    subtitle: "Find yourself in every wedding photo",
    content:
      "Guests upload a selfie and instantly discover every wedding photo they appear in — powered by InsightFace face matching.",
    description: [
      "Snapic is a full-stack wedding photo platform. Guests open an event link, upload a selfie, and get a personalized grid of every shot they appear in — no scrolling through hundreds of photos.",
      "Photographers run branded studios with upload pipelines, real-time indexing, and guest QR codes. Couples request private galleries with couple-mode matching for two portraits.",
    ],
    highlights: [
      "InsightFace-powered face matching with streaming results",
      "Guest PWA with selfie upload, zip download & share sheet",
      "Snapic Studio for photographers — branding, events & billing",
      "FastAPI backend on Render, React PWA on Vercel, Supabase auth",
    ],
    tags: ["React", "FastAPI", "InsightFace", "Supabase", "Stripe"],
    links: [
      { label: "Live app", url: "https://snapic.app/" },
      { label: "GitHub", url: "https://github.com/sagivmis/snapic" },
    ],
    images: SnapicProject,
    featured: true,
    year: "2025",
    category: "Wedding / AI",
  },
  {
    title: "Cryptocurrency Algo-Trade Bot",
    subtitle: "Automated trading with a desktop dashboard",
    content:
      "Python-powered trading engine with a React + Electron desktop front-end for strategy monitoring and execution.",
    description: [
      "A full-stack algorithmic trading system that analyzes cryptocurrency markets using pandas and numpy for signal generation and backtesting.",
      "The Electron desktop client built with React provides real-time portfolio tracking, strategy configuration, and trade execution controls in a single unified interface.",
    ],
    highlights: [
      "Python backend with pandas/numpy for market analysis",
      "React + Electron desktop dashboard",
      "Real-time strategy monitoring and execution",
      "Backtesting pipeline for strategy validation",
    ],
    tags: ["Python", "pandas", "React", "Electron", "Trading"],
    images: AlgoTradeProject,
    year: "2022",
    category: "FinTech",
  },
  {
    title: "AI Chatbot",
    subtitle: "Conversational AI with admin dashboard",
    content:
      "AI-powered chatbot with a full dashboard for user preferences, conversation history, and file management.",
    description: [
      "An intelligent chatbot platform with a rich admin dashboard for managing user preferences, uploaded files, and conversation flows.",
      "The dashboard provides analytics on usage patterns, file organization tools, and granular control over AI behavior and response parameters.",
    ],
    highlights: [
      "Conversational AI with context-aware responses",
      "Admin dashboard for preferences & file management",
      "Upload and organize documents for AI context",
      "Usage analytics and conversation history",
    ],
    tags: ["React", "Node.js", "AI", "Dashboard", "TypeScript"],
    images: AIChatProject,
    year: "2023",
    category: "AI / SaaS",
  },
  {
    title: "Independent Game Development",
    subtitle: "2D & 3D arcade games with AI-driven NPCs",
    content:
      "A portfolio of arcade games featuring sophisticated AI for enemies and NPCs, plus robust save systems.",
    description: [
      "Independent game development spanning 2D and 3D arcade titles, each featuring custom AI systems for enemy behavior and non-playable characters.",
      "Games include persistent save systems, dynamic difficulty scaling, and polished gameplay loops designed for replayability.",
    ],
    highlights: [
      "Custom AI systems for enemies and NPCs",
      "2D and 3D arcade game portfolio",
      "Persistent save & continue systems",
      "Built with Unity and C#",
    ],
    tags: ["Unity", "C#", "Game AI", "2D", "3D"],
    images: GamesProject,
    year: "2020",
    category: "Games",
  },
];
