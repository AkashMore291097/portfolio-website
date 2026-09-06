import type { Capability } from "@/content/types";

// Generic, swap-in defaults — replace libraries with the real toolset before launch.
export const capabilities: Capability[] = [
  {
    title: "RAG pipelines",
    description: "Chunking, embedding, and retrieval over a real document set.",
    libraries: ["LangChain", "FAISS"],
    relatedProjectId: "{{PROJECT_1_NAME}}",
  },
  {
    title: "Agents and tool use",
    description: "Models that call functions and act on their own output.",
    libraries: ["Anthropic API"],
    relatedProjectId: "{{PROJECT_2_NAME}}",
  },
  {
    title: "Voice",
    description: "Speech in, speech out, wired to a live model.",
    libraries: ["{{PROJECT_3_STACK}}"],
  },
  {
    title: "MCP tooling",
    description: "Model Context Protocol servers exposing real capabilities to a client.",
    libraries: ["Anthropic API"],
  },
];
