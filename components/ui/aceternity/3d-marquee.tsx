"use client"
import { useRef, useEffect } from "react"
import type React from "react"

import { motion, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

export const MarqueeScroll = ({
  children,
  direction = "left",
  speed = 1,
  className,
}: {
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: number
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const scrollContainer = containerRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const containerTop = scrollContainer.getBoundingClientRect().top + window.scrollY
      const containerHeight = scrollContainer.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate how far through the section we are (0 to 1)
      const sectionProgress = Math.max(
        0,
        Math.min(1, (scrollY + windowHeight - containerTop) / (containerHeight + windowHeight)),
      )

      // Apply the animation based on scroll position
      const xOffset = direction === "left" ? -100 * sectionProgress * speed : 100 * sectionProgress * speed

      controls.start({
        x: `${xOffset}%`,
        transition: { type: "spring", stiffness: 50, damping: 30 },
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize position

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [controls, direction, speed])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <motion.div animate={controls} className="flex">
        {children}
      </motion.div>
    </div>
  )
}
