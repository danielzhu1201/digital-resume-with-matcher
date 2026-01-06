"use client"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import ResumeMatcherSection from "@/components/resume-matcher-section"
import TechStackFooter from "@/components/tech-stack-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProjectsSection />
      <ResumeMatcherSection />
      <TechStackFooter />
    </main>
  )
}
