"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TerminalFeed } from "./terminal-feed"
import { ChevronDown, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background effects - Premium violet/purple theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        
        {/* Premium radial gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-violet-600/15 rounded-full blur-[150px] md:blur-[200px] -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-500/10 rounded-full blur-[150px] md:blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[150px] md:blur-[180px] translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[200px]" />
      </div>
      
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-5 max-w-7xl mx-auto w-full">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl blur-sm opacity-60" />
            <Image 
              src="/images/vexault-logo.jpg" 
              alt="Vevault" 
              width={42} 
              height={42}
              className="relative rounded-lg shadow-lg"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Vevault</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#agents", label: "Agents" },
            { href: "#features", label: "Features" },
            { href: "#how-it-works", label: "How It Works" },
          ].map((link) => (
            <motion.a 
              key={link.href}
              href={link.href} 
              className="text-sm text-white/60 hover:text-violet-400 transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
        
        <motion.a
          href="https://github.com/vexault/vexault"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-violet-500 rounded-xl shadow-lg shadow-violet-500/25 transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span className="hidden sm:inline">GitHub</span>
        </motion.a>
      </nav>
      
      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl mx-auto w-full">
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
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.6)' }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-violet-500"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs sm:text-sm font-medium text-violet-300">5 AI Agents Online</span>
            </motion.div>
            
            {/* Headline - Premium Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-6 tracking-tight">
              <span className="text-white">Vevault</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Enterprise Sneaker Arbitrage Intelligence
              </span>
            </p>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              Autonomous AI agents that monitor 1000+ retail endpoints, snipe profitable drops, and maximize resale profits in real-time.
            </p>
            
            {/* CTA buttons - Premium styling */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 60px rgba(139, 92, 246, 0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 bg-[length:200%_100%] animate-gradient" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                  Deploy Your Agent
                  <motion.span 
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03, borderColor: 'rgba(6, 182, 212, 0.6)', boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="group px-8 py-4 rounded-xl font-bold text-white border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Watch Demo
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </span>
              </motion.button>
            </div>
            
            {/* Stats inline */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-10 mt-12 pt-12 border-t border-white/5">
              {[
                { value: "1,247+", label: "Retail Endpoints", color: "from-violet-400 to-purple-400" },
                { value: "$4.2M+", label: "Monthly Volume", color: "from-purple-400 to-pink-400" },
                { value: "12ms", label: "Avg Response", color: "from-cyan-400 to-teal-400" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center lg:text-left"
                >
                  <p className={`text-2xl sm:text-3xl font-bold font-mono bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</p>
                </motion.div>
              ))}
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
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 font-mono">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5 text-violet-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
