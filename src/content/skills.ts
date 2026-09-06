import type { SkillCategory } from "@/content/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      { label: "Node.js", icon: "nodedotjs" },
      { label: "Express.js", icon: "express" },
      { label: "Python", icon: "python" },
      { label: "FastAPI", icon: "fastapi" },
      { label: "PostgreSQL", icon: "postgresql" },
      { label: "MySQL", icon: "mysql" },
      { label: "Redis", icon: "redis" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { label: "React.js", icon: "react" },
      { label: "JavaScript", icon: "javascript" },
      { label: "HTML5", icon: "html5" },
      { label: "CSS3", icon: "css3" },
    ],
  },
  {
    name: "GenAI & LLM",
    skills: [
      { label: "LangChain", icon: "langchain" },
      { label: "LangGraph", icon: "langgraph" },
      { label: "RAG" },
      { label: "Vector Databases" },
      { label: "Embeddings" },
      { label: "Agents" },
      { label: "Prompt Engineering" },
      { label: "MCP" },
    ],
  },
  {
    name: "Cloud & Tools",
    skills: [
      { label: "AWS" },
      { label: "Git", icon: "git" },
      { label: "Jenkins", icon: "jenkins" },
      { label: "GitHub Copilot", icon: "githubcopilot" },
      { label: "Claude Code", icon: "claudecode" },
    ],
  },
];
