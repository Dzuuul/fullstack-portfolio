"use client"
import React, { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

type SpotlightProps = {
  className?: string
  children?: React.ReactNode
}

export const Spotlight = React.forwardRef<HTMLDivElement, SpotlightProps>(({ className, children }, ref) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return

      const div = divRef.current
      const rect = div.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setPosition({ x, y })
      setOpacity(1)
    }

    const handleMouseLeave = () => {
      setOpacity(0)
    }

    const currentDiv = divRef.current
    if (currentDiv) {
      currentDiv.addEventListener("mousemove", handleMouseMove)
      currentDiv.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (currentDiv) {
        currentDiv.removeEventListener("mousemove", handleMouseMove)
        currentDiv.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isMounted])

  const mergedRef = React.useMemo(() => {
    if (ref) {
      return typeof ref === "function"
        ? (node: HTMLDivElement) => {
            ref(node)
            divRef.current = node
          }
        : Object.assign(divRef, { current: ref.current })
    }
    return divRef
  }, [ref])

  return (
    <div ref={mergedRef} className={cn("relative overflow-hidden rounded-md", className)}>
      <div
        className="pointer-events-none absolute -inset-px z-10 opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
})

Spotlight.displayName = "Spotlight"
