"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const technologies = [
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "TC" },
  { name: "OpenAI API", icon: "AI" },
  { name: "Vercel", icon: "V" },
  { name: "Python", icon: "Py" },
  { name: "React", icon: "R" },
  { name: "Node.js", icon: "N" },
]

export default function TechStackFooter() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDark(html.classList.contains("dark"))
  }

  return (
    <footer className="border-t border-border bg-background">
      {/* Tech Stack Marquee */}
      <div className="relative overflow-hidden py-8">
        <div className="flex gap-4 animate-slide">
          {[...technologies, ...technologies].map((tech, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium"
            >
              <span className="text-xs font-bold w-6 h-6 flex items-center justify-center rounded bg-muted">
                {tech.icon}
              </span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground text-center sm:text-left">Built with AI-Native Workflow</p>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
