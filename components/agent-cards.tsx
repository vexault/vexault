"use client"

import { motion } from "framer-motion"
import { Activity, Eye, Search, TrendingUp, BarChart3 } from "lucide-react"
import { useEffect, useState } from "react"

interface Agent {
  name: string
  description: string
  status: "Active" | "Processing" | "Idle"
  icon: React.ReactNode
  metrics: {
    label: string
    value: string
  }[]
  color: string
}

const agents: Agent[] = [
  {
    name: "Drop Scanner",
    description: "Real-time monitoring of 1000+ retail endpoints for new releases",
    status: "Active",
    icon: <Search className="w-6 h-6" />,
    metrics: [
      { label: "Endpoints", value: "1,247" },
      { label: "Latency", value: "12ms" },
    ],
    color: "#00ff9f",
  },
  {
    name: "Price Monitor",
    description: "Tracks resale prices across 50+ marketplaces in real-time",
    status: "Active",
    icon: <Eye className="w-6 h-6" />,
    metrics: [
      { label: "Markets", value: "54" },
      { label: "Updates/s", value: "847" },
    ],
    color: "#a855f7",
  },
  {
    name: "VaultSeeker",
    description: "Discovers hidden inventory and restocks before public release",
    status: "Processing",
    icon: <Activity className="w-6 h-6" />,
    metrics: [
      { label: "Vaults Found", value: "23" },
      { label: "Success Rate", value: "94%" },
    ],
    color: "#06b6d4",
  },
  {
    name: "ArbEngine",
    description: "Calculates optimal arbitrage opportunities across platforms",
    status: "Active",
    icon: <TrendingUp className="w-6 h-6" />,
    metrics: [
      { label: "Opportunities", value: "156" },
      { label: "Avg ROI", value: "+47%" },
    ],
    color: "#00ff9f",
  },
  {
    name: "Demand Analyzer",
    description: "Predicts demand spikes using ML and social sentiment analysis",
    status: "Active",
    icon: <BarChart3 className="w-6 h-6" />,
    metrics: [
      { label: "Accuracy", value: "91%" },
      { label: "Signals", value: "342" },
    ],
    color: "#a855f7",
  },
]

function StatusBadge({ status }: { status: Agent["status"] }) {
  const colors = {
    Active: "bg-[#00ff9f]/20 text-[#00ff9f] border-[#00ff9f]/50",
    Processing: "bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/50",
    Idle: "bg-white/10 text-white/50 border-white/20",
  }
  
  return (
    <span className={`px-2 py-1 text-xs font-mono rounded border ${colors[status]} flex items-center gap-1.5`}>
      {status === "Active" && <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] animate-pulse" />}
      {status === "Processing" && <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />}
      {status}
    </span>
  )
}

function AnimatedMetric({ label, value, color }: { label: string; value: string; color: string }) {
  const [displayValue, setDisplayValue] = useState(value)
  
  useEffect(() => {
    // Only animate numeric values
    const numMatch = value.match(/^([+]?)(\d+)(.*)$/)
    if (!numMatch) return
    
    const interval = setInterval(() => {
      const [, prefix, num, suffix] = numMatch
      const variance = Math.floor(Math.random() * 3) - 1
      const newNum = Math.max(1, parseInt(num) + variance)
      setDisplayValue(`${prefix}${newNum}${suffix}`)
    }, 3000 + Math.random() * 2000)
    
    return () => clearInterval(interval)
  }, [value])
  
  return (
    <div className="text-center">
      <p className="text-lg font-mono font-bold" style={{ color }}>{displayValue}</p>
      <p className="text-xs text-white/50">{label}</p>
    </div>
  )
}

export function AgentCards() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powered by <span className="text-[#00ff9f]">Intelligent Agents</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Autonomous AI systems working 24/7 to find, analyze, and execute profitable sneaker opportunities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div 
                className="h-full p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                  style={{ backgroundColor: agent.color, opacity: 0.15 }}
                />
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ 
                      backgroundColor: `${agent.color}15`,
                      color: agent.color,
                    }}
                  >
                    {agent.icon}
                  </div>
                  <StatusBadge status={agent.status} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{agent.name}</h3>
                <p className="text-sm text-white/50 mb-4 leading-relaxed">{agent.description}</p>
                
                {/* Metrics */}
                <div className="flex justify-around pt-4 border-t border-white/10">
                  {agent.metrics.map((metric) => (
                    <AnimatedMetric 
                      key={metric.label} 
                      label={metric.label} 
                      value={metric.value} 
                      color={agent.color} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
