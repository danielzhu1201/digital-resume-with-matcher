export interface ProjectCard {
  title: string;
  situation: string;
  action: string;
  tech: string[];
  result: string;
}

export const projects: ProjectCard[] = [
  {
    title: "AI Code Review Engine",
    situation: "Team needed automated code quality enforcement at scale",
    action:
      "Built semantic analysis pipeline with LLM integration using prompt engineering and vector embeddings",
    tech: ["TypeScript", "OpenAI API", "Vercel"],
    result: "Reduced review time by 60%, caught 40% more edge cases",
  },
  {
    title: "Real-Time Analytics Dashboard",
    situation:
      "Need to surface performance metrics to 500+ engineers in real-time",
    action:
      "Designed high-density UI with WebSocket streaming and optimistic updates using React Server Components",
    tech: ["Next.js", "React", "Tailwind CSS"],
    result:
      "Sub-100ms data latency, 99.9% uptime, handles 10k concurrent users",
  },
  {
    title: "Prompt Optimization Framework",
    situation:
      "LLM responses inconsistent and cost was spiraling with long inference times",
    action:
      "Created parameter-tuning system with A/B testing framework and cost analytics",
    tech: ["Python", "OpenAI API", "TypeScript"],
    result:
      "Reduced costs by 35%, improved response quality by 50% (human eval)",
  },
  {
    title: "Distributed Training Pipeline",
    situation:
      "Model training took 72 hours on single GPU, needed faster iteration",
    action:
      "Implemented multi-GPU training orchestration with gradient synchronization and checkpointing",
    tech: ["Python", "Vercel", "TypeScript"],
    result:
      "Reduced training time to 12 hours, enabled 6x daily iteration cycles",
  },
];
