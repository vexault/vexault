"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Stat {
  label: string
  value: number
  suffix: string
  color: string
}

const initialStats: Stat[] = [
  { label: "Drops Tracked", value: 47, suffix: "", color: "#00ff9f" },
  { label: "Price Updates", value: 289, suffix: "", color: "#a855f7" },
  { label: "Pairs Monitored", value: 124, suffix: "", color: "#06b6d4" },
  { label: "Scan Speed", value: 187, suffix: "ms", color: "#00ff9f" },
]

function AnimatedNumber({ value, color }: { value: number; color: string }) {
  const [displayValue, setDisplayValue] = useState(value)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayValue(prev => {
        const variance = Math.floor(Math.random() * 5) - 2
        return Math.max(1, prev + variance)
      })
    }, 2000 + Math.random() * 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <motion.span
      key={displayValue}
      initial={{ opacity: 0.5, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums"
      style={{ 
        color,
        textShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
      }}
    >
      {displayValue}
    </motion.span>
  )
}

export function LiveStats() {
  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {initialStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-center p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: stat.color, opacity: 0.1 }}
                />
                
                <div className="relative">
                  <div className="flex items-baseline justify-center gap-1">
                    <AnimatedNumber value={stat.value} color={stat.color} />
                    {stat.suffix && (
                      <span className="text-sm sm:text-base text-white/50">{stat.suffix}</span>
                    )}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
                
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
                  style={{ backgroundColor: stat.color }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "60%" }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
