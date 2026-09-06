import type { Profile } from "@/content/types";
import { projects } from "@/content/projects";

export const profile: Profile = {
  fullName: "Hi, I am Akash More",
  professionalTitle: "Software Engineer | Backend & AI Application Developer",
  positioningStatement:
    "I build backend systems, APIs, and modern web applications. Now focused on Generative AI and Agentic AI, working with RAG, agents, and LLM-powered workflows.",
  email: "akash.more.work49@gmail.com",
  social: {
    github: "https://github.com/AkashMore291097",
    linkedin: "https://www.linkedin.com/in/akash-more-developer",
  },
  resumePath: "https://drive.google.com/file/d/18qjZYlkFlK4waZEbyGT-HwzpD_L-bgok/view?usp=sharing",
  location: "Mumbai",
  timezone: "IST",
  timezoneId: "Asia/Kolkata",
  updatedMonth: "September 2026",
  aboutParagraph: "Software Engineer with 5+ years of experience building scalable backend and full-stack applications using Node.js, Express.js, Python, FastAPI, React.js, MySQL and Redis. Experienced in application architecture, REST API development, database optimization, third-party integrations, AWS deployment and production support. Currently expanding into Generative AI and Agentic AI using Python FastAPI, LLM APIs, LangChain, LangGraph, RAG and Vector databases.",
  photoPath: "/assets/avatar.png",
  contactStatement: "I'm always open to interesting backend and GenAI problems. Reach out if you're building one.",
  facts: [
    { value: "5+", label: "Years shipping" },
    { value: "Backend & GenAI", label: "Focus" },
    { value: projects.length.toString(), label: "Featured Projects" },
    { value: "Mumbai", label: "Location" },
  ],
  available: true,
};
