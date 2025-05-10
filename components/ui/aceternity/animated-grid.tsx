"use client"
import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type AnimatedGridProps = {
  items: {
    id: number
    content: React.ReactNode
    className?: string
  }[]
  className?: string
}

export const AnimatedGrid = ({ items, className }: AnimatedGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div ref={gridRef} className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          className={cn(
            "relative rounded-xl border border-border bg-card p-5 cursor-pointer transition-all",
            item.className,
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: idx * 0.1,
              duration: 0.5,
            },
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === idx && (
            <motion.div
              className="absolute inset-0 rounded-xl bg-primary/5 z-0"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <div className="relative z-10">{item.content}</div>
        </motion.div>
      ))}
    </div>
  )
}
