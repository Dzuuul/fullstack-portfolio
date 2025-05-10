"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
    tags?: string[]
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 duration-500 transition-all"
            style={{
              opacity: hoveredIndex === idx ? 1 : 0,
            }}
          ></motion.div>
          <motion.div
            className="relative z-10 p-6 h-full rounded-xl border border-border/40 bg-card"
            style={{
              transform: hoveredIndex === idx ? "scale(1.02)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {item.tags && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <a
                href={item.link}
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
