"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-16 md:py-20 px-4 border-t border-white/10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00ff9f]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to <span className="text-[#00ff9f]">Dominate</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 text-base md:text-lg">
            Join the elite network of sneaker arbitrage operators using AI-powered intelligence to maximize profits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 255, 159, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[#00ff9f] to-cyan-400 shadow-lg shadow-[#00ff9f]/25 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Deploy Your Agent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#a855f7', boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-bold text-white border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Join Waitlist
            </motion.button>
          </div>
        </motion.div>
        
        {/* Footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          {/* Logo & description */}
          <div className="col-span-2">
            <motion.div 
              className="flex items-center gap-3 mb-4"
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
            <p className="text-sm text-white/50 mb-4 max-w-sm">
              Enterprise-grade sneaker arbitrage intelligence powered by autonomous AI agents.
            </p>
            <p className="text-xs text-white/30 font-mono">
              $VEXAULT • Building the future of sneaker commerce
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4">Platform</h3>
            <ul className="space-y-3">
              {["Features", "Agents", "Pricing", "API Docs"].map((link) => (
                <li key={link}>
                  <motion.a 
                    href="#" 
                    className="text-sm text-white/50 hover:text-[#00ff9f] transition-colors inline-flex items-center gap-1 group"
                    whileHover={{ x: 3 }}
                  >
                    {link}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <motion.a 
                  href="https://github.com/vexault/vexault" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-[#00ff9f] transition-colors group"
                  whileHover={{ x: 3 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </motion.a>
              </li>
              {["Twitter", "Telegram", "Support"].map((link) => (
                <li key={link}>
                  <motion.a 
                    href="#" 
                    className="text-sm text-white/50 hover:text-[#00ff9f] transition-colors inline-flex items-center gap-1 group"
                    whileHover={{ x: 3 }}
                  >
                    {link}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 mt-8 border-t border-white/10">
          <p className="text-xs text-white/30">
            © 2026 Vexault. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
