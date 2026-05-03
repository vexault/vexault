"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Rocket, Sparkles, Zap, Star, ArrowRight } from "lucide-react"

export function FairlaunchBanner() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Intense animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00ff9f]/5 via-purple-900/20 to-cyan-900/10" />
      
      {/* Animated pulsing glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#00ff9f]"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          {/* Urgency Badge - More prominent */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(0, 255, 159, 0.3)',
                  '0 0 40px rgba(0, 255, 159, 0.6)',
                  '0 0 20px rgba(0, 255, 159, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#00ff9f] bg-[#00ff9f]/10 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-5 h-5 text-[#00ff9f] fill-[#00ff9f]" />
              </motion.div>
              <span className="text-[#00ff9f] text-base md:text-lg font-bold tracking-wider uppercase">
                Launching Very Soon
              </span>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-5 h-5 text-[#00ff9f] fill-[#00ff9f]" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Announcement - Much larger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mb-6"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              <motion.span 
                className="inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(0, 255, 159, 0.5)',
                    '0 0 40px rgba(0, 255, 159, 0.8)',
                    '0 0 20px rgba(0, 255, 159, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                $VEXAULT
              </motion.span>
              {" "}Fairlaunch
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#00ff9f] via-cyan-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Coming Soon on Bankr.bot
              </span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-300 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-medium"
          >
            Be early. The future of sneaker arbitrage intelligence is launching fair.
          </motion.p>

          {/* Image Container - Much larger with enhanced cyberpunk frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-12"
          >
            {/* Intense outer glow */}
            <motion.div 
              className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-[#00ff9f] via-purple-500 to-cyan-500 rounded-3xl blur-xl"
              animate={{
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Cyberpunk frame - thicker border */}
            <div className="relative bg-gradient-to-br from-[#00ff9f]/30 via-purple-500/30 to-cyan-500/30 p-1 md:p-1.5 rounded-2xl">
              <div className="relative bg-[#0a0a0a] rounded-xl overflow-hidden">
                {/* Corner accents - larger */}
                <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 border-t-3 border-l-3 border-[#00ff9f] rounded-tl-xl z-20" style={{ borderWidth: '3px' }} />
                <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 border-t-3 border-r-3 border-purple-500 rounded-tr-xl z-20" style={{ borderWidth: '3px' }} />
                <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 border-b-3 border-l-3 border-cyan-500 rounded-bl-xl z-20" style={{ borderWidth: '3px' }} />
                <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 border-b-3 border-r-3 border-[#00ff9f] rounded-br-xl z-20" style={{ borderWidth: '3px' }} />
                
                {/* Animated border lines */}
                <motion.div 
                  className="absolute top-0 left-16 right-16 h-[3px] bg-gradient-to-r from-transparent via-[#00ff9f] to-transparent z-20"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-0 left-16 right-16 h-[3px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent z-20"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                
                {/* Scanline effect on image */}
                <div className="absolute inset-0 pointer-events-none z-10 opacity-20"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.4) 3px, rgba(0,0,0,0.4) 6px)'
                  }}
                />
                
                {/* Glitch effect overlay */}
                <motion.div
                  animate={{
                    opacity: [0, 0.15, 0, 0.08, 0],
                    x: [0, -3, 3, -2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-transparent to-cyan-500/30 z-20 pointer-events-none"
                />

                <Image
                  src="/images/bankr-bot.jpg"
                  alt="Bankr.bot Fairlaunch"
                  width={600}
                  height={600}
                  className="w-full h-auto relative z-0"
                  priority
                />
              </div>
            </div>

            {/* Floating sparkles - larger */}
            <motion.div
              animate={{ y: [-8, 8, -8], opacity: [0.5, 1, 0.5], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 md:-top-8 md:-right-8"
            >
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-[#00ff9f]" />
            </motion.div>
            <motion.div
              animate={{ y: [8, -8, 8], opacity: [0.5, 1, 0.5], rotate: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8"
            >
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-purple-500" />
            </motion.div>
            <motion.div
              animate={{ y: [-5, 10, -5], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/2 -right-4 md:-right-6"
            >
              <Zap className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
            </motion.div>
          </motion.div>

          {/* CTA Button - Much more prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.a
              href="https://bankr.bot/launches"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3"
            >
              {/* Intense button glow */}
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-[#00ff9f] via-cyan-400 to-purple-500 rounded-2xl blur-lg"
                animate={{
                  opacity: [0.5, 0.9, 0.5]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              
              <div className="relative flex items-center gap-4 px-10 py-5 md:px-12 md:py-6 bg-gradient-to-r from-[#00ff9f] to-cyan-400 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_60px_rgba(0,255,159,0.6)]">
                <Rocket className="w-6 h-6 md:w-7 md:h-7 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="text-lg md:text-xl font-black text-black">
                  Join Fairlaunch on Bankr.bot
                </span>
                <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          </motion.div>

          {/* Additional info - better spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 text-sm md:text-base text-gray-400"
          >
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff9f]/30 bg-[#00ff9f]/5"
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 159, 0.6)' }}
            >
              <motion.div 
                className="w-2.5 h-2.5 rounded-full bg-[#00ff9f]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span>Fair Distribution</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5"
              whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.6)' }}
            >
              <motion.div 
                className="w-2.5 h-2.5 rounded-full bg-purple-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
              <span>No Presale</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5"
              whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.6)' }}
            >
              <motion.div 
                className="w-2.5 h-2.5 rounded-full bg-cyan-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />
              <span>Community First</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border gradient - more visible */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </section>
  )
}
