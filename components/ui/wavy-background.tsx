"use client"
import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef } from "react"
import { createNoise3D } from "simplex-noise"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}) => {
  const noise = createNoise3D()
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement | null
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001
      case "fast":
        return 0.002
      default:
        return 0.001
    }
  }

  const init = () => {
    canvas = canvasRef.current
    ctx = canvas?.getContext("2d") || null
    w = canvas?.width || 0
    h = canvas?.height || 0
    ctx?.clearRect(0, 0, w, h)
    nt = 0
    window.requestAnimationFrame(animate)
  }

  const waveColors = colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]
  const drawWave = (n: number) => {
    nt += getSpeed()
    for (i = 0; i < n; i++) {
      ctx!.beginPath()
      ctx!.lineWidth = waveWidth || 50
      ctx!.strokeStyle = waveColors[i % waveColors.length]
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100
        ctx?.lineTo(x, y + h * 0.5) // adjust for height, currently at 50% of the container
      }
      ctx!.stroke()
      ctx!.closePath()
    }
  }

  let animationId: number
  const animate = () => {
    ctx?.clearRect(0, 0, w, h)
    ctx!.fillStyle = backgroundFill || "black"
    ctx?.fillRect(0, 0, w, h)
    drawWave(5)
    animationId = window.requestAnimationFrame(animate)
  }

  useEffect(() => {
    init()
    return () => {
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className={cn("h-full flex flex-col items-center justify-center", containerClassName)}>
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          filter: `blur(${blur}px)`,
          opacity: waveOpacity,
        }}
        width={1200}
        height={600}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  )
}
