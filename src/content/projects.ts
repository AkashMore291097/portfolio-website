import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    name: "Finvesto",
    order: 1,
    problem:
      "Most personal finance tools either flatten everything into one balance number or expect you to keep a spreadsheet. Neither one handles money that moves on its own, like a recurring bill or a monthly SIP.",
    solution:
      "A full-stack finance platform that treats recurring money as a first-class concept. It covers accounts, categories, budgets, and transactions, promotes recurring transactions and investment contributions automatically on a schedule, and serves a cached dashboard for net worth, spending trends, and budget-vs-actual.",
    features: [
      "Track every account, category, budget, and transaction in one place. Nothing is ever hard-deleted, so the history stays auditable",
      "Set a recurring bill or a monthly investment once and it posts itself on schedule, with no reminder and no manual entry",
      "See net worth, spending trends, category and investment breakdowns, and budget-vs-actual at a glance, served from cache",
      "Secured by design, with token auth, tiered rate limits, and schema validation on write endpoints",
    ],
    stack: ["Node.js", "Express", "MySQL", "Sequelize", "Redis", "React", "JavaScript"],
    repoUrl: "https://github.com/AkashMore291097/finvesto-web",
  },
  {
    name: "DocGPT",
    order: 2,
    problem:
      "Finding an answer inside a long PDF means skimming the whole thing or guessing at search terms. An LLM that answers from memory instead of the document in front of it is worse than no answer at all.",
    solution:
      "A document chat pipeline where you upload a PDF and it gets chunked, embedded, and made queryable. Every answer is grounded in that specific document, and you get a straight 'not covered' when the document doesn't hold one.",
    features: [
      "Upload a PDF and start asking questions, with no configuration and no manual indexing step",
      "Every answer is drawn from the document itself, with a plain 'not covered' instead of a confident guess",
      "Each account gets its own private library. Retrieval is scoped per user and per document, so nothing leaks across either boundary",
      "Conversations are saved per document, so you can close the tab and pick the thread back up",
    ],
    stack: ["Python", "FastAPI", "LangChain", "OpenAI", "Qdrant", "React"],
    repoUrl: "https://github.com/AkashMore291097/doc-gpt-api",
  },
  {
    name: "AI CRM Sales Assistant",
    order: 3,
    problem:
      "Answering 'what does my pipeline look like' usually means writing SQL by hand or waiting on a dashboard someone else built. A salesperson shouldn't need either one.",
    solution:
      "A LangGraph agent that knows the CRM's schema and turns a plain-English question into a safe, read-only query against it. No fixed report to maintain, no dashboard to wait on, just an answer.",
    features: [
      "Ask about pipeline, leads, or performance in plain English and get an answer straight off the CRM tables",
      "The agent writes its own query per question, so a new kind of question needs no new report",
      "Queries are read-only by construction. The agent can look, never write",
      "Asks a follow-up question when a request is ambiguous instead of guessing at what you meant",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "OpenAI", "MySQL"],
    repoUrl: "https://github.com/AkashMore291097/ai-crm-sales-assistant",
  },
  {
    name: "Ecommerce Order Agent",
    order: 4,
    problem:
      "Most of a support queue is one question asked a thousand ways: where is my order. Handing that to an LLM with database access is easy, but an agent that will answer anything is a liability, not a feature.",
    solution:
      "A support agent that decides whether a question is even in scope before it touches a tool or the database. Off-topic requests get a clean deflection with no query and no model spend, and order questions get answered from the real order record.",
    features: [
      "Ask about an order in plain English and get its real status back, looked up by tracking ID",
      "A dedicated scope-check step runs first and turns away anything that isn't an order question",
      "Off-topic requests never reach the database or a tool call, which keeps both cost and blast radius down",
      "A direct REST lookup sits alongside the conversational path, for callers that just want the record",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "OpenAI", "MySQL"],
    repoUrl: "https://github.com/AkashMore291097/ecommerce-order-agent",
  },
];
