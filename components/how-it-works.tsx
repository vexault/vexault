"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Deploy Agent",
    description: "Configure your autonomous agents with preferred retailers, sizes, and budget limits.",
    color: "#00ff9f",
  },
  {
    number: "02",
    title: "Monitor Drops",
    description: "AI agents continuously scan 1000+ endpoints for upcoming releases and restocks.",
    color: "#a855f7",
  },
  {
    number: "03",
    title: "Auto-Execute",
    description: "When opportunities match your criteria, agents execute purchases in milliseconds.",
    color: "#06b6d4",
  },
  {
    number: "04",
    title: "Track & Optimize",
    description: "Real-time portfolio tracking with ML-powered recommendations for optimal liquidation.",
    color: "#00ff9f",
  },
  {
    number: "05",
    title: "Maximize ROI",
    description: "Automated arbitrage execution across marketplaces to capture maximum profit.",
    color: "#a855f7",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It <span className="text-[#06b6d4]">Works</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From deployment to profit in five automated steps
          </p>
        </motion.div>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connection line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00ff9f] via-[#a855f7] to-[#06b6d4] opacity-30" />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step number circle */}
                <motion.div
                  className="relative z-10 w-12 h-12 mx-auto rounded-full border-2 flex items-center justify-center font-mono font-bold text-sm mb-6"
                  style={{ 
                    borderColor: step.color,
                    color: step.color,
                    boxShadow: `0 0 20px ${step.color}40`,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {step.number}
                </motion.div>
                
                {/* Content card */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              {/* Step number */}
              <div 
                className="shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs"
                style={{ 
                  borderColor: step.color,
                  color: step.color,
                  boxShadow: `0 0 15px ${step.color}40`,
                }}
              >
                {step.number}
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-4 border-b border-white/10">
                <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-white/50">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
