"use client"

import { Hero } from "@/components/hero"
import { LiveStats } from "@/components/live-stats"
import { AgentCards } from "@/components/agent-cards"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { DashboardPreview } from "@/components/dashboard-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a] min-h-screen">
      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none noise z-50" />
      
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none scanline z-40 opacity-20" />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Live Stats Bar */}
      <div className="relative bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <LiveStats />
      </div>
      
      {/* Agents Section */}
      <section id="agents">
        <AgentCards />
      </section>
      
      {/* Features Section */}
      <section id="features">
        <Features />
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works">
        <HowItWorks />
      </section>
      
      {/* Dashboard Preview */}
      <DashboardPreview />
      
      {/* Footer / CTA */}
      <Footer />
    </main>
  )
}
