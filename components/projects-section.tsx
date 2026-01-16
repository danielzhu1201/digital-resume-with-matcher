"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ProjectCard, projects } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section className="border-b border-border px-4 py-20 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects (STAR Method)
          </h2>
          <p className="mt-2 text-muted-foreground">
            Engineering challenges solved with quantifiable impact
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="border-zinc-800 dark:bg-zinc-950 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                {/* Situation */}
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    S/T: Situation/Task
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    {project.situation}
                  </p>
                </div>

                {/* Action */}
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    A: Action
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    {project.action}
                  </p>
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
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    R: Result
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {project.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
