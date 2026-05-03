"use client"

import { motion } from "framer-motion"
import { TrendingUp, ArrowUpRight, Clock, Flame } from "lucide-react"

const portfolioData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 70 },
  { month: "May", value: 65 },
  { month: "Jun", value: 85 },
]

const hotDrops = [
  { name: "Travis Scott x Jordan", date: "Jun 15", hype: 98 },
  { name: "Off-White Dunk Low", date: "Jun 18", hype: 94 },
  { name: "Yeezy 350 V2 New", date: "Jun 22", hype: 89 },
]

export function DashboardPreview() {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your <span className="text-[#00ff9f]">Command Center</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Professional-grade dashboard for complete visibility and control
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff9f]/20 via-[#a855f7]/20 to-[#06b6d4]/20 rounded-3xl blur-3xl opacity-30" />
          
          {/* Dashboard container */}
          <div className="relative rounded-2xl border border-white/10 bg-[#0d0d0d] overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-white/5 text-xs text-white/50 font-mono">
                  app.vexault.io/dashboard
                </div>
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Left column - Stats */}
              <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                {/* Top stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-white/50 mb-1">Vault Value</p>
                    <p className="text-xl sm:text-2xl font-bold text-[#00ff9f] font-mono">$147,892</p>
                    <p className="text-xs text-[#00ff9f] flex items-center gap-1 mt-1">
                      <ArrowUpRight className="w-3 h-3" /> +12.4%
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-white/50 mb-1">Today&apos;s P&L</p>
                    <p className="text-xl sm:text-2xl font-bold text-[#00ff9f] font-mono">+$2,847</p>
                    <p className="text-xs text-white/50 mt-1">7 trades</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-white/50 mb-1">Active Agents</p>
                    <p className="text-xl sm:text-2xl font-bold text-[#a855f7] font-mono">5</p>
                    <p className="text-xs text-[#00ff9f] flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] animate-pulse" /> All Active
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-white/50 mb-1">Win Rate</p>
                    <p className="text-xl sm:text-2xl font-bold text-[#06b6d4] font-mono">94.2%</p>
                    <p className="text-xs text-white/50 mt-1">Last 30 days</p>
                  </div>
                </div>
                
                {/* Portfolio chart */}
                <div className="p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-[#00ff9f]" />
                      <span className="font-bold text-white">Portfolio Performance</span>
                    </div>
                    <span className="text-xs text-white/50 font-mono">Last 6 months</span>
                  </div>
                  
                  {/* Simple bar chart */}
                  <div className="flex items-end justify-between gap-2 sm:gap-4 h-32 sm:h-40">
                    {portfolioData.map((data, index) => (
                      <motion.div
                        key={data.month}
                        className="flex-1 flex flex-col items-center gap-2"
                        initial={{ height: 0 }}
                        whileInView={{ height: "auto" }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-full rounded-t-md"
                          style={{ 
                            background: `linear-gradient(to top, #00ff9f, #06b6d4)`,
                            height: `${data.value}%`,
                          }}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        />
                        <span className="text-xs text-white/50">{data.month}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right column - Hot drops */}
              <div className="space-y-4">
                <div className="p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <Flame className="w-5 h-5 text-[#f59e0b]" />
                    <span className="font-bold text-white">Upcoming Hot Drops</span>
                  </div>
                  
                  <div className="space-y-3">
                    {hotDrops.map((drop, index) => (
                      <motion.div
                        key={drop.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#00ff9f]/50 transition-colors cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-medium text-white">{drop.name}</span>
                          <span className="text-xs text-[#a855f7] font-mono">{drop.hype}%</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/50">
                          <Clock className="w-3 h-3" />
                          {drop.date}
                        </div>
                        {/* Hype bar */}
                        <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ 
                              width: `${drop.hype}%`,
                              background: `linear-gradient(to right, #a855f7, #f59e0b)`,
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${drop.hype}%` }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 py-2 text-xs font-mono text-[#00ff9f] border border-[#00ff9f]/30 rounded-lg hover:bg-[#00ff9f]/10 transition-colors">
                    View All Drops →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
