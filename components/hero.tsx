"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TerminalFeed } from "./terminal-feed"
import { ChevronDown, ExternalLink } from "lucide-react"

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
        <div className="absolute top-0 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#00ff9f]/10 rounded-full blur-[120px] md:blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#a855f7]/10 rounded-full blur-[120px] md:blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#06b6d4]/10 rounded-full blur-[120px] md:blur-[150px] translate-y-1/2" />
      </div>
      
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto w-full">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <Image 
            src="/images/vexault-logo.jpg" 
            alt="Vexault" 
            width={40} 
            height={40}
            className="rounded-lg shadow-lg"
          />
          <span className="text-xl font-bold text-white">Vexault</span>
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
              className="text-sm text-white/60 hover:text-[#00ff9f] transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff9f] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
        
        <motion.a
          href="https://github.com/vexault/vexault"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 159, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-black bg-[#00ff9f] rounded-lg shadow-lg transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span className="hidden sm:inline">GitHub</span>
        </motion.a>
      </nav>
      
      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl mx-auto w-full">
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
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#00ff9f]/30 bg-[#00ff9f]/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 159, 0.6)' }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-[#00ff9f]"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs sm:text-sm font-mono text-[#00ff9f]">5 Agents Active</span>
            </motion.div>
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance">
              <span className="text-white">Vexault</span>
              <br />
              <span className="bg-gradient-to-r from-[#00ff9f] via-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent">
                Enterprise Sneaker
              </span>
              <br />
              <span className="text-white">Arbitrage Intelligence</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty">
              Autonomous AI agents that monitor 1000+ retail endpoints, snipe profitable drops, and maximize resale profits in real-time.
            </p>
            
            {/* CTA buttons - improved styling */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 255, 159, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[#00ff9f] to-cyan-400 shadow-lg shadow-[#00ff9f]/25 transition-all duration-300"
              >
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
                whileHover={{ scale: 1.05, borderColor: '#a855f7', boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-xl font-bold text-white border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Watch Demo
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </span>
              </motion.button>
            </div>
            
            {/* Stats inline */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 mt-10 pt-10 border-t border-white/10">
              {[
                { value: "1,247+", label: "Retail Endpoints", color: "#00ff9f" },
                { value: "$4.2M+", label: "Monthly Volume", color: "#a855f7" },
                { value: "12ms", label: "Avg Response", color: "#06b6d4" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center lg:text-left"
                >
                  <p className="text-xl sm:text-2xl font-bold font-mono" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-white/50">{stat.label}</p>
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
          <ChevronDown className="w-5 h-5 text-[#00ff9f]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
