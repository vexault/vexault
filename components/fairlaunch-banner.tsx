"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Rocket, Sparkles, Zap } from "lucide-react"

export function FairlaunchBanner() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-cyan-900/10" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Urgency Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff9f]/50 bg-[#00ff9f]/10 backdrop-blur-sm">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Zap className="w-4 h-4 text-[#00ff9f]" />
              </motion.div>
              <span className="text-[#00ff9f] text-sm font-semibold tracking-wider uppercase">
                Launching Very Soon
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                <Zap className="w-4 h-4 text-[#00ff9f]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Announcement */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mb-4"
          >
            <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              $VEXAULT Fairlaunch
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#00ff9f] via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Coming Soon on Bankr.bot
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Be early. The future of sneaker arbitrage intelligence is launching fair.
          </motion.p>

          {/* Image Container with Cyberpunk Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative max-w-md mx-auto mb-10"
          >
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff9f] via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-50 animate-pulse" />
            
            {/* Cyberpunk frame */}
            <div className="relative bg-gradient-to-br from-[#00ff9f]/20 via-purple-500/20 to-cyan-500/20 p-1 rounded-2xl">
              <div className="relative bg-[#0a0a0a] rounded-xl overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00ff9f] rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00ff9f] rounded-br-xl" />
                
                {/* Scanline effect on image */}
                <div className="absolute inset-0 pointer-events-none z-10 opacity-30"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                  }}
                />
                
                {/* Glitch effect overlay */}
                <motion.div
                  animate={{
                    opacity: [0, 0.1, 0, 0.05, 0],
                    x: [0, -2, 2, -1, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-cyan-500/20 z-20 pointer-events-none"
                />

                <Image
                  src="/images/bankr-bot.jpg"
                  alt="Bankr.bot Fairlaunch"
                  width={400}
                  height={400}
                  className="w-full h-auto relative z-0"
                  priority
                />
              </div>
            </div>

            {/* Floating particles */}
            <motion.div
              animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4"
            >
              <Sparkles className="w-8 h-8 text-[#00ff9f]" />
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4"
            >
              <Sparkles className="w-8 h-8 text-purple-500" />
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <a
              href="https://bankr.bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3"
            >
              {/* Button glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff9f] via-cyan-400 to-purple-500 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
              
              <div className="relative flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] rounded-xl border border-[#00ff9f]/50 group-hover:border-[#00ff9f] transition-all duration-300">
                <Rocket className="w-5 h-5 text-[#00ff9f] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="text-lg font-bold text-[#00ff9f] group-hover:text-white transition-colors">
                  Join Fairlaunch on Bankr.bot
                </span>
              </div>
            </a>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse" />
              <span>Fair Distribution</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span>No Presale</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>Community First</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  )
}
