import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProjectCard } from "@/lib/projects";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateZhaosongProfileText(projects: ProjectCard[]): string {
  const intro = `Zhaosong Zhu
Senior Software Engineer

- Built large-scale AI/ML systems at top Silicon Valley companies
- Specialized in System Design, Fullstack Development, and Performance Optimization
- Extensive experience with TypeScript, React, Next.js, Node.js, Python, and cloud platforms
- Led teams, mentored engineers, and drove technical strategy in multiple startups

Projects (STAR Method):
`;

  const starProjects = projects
    .map(
      (proj) =>
        `● ${proj.title}
  - Situation/Task: ${proj.situation}
  - Action: ${proj.action}
  - Result: ${proj.result}
  - Tech: ${proj.tech.join(", ")}`
    )
    .join("\n\n");

  return intro + "\n" + starProjects;
}
