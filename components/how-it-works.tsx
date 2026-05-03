"use client"

import { motion } from "framer-motion"
import { Rocket, Radar, Zap, BarChart3, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Deploy Agent",
    description: "Configure your autonomous agents with preferred retailers, sizes, and budget limits.",
    color: "#00ff9f",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "Monitor Drops",
    description: "AI agents continuously scan 1000+ endpoints for upcoming releases and restocks.",
    color: "#a855f7",
    icon: <Radar className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "Auto-Execute",
    description: "When opportunities match your criteria, agents execute purchases in milliseconds.",
    color: "#06b6d4",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    number: "04",
    title: "Track & Optimize",
    description: "Real-time portfolio tracking with ML-powered recommendations for optimal liquidation.",
    color: "#00ff9f",
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    number: "05",
    title: "Maximize ROI",
    description: "Automated arbitrage execution across marketplaces to capture maximum profit.",
    color: "#a855f7",
    icon: <TrendingUp className="w-5 h-5" />,
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-[#06b6d4]">Works</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
            From deployment to profit in five automated steps
          </p>
        </motion.div>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <motion.div 
            className="absolute top-16 left-0 right-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, #00ff9f, #a855f7, #06b6d4, #00ff9f, #a855f7)'
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                {/* Step number circle */}
                <motion.div
                  className="relative z-10 w-14 h-14 mx-auto rounded-full border-2 flex items-center justify-center mb-6 bg-[#0a0a0a] cursor-pointer"
                  style={{ 
                    borderColor: step.color,
                    boxShadow: `0 0 20px ${step.color}40`,
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: `0 0 40px ${step.color}60`
                  }}
                >
                  <span style={{ color: step.color }}>{step.icon}</span>
                </motion.div>
                
                {/* Content card */}
                <motion.div 
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <span 
                    className="text-xs font-mono mb-2 block"
                    style={{ color: step.color }}
                  >
                    Step {step.number}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00ff9f] transition-colors">{step.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Tablet Timeline */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-3 gap-6 mb-6">
            {steps.slice(0, 3).map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {steps.slice(3).map((step, index) => (
              <StepCard key={step.number} step={step} index={index + 3} />
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
              className="flex gap-4 items-start group"
            >
              {/* Step number */}
              <motion.div 
                className="shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center bg-[#0a0a0a]"
                style={{ 
                  borderColor: step.color,
                  boxShadow: `0 0 15px ${step.color}40`,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <span style={{ color: step.color }}>{step.icon}</span>
              </motion.div>
              
              {/* Content */}
              <div className="flex-1 pb-4 border-b border-white/10">
                <span 
                  className="text-xs font-mono block mb-1"
                  style={{ color: step.color }}
                >
                  Step {step.number}
                </span>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#00ff9f] transition-colors">{step.title}</h3>
                <p className="text-sm text-white/50">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <motion.div
        className="w-12 h-12 mx-auto rounded-full border-2 flex items-center justify-center mb-4 bg-[#0a0a0a]"
        style={{ 
          borderColor: step.color,
          boxShadow: `0 0 15px ${step.color}40`,
        }}
        whileHover={{ scale: 1.1 }}
      >
        <span style={{ color: step.color }}>{step.icon}</span>
      </motion.div>
      
      <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
        <span className="text-xs font-mono block mb-1" style={{ color: step.color }}>
          Step {step.number}
        </span>
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00ff9f] transition-colors">{step.title}</h3>
        <p className="text-xs text-white/50">{step.description}</p>
      </div>
    </motion.div>
  )
}
