"use client"

import { Copy, Github, Linkedin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function HeroSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("engineer@example.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen border-b border-border px-4">
      <div className="mx-auto max-w-4xl">
        {/* Hero Content */}
        <div className="mb-12 space-y-6 text-center">
          <h1 className="text-pretty text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Engineering the AI-Driven SDLC.
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Building AI-native applications with engineering rigor.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button onClick={handleCopyEmail} variant="default" className="gap-2">
            <Copy className="h-4 w-4" />
            {copied ? "Email Copied!" : "Copy Email"}
          </Button>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Hint Indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce hover:text-muted-foreground transition-colors"
        aria-label="Scroll down to see more"
      >
        <span className="text-sm text-muted-foreground">Scroll</span>
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </button>
    </section>
  )
}
