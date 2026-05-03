"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LogEntry {
  id: number
  agent: string
  icon: string
  action: string
  detail: string
  value?: string
  timestamp: string
  type: "snipe" | "alert" | "profit" | "scan" | "update"
}

const agents = [
  { name: "DropsniperX", icon: "⚡" },
  { name: "PriceOracle", icon: "↑" },
  { name: "MarketMover", icon: "!" },
  { name: "VaultSeeker", icon: "◈" },
  { name: "ArbEngine", icon: "⟁" },
  { name: "DemandPulse", icon: "◉" },
]

const sneakers = [
  "Jordan 4 Retro",
  "Nike Dunk Low",
  "Yeezy Boost 350",
  "Travis Scott AJ1",
  "Off-White Blazer",
  "Union LA Dunk",
  "Nike SB Dunk",
  "New Balance 550",
  "ASICS Gel-Lyte",
  "Air Force 1 Low",
]

const retailers = [
  "Nike SNKRS",
  "Footlocker",
  "JD Sports",
  "Finish Line",
  "Champs",
  "Eastbay",
  "SSENSE",
  "END.",
  "SNS",
  "Kith",
]

const actions = [
  { type: "snipe" as const, verb: "Sniped", prefix: "→" },
  { type: "profit" as const, verb: "Liquidated", prefix: "+" },
  { type: "alert" as const, verb: "Alert Triggered", prefix: "→" },
  { type: "scan" as const, verb: "Detected Drop", prefix: "→" },
  { type: "update" as const, verb: "Price Update", prefix: "↗" },
]

function generateLog(id: number): LogEntry {
  const agent = agents[Math.floor(Math.random() * agents.length)]
  const action = actions[Math.floor(Math.random() * actions.length)]
  const sneaker = sneakers[Math.floor(Math.random() * sneakers.length)]
  const retailer = retailers[Math.floor(Math.random() * retailers.length)]
  
  const now = new Date()
  const timestamp = now.toLocaleTimeString("en-US", { 
    hour12: false, 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit" 
  })
  
  let detail = ""
  let value = ""
  
  switch (action.type) {
    case "snipe":
      detail = `${sneaker} on ${retailer}`
      value = `$${Math.floor(Math.random() * 200 + 100)}`
      break
    case "profit":
      detail = sneaker
      value = `+${Math.floor(Math.random() * 80 + 15)}%`
      break
    case "alert":
      detail = retailer
      value = ""
      break
    case "scan":
      detail = `${sneaker}`
      value = `${retailer}`
      break
    case "update":
      detail = sneaker
      value = `$${Math.floor(Math.random() * 150 + 200)} → $${Math.floor(Math.random() * 200 + 300)}`
      break
  }
  
  return {
    id,
    agent: agent.name,
    icon: agent.icon,
    action: action.verb,
    detail,
    value,
    timestamp,
    type: action.type,
  }
}

export function TerminalFeed() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const idRef = useRef(0)

  useEffect(() => {
    // Initial logs
    const initialLogs = Array.from({ length: 8 }, () => generateLog(idRef.current++))
    setLogs(initialLogs)

    const interval = setInterval(() => {
      setLogs(prev => {
        const newLog = generateLog(idRef.current++)
        const updated = [...prev, newLog]
        return updated.slice(-12) // Keep last 12 logs
      })
    }, Math.random() * 1500 + 800) // Random interval between 800ms and 2300ms

    return () => clearInterval(interval)
  }, [])

  const getTypeColor = (type: LogEntry["type"]) => {
    switch (type) {
      case "snipe": return "text-[#00ff9f]"
      case "profit": return "text-[#00ff9f]"
      case "alert": return "text-[#a855f7]"
      case "scan": return "text-[#06b6d4]"
      case "update": return "text-[#f59e0b]"
      default: return "text-white"
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg border border-white/10 bg-black/60 backdrop-blur-sm">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs font-mono text-white/50 ml-2">vexault_live_feed.sh</span>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse" />
          <span className="text-xs font-mono text-[#00ff9f]">LIVE</span>
        </div>
      </div>
      
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none scanline opacity-30" />
      
      {/* Logs container */}
      <div 
        ref={containerRef}
        className="p-3 space-y-1 font-mono text-xs sm:text-sm overflow-hidden h-[280px] sm:h-[320px]"
      >
        <AnimatePresence mode="popLayout">
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-2 py-1 border-b border-white/5"
            >
              <span className="text-white/30 shrink-0">[{log.timestamp}]</span>
              <span className={`${getTypeColor(log.type)} shrink-0 font-bold`}>
                {log.agent}
              </span>
              <span className="text-white/50">{log.icon}</span>
              <span className="text-white/70">{log.action}</span>
              <span className="text-white/50">→</span>
              <span className="text-white/90 truncate">{log.detail}</span>
              {log.value && (
                <span className={`${getTypeColor(log.type)} font-bold ml-auto shrink-0`}>
                  {log.value}
                </span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  )
}
