"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LogEntry {
  id: number
  agent: string
  icon: string
  action: string
  detail: string
  value?: string
  timestamp: string
  type: "snipe" | "alert" | "profit" | "scan" | "update" | "execute" | "monitor"
}

const agents = [
  { name: "DropsniperX", icon: "⚡" },
  { name: "PriceOracle", icon: "📊" },
  { name: "MarketMover", icon: "🎯" },
  { name: "VaultSeeker", icon: "💎" },
  { name: "ArbEngine", icon: "🔄" },
  { name: "DemandPulse", icon: "📈" },
  { name: "FlipMaster", icon: "💰" },
  { name: "StockRadar", icon: "📡" },
]

const sneakers = [
  "Jordan 4 Retro 'Military Black'",
  "Nike Dunk Low 'Panda'",
  "Yeezy Boost 350 V2",
  "Travis Scott AJ1 Low",
  "Off-White Blazer Mid",
  "Union LA Dunk",
  "Nike SB Dunk Low",
  "New Balance 550",
  "ASICS Gel-Lyte III",
  "Air Force 1 Low",
  "Jordan 11 'Cool Grey'",
  "Nike Air Max 1",
  "Yeezy 500",
  "Jordan 1 'Lost & Found'",
  "Sacai x Nike Vaporwaffle",
  "Fear of God x Nike",
  "A Ma Maniére x Jordan",
  "Fragment x Travis Scott",
]

const retailers = [
  "Nike SNKRS",
  "Footlocker",
  "JD Sports",
  "Finish Line",
  "Champs Sports",
  "Eastbay",
  "SSENSE",
  "END. Clothing",
  "Sneakersnstuff",
  "Kith",
  "Bodega",
  "BSTN",
  "Concepts",
  "Undefeated",
  "Notre Shop",
  "A Ma Maniére",
]

const actions = [
  { type: "snipe" as const, verb: "Sniped", prefix: "→" },
  { type: "profit" as const, verb: "Liquidated", prefix: "+" },
  { type: "alert" as const, verb: "Alert Triggered", prefix: "!" },
  { type: "scan" as const, verb: "Detected Drop", prefix: "◉" },
  { type: "update" as const, verb: "Price Update", prefix: "↗" },
  { type: "execute" as const, verb: "Order Executed", prefix: "✓" },
  { type: "monitor" as const, verb: "Monitoring", prefix: "◎" },
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
      value = `$${Math.floor(Math.random() * 200 + 120)}`
      break
    case "profit":
      detail = sneaker
      value = `+${Math.floor(Math.random() * 95 + 12)}%`
      break
    case "alert":
      detail = `${retailer} - ${sneaker.split("'")[0]}`
      value = "HOT"
      break
    case "scan":
      detail = sneaker
      value = retailer
      break
    case "update":
      const oldPrice = Math.floor(Math.random() * 150 + 180)
      const newPrice = oldPrice + Math.floor(Math.random() * 100 + 20)
      detail = sneaker
      value = `$${oldPrice} → $${newPrice}`
      break
    case "execute":
      detail = `${sneaker} x${Math.floor(Math.random() * 3 + 1)}`
      value = `$${Math.floor(Math.random() * 300 + 150)}`
      break
    case "monitor":
      detail = `${retailer} restock in ${Math.floor(Math.random() * 30 + 5)}min`
      value = "PENDING"
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

  const addLog = useCallback(() => {
    setLogs(prev => {
      const newLog = generateLog(idRef.current++)
      const updated = [...prev, newLog]
      return updated.slice(-15)
    })
  }, [])

  useEffect(() => {
    // Generate initial logs with staggered timestamps
    const initialLogs = Array.from({ length: 10 }, () => generateLog(idRef.current++))
    setLogs(initialLogs)

    // Variable interval for more realistic feel
    let timeoutId: NodeJS.Timeout
    
    const scheduleNext = () => {
      const delay = Math.random() * 1200 + 400 // 400ms to 1600ms
      timeoutId = setTimeout(() => {
        addLog()
        scheduleNext()
      }, delay)
    }
    
    scheduleNext()

    return () => clearTimeout(timeoutId)
  }, [addLog])

  // Auto-scroll effect
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [logs])

  const getTypeColor = (type: LogEntry["type"]) => {
    switch (type) {
      case "snipe": return "text-[#00ff9f]"
      case "profit": return "text-[#00ff9f]"
      case "execute": return "text-[#00ff9f]"
      case "alert": return "text-[#f59e0b]"
      case "scan": return "text-[#06b6d4]"
      case "update": return "text-[#a855f7]"
      case "monitor": return "text-[#6366f1]"
      default: return "text-white"
    }
  }

  const getValueStyle = (type: LogEntry["type"], value: string) => {
    if (value === "HOT") return "text-[#f59e0b] bg-[#f59e0b]/20 px-2 py-0.5 rounded text-xs font-bold"
    if (value === "PENDING") return "text-[#6366f1] bg-[#6366f1]/20 px-2 py-0.5 rounded text-xs"
    if (value.startsWith("+")) return "text-[#00ff9f] font-bold"
    return `${getTypeColor(type)} font-medium`
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/10 bg-black/80 backdrop-blur-md shadow-2xl">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
        <div className="flex gap-1.5">
          <motion.div 
            className="w-3 h-3 rounded-full bg-red-500"
            whileHover={{ scale: 1.2 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-yellow-500"
            whileHover={{ scale: 1.2 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-green-500"
            whileHover={{ scale: 1.2 }}
          />
        </div>
        <span className="text-xs font-mono text-white/50 ml-2">vexault_live_feed.sh</span>
        <div className="ml-auto flex items-center gap-3">
          <motion.div 
            className="flex items-center gap-2"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00ff9f] shadow-[0_0_10px_#00ff9f]" />
            <span className="text-xs font-mono text-[#00ff9f] font-bold">LIVE</span>
          </motion.div>
          <span className="text-xs font-mono text-white/30">{logs.length} events</span>
        </div>
      </div>
      
      {/* Scanline overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 159, 0.03) 2px, rgba(0, 255, 159, 0.03) 4px)'
        }}
        animate={{ backgroundPositionY: ['0px', '4px'] }}
        transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Logs container with smooth scroll */}
      <div 
        ref={containerRef}
        className="p-3 md:p-4 space-y-1 font-mono text-xs sm:text-sm overflow-y-auto h-[280px] sm:h-[320px] lg:h-[360px] scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        <AnimatePresence mode="popLayout">
          {logs.map((log, index) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -30, height: 0 }}
              animate={{ opacity: 1, x: 0, height: "auto" }}
              exit={{ opacity: 0, x: 30, height: 0 }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
              className="group flex flex-wrap sm:flex-nowrap items-start gap-1.5 sm:gap-2 py-1.5 border-b border-white/5 hover:bg-white/5 hover:border-white/10 rounded px-1 transition-colors"
            >
              <span className="text-white/30 shrink-0 hidden sm:inline">[{log.timestamp}]</span>
              <span className="text-lg shrink-0 grayscale group-hover:grayscale-0 transition-all">{log.icon}</span>
              <span className={`${getTypeColor(log.type)} shrink-0 font-bold truncate max-w-[100px] sm:max-w-none`}>
                {log.agent}
              </span>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="text-white/60 shrink-0">{log.action}</span>
              <span className="text-white/30 hidden sm:inline">→</span>
              <span className="text-white/80 truncate flex-1 min-w-0">{log.detail}</span>
              {log.value && (
                <motion.span 
                  className={`${getValueStyle(log.type, log.value)} shrink-0 ml-auto`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {log.value}
                </motion.span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Typing indicator */}
        <motion.div
          className="flex items-center gap-2 py-2 text-white/30"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="w-2 h-4 bg-[#00ff9f] animate-pulse" />
          <span className="text-xs">Listening for events...</span>
        </motion.div>
      </div>
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[inset_0_0_30px_rgba(0,255,159,0.05)]" />
    </div>
  )
}
