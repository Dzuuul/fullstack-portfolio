"use client"
import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function MovingBorder({
  children,
  duration = 2000,
  rx = "16px",
  ry = "16px",
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
  className?: string
  containerClassName?: string
  borderClassName?: string
  as?: any
  [key: string]: any
}) {
  return (
    <Component
      className={cn("relative cursor-pointer overflow-hidden rounded-lg p-[1px]", containerClassName)}
      {...otherProps}
    >
      <motion.div
        className={cn("absolute inset-0 z-0 overflow-hidden rounded-lg", borderClassName)}
        style={{
          background: `linear-gradient(var(--moving-border-angle, 0deg), 
            var(--background) 0%, 
            var(--primary) 20%, 
            var(--background) 40%, 
            var(--background) 60%, 
            var(--primary) 80%, 
            var(--background) 100%)`,
          backgroundSize: "200% 200%",
        }}
        animate={{
          "--moving-border-angle": ["0deg", "360deg"],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <div className={cn("relative z-10 rounded-[calc(16px-1px)] bg-background p-4", className)}>{children}</div>
    </Component>
  )
}
