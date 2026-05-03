"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TerminalFeed } from "./terminal-feed"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#00ff9f 1px, transparent 1px), linear-gradient(90deg, #00ff9f 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Radial gradients */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00ff9f]/10 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#a855f7]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06b6d4]/10 rounded-full blur-[150px] translate-y-1/2" />
      </div>
      
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Image 
            src="/images/vexault-logo.jpg" 
            alt="Vexault" 
            width={40} 
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-white">Vexault</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#agents" className="text-sm text-white/60 hover:text-[#00ff9f] transition-colors">Agents</a>
          <a href="#features" className="text-sm text-white/60 hover:text-[#00ff9f] transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-white/60 hover:text-[#00ff9f] transition-colors">How It Works</a>
        </div>
        
        <motion.a
          href="https://github.com/vexault/vexault"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-[#00ff9f] rounded-lg hover:shadow-[0_0_20px_#00ff9f] transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </motion.a>
      </nav>
      
      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto w-full">
        {/* Left side - Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-[#00ff9f]/30 bg-[#00ff9f]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse" />
              <span className="text-xs font-mono text-[#00ff9f]">5 Agents Active</span>
            </motion.div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance">
              <span className="text-white">Vexault</span>
              <br />
              <span className="bg-gradient-to-r from-[#00ff9f] via-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent">
                Enterprise Sneaker
              </span>
              <br />
              <span className="text-white">Arbitrage Intelligence</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty">
              Autonomous AI agents that monitor 1000+ retail endpoints, snipe profitable drops, and maximize resale profits in real-time.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl font-bold text-black bg-[#00ff9f] hover:shadow-[0_0_40px_#00ff9f] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Deploy Your Agent
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:border-[#a855f7] hover:shadow-[0_0_20px_#a855f750] transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
            
            {/* Stats inline */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 pt-10 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold text-[#00ff9f] font-mono">1,247+</p>
                <p className="text-xs text-white/50">Retail Endpoints</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#a855f7] font-mono">$4.2M+</p>
                <p className="text-xs text-white/50">Monthly Volume</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#06b6d4] font-mono">12ms</p>
                <p className="text-xs text-white/50">Avg Response</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right side - Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 w-full max-w-xl lg:max-w-none"
        >
          <TerminalFeed />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 font-mono">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5 text-[#00ff9f]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
