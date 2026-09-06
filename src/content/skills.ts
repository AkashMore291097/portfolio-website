import type { GraphEdge, GraphNode, SkillCategory } from "@/content/types";

// Generic, swap-in defaults — not tied to any specific claim about the
// author's real stack. Replace chips/nodes with the real toolset before launch.
export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    context: "What most systems here are written in.",
    chips: ["TypeScript", "Python", "SQL"],
  },
  {
    name: "Backend",
    context: "Services, APIs, and the runtime they ship on.",
    chips: ["Node.js", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    name: "Data & AI",
    context: "Retrieval, embeddings, and model orchestration.",
    chips: ["LangChain", "FAISS", "Anthropic API"],
  },
  {
    name: "Infra",
    context: "How services are built, shipped, and run.",
    chips: ["Docker", "AWS", "Vercel"],
  },
  {
    name: "Frontend",
    context: "The layer the reader is looking at right now.",
    chips: ["React", "Vite", "Tailwind CSS"],
  },
  {
    name: "Tooling",
    context: "Version control, testing, and everyday plumbing.",
    chips: ["Git", "GitHub Actions", "Vitest"],
  },
];

export const graphNodes: GraphNode[] = [
  { id: "react", label: "React", icon: "react" },
  { id: "node", label: "Node.js", icon: "nodedotjs" },
  { id: "postgres", label: "PostgreSQL", icon: "postgresql" },
  { id: "redis", label: "Redis", icon: "redis" },
  { id: "langchain", label: "LangChain", icon: "langchain" },
  { id: "faiss", label: "FAISS", icon: "meta" },
  { id: "docker", label: "Docker", icon: "docker" },
  { id: "vercel", label: "Vercel", icon: "vercel" },
  { id: "python", label: "Python", icon: "python" },
];

export const graphEdges: GraphEdge[] = [
  { source: "react", target: "node" },
  { source: "node", target: "redis" },
  { source: "node", target: "postgres" },
  { source: "node", target: "docker" },
  { source: "docker", target: "vercel" },
  { source: "langchain", target: "faiss" },
  { source: "langchain", target: "python" },
  { source: "python", target: "node" },
];
