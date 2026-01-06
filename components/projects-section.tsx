"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCard {
  title: string
  situation: string
  action: string
  tech: string[]
  result: string
}

const projects: ProjectCard[] = [
  {
    title: "AI Code Review Engine",
    situation: "Team needed automated code quality enforcement at scale",
    action: "Built semantic analysis pipeline with LLM integration using prompt engineering and vector embeddings",
    tech: ["TypeScript", "OpenAI API", "Vercel"],
    result: "Reduced review time by 60%, caught 40% more edge cases",
  },
  {
    title: "Real-Time Analytics Dashboard",
    situation: "Need to surface performance metrics to 500+ engineers in real-time",
    action: "Designed high-density UI with WebSocket streaming and optimistic updates using React Server Components",
    tech: ["Next.js", "React", "Tailwind CSS"],
    result: "Sub-100ms data latency, 99.9% uptime, handles 10k concurrent users",
  },
  {
    title: "Prompt Optimization Framework",
    situation: "LLM responses inconsistent and cost was spiraling with long inference times",
    action: "Created parameter-tuning system with A/B testing framework and cost analytics",
    tech: ["Python", "OpenAI API", "TypeScript"],
    result: "Reduced costs by 35%, improved response quality by 50% (human eval)",
  },
  {
    title: "Distributed Training Pipeline",
    situation: "Model training took 72 hours on single GPU, needed faster iteration",
    action: "Implemented multi-GPU training orchestration with gradient synchronization and checkpointing",
    tech: ["Python", "Vercel", "TypeScript"],
    result: "Reduced training time to 12 hours, enabled 6x daily iteration cycles",
  },
]

export default function ProjectsSection() {
  return (
    <section className="border-b border-border px-4 py-20 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects (STAR Method)</h2>
          <p className="mt-2 text-muted-foreground">Engineering challenges solved with quantifiable impact</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Card key={idx} className="border-zinc-800 dark:bg-zinc-950 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                {/* Situation */}
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    S/T: Situation/Task
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">{project.situation}</p>
                </div>

                {/* Action */}
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">A: Action</p>
                  <p className="mt-1 text-sm leading-relaxed">{project.action}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Result */}
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">R: Result</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{project.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
