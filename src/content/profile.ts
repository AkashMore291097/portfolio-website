import type { Profile } from "@/content/types";
import { roles } from "@/content/experience";
import { projects } from "@/content/projects";

export const profile: Profile = {
  fullName: "Akash More",
  professionalTitle: "Full Stack Developer",
  positioningStatement: "I design and ship full-stack systems that stay legible under load.",
  email: "akashmore49@gmail.com",
  social: {
    github: "{{GITHUB_URL}}",
    linkedin: "{{LINKEDIN_URL}}",
  },
  resumePath: "{{RESUME_PATH}}",
  location: "{{LOCATION}}",
  timezone: "IST",
  timezoneId: "Asia/Kolkata",
  yearsExperience: "5.5",
  updatedMonth: "September 2026",
  aboutParagraph: "{{ABOUT_PARAGRAPH}}",
  facts: [
    { value: "5.5", label: "Years shipping" },
    { value: roles.length.toString(), label: "Roles held" },
    { value: projects.length.toString(), label: "Featured projects" },
    { value: "{{LOCATION}}", label: "Location" },
  ],
  available: true,
};
