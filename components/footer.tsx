"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative py-20 px-4 border-t border-white/10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00ff9f]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to <span className="text-[#00ff9f]">Dominate</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Join the elite network of sneaker arbitrage operators using AI-powered intelligence to maximize profits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-xl font-bold text-black bg-[#00ff9f] hover:shadow-[0_0_40px_#00ff9f] transition-all duration-300"
            >
              <span className="relative z-10">Deploy Your Agent</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00ff9f] to-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:border-[#a855f7] hover:shadow-[0_0_20px_#a855f750] transition-all duration-300"
            >
              Join Waitlist
            </motion.button>
          </div>
        </motion.div>
        
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          {/* Logo & description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/images/vexault-logo.jpg" 
                alt="Vexault" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">Vexault</span>
            </div>
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
            <ul className="space-y-2">
              {["Features", "Agents", "Pricing", "API Docs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/50 hover:text-[#00ff9f] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              {["Discord", "Twitter", "Telegram", "Support"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/50 hover:text-[#00ff9f] transition-colors">
                    {link}
                  </a>
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
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
