"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  LineChart, 
  Shield, 
  Globe, 
  Bell,
  Cpu
} from "lucide-react"

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Intelligent Drop Intelligence",
    description: "ML-powered detection system monitors thousands of retail endpoints with sub-second latency for instant drop notifications.",
    color: "#00ff9f",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Predictive Pricing Engine",
    description: "Advanced algorithms analyze historical data, social sentiment, and market trends to predict optimal buy and sell prices.",
    color: "#a855f7",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Vault Management",
    description: "Secure portfolio tracking with real-time P&L, inventory management, and automated valuation across your entire collection.",
    color: "#06b6d4",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Omnichannel Execution",
    description: "Seamlessly execute purchases across Nike SNKRS, Footlocker, JD Sports, and 50+ other retailers from a single interface.",
    color: "#00ff9f",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Smart Alerts & Triggers",
    description: "Customizable alerts for price movements, restock events, and arbitrage opportunities delivered via Discord, Telegram, or SMS.",
    color: "#a855f7",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Enterprise API Access",
    description: "Full REST and WebSocket APIs for custom integrations, automated workflows, and programmatic trading strategies.",
    color: "#06b6d4",
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="text-[#a855f7]">Vevault</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
            Enterprise-grade infrastructure built for serious sneaker arbitrage operations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              {/* Corner accent */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{
                  background: `radial-gradient(circle at top right, ${feature.color}, transparent)`,
                }}
              />
              
              {/* Icon */}
              <motion.div 
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ 
                  backgroundColor: `${feature.color}15`,
                  color: feature.color,
                  boxShadow: `0 0 20px ${feature.color}20`
                }}
                whileHover={{
                  boxShadow: `0 0 30px ${feature.color}40`
                }}
              >
                {feature.icon}
              </motion.div>
              
              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#00ff9f] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                {feature.description}
              </p>
              
              {/* Bottom line accent */}
              <motion.div
                className="absolute bottom-0 left-6 right-6 h-[2px] origin-left"
                style={{ backgroundColor: feature.color }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              />
              
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 30px ${feature.color}10`
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
