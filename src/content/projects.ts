import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    name: "{{PROJECT_1_NAME}}",
    order: 1,
    problem: "{{PROJECT_1_PROBLEM}}",
    solution: "{{PROJECT_1_SOLUTION}}",
    metrics: [
      { figure: "{{PROJECT_1_METRIC_1}}", label: "{{PROJECT_1_METRIC_1}}", condition: "{{PROJECT_1_METRIC_CONDITION}}" },
      { figure: "{{PROJECT_1_METRIC_2}}", label: "{{PROJECT_1_METRIC_2}}", condition: "{{PROJECT_1_METRIC_CONDITION}}" },
      { figure: "{{PROJECT_1_METRIC_3}}", label: "{{PROJECT_1_METRIC_3}}", condition: "{{PROJECT_1_METRIC_CONDITION}}" },
    ],
    stack: ["{{PROJECT_1_STACK}}"],
    repoUrl: "{{PROJECT_1_REPO_URL}}",
    limits: [
      "{{PROJECT_1_LIMITS_1}}",
      "{{PROJECT_1_LIMITS_2}}",
      "{{PROJECT_1_LIMITS_3}}",
      "{{PROJECT_1_LIMITS_4}}",
    ],
  },
  {
    name: "{{PROJECT_2_NAME}}",
    order: 2,
    problem: "{{PROJECT_2_PROBLEM}}",
    solution: "{{PROJECT_2_SOLUTION}}",
    metrics: [
      { figure: "{{PROJECT_2_METRIC_1}}", label: "{{PROJECT_2_METRIC_1}}", condition: "{{PROJECT_2_METRIC_CONDITION}}" },
      { figure: "{{PROJECT_2_METRIC_2}}", label: "{{PROJECT_2_METRIC_2}}", condition: "{{PROJECT_2_METRIC_CONDITION}}" },
      { figure: "{{PROJECT_2_METRIC_3}}", label: "{{PROJECT_2_METRIC_3}}", condition: "{{PROJECT_2_METRIC_CONDITION}}" },
    ],
    stack: ["{{PROJECT_2_STACK}}"],
    repoUrl: "{{PROJECT_2_REPO_URL}}",
    limits: [
      "{{PROJECT_2_LIMITS_1}}",
      "{{PROJECT_2_LIMITS_2}}",
      "{{PROJECT_2_LIMITS_3}}",
      "{{PROJECT_2_LIMITS_4}}",
    ],
  },
  {
    name: "{{PROJECT_3_NAME}}",
    order: 3,
    problem: "{{PROJECT_3_PROBLEM}}",
    solution: "{{PROJECT_3_SOLUTION}}",
    metrics: [
      { figure: "{{PROJECT_3_METRIC_1}}", label: "{{PROJECT_3_METRIC_1}}", condition: "{{PROJECT_3_METRIC_CONDITION}}" },
      { figure: "{{PROJECT_3_METRIC_2}}", label: "{{PROJECT_3_METRIC_2}}", condition: "{{PROJECT_3_METRIC_CONDITION}}" },
      { figure: "{{PROJECT_3_METRIC_3}}", label: "{{PROJECT_3_METRIC_3}}", condition: "{{PROJECT_3_METRIC_CONDITION}}" },
    ],
    stack: ["{{PROJECT_3_STACK}}"],
    repoUrl: "{{PROJECT_3_REPO_URL}}",
    limits: [
      "{{PROJECT_3_LIMITS_1}}",
      "{{PROJECT_3_LIMITS_2}}",
      "{{PROJECT_3_LIMITS_3}}",
      "{{PROJECT_3_LIMITS_4}}",
    ],
  },
];
