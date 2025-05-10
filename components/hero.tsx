"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect"
import { TypingEffect } from "@/components/ui/aceternity/typing-effect"
import { motion } from "framer-motion"
import { MarqueeScroll } from "@/components/ui/aceternity/3d-marquee"

export default function Hero() {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Tailwind CSS",
    "Redux",
    "Express",
    "Docker",
  ]

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
          <motion.div
            className="flex flex-col justify-center space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                <TextGenerateEffect words="Full-Stack Developer" className="text-foreground" />
              </h1>
              <div className="h-12 md:h-16 mt-2">
                <TypingEffect
                  words={[
                    "Building modern web applications",
                    "Specializing in Next.js & React",
                    "Creating beautiful user experiences",
                    "Developing scalable backend systems",
                  ]}
                  className="text-xl md:text-2xl text-muted-foreground"
                  cursorClassName="text-xl md:text-2xl text-muted-foreground"
                />
              </div>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-[300px] overflow-hidden rounded-xl border border-border">
              <MarqueeScroll direction="left" speed={0.5} className="absolute top-0 left-0 w-full">
                <div className="flex gap-4 py-4 px-2">
                  {technologies.map((tech, i) => (
                    <div
                      key={`tech-1-${i}`}
                      className="flex items-center justify-center px-6 py-3 rounded-lg bg-card border border-border min-w-[120px]"
                    >
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </MarqueeScroll>

              <MarqueeScroll direction="right" speed={0.7} className="absolute top-[100px] left-0 w-full">
                <div className="flex gap-4 py-4 px-2">
                  {technologies.reverse().map((tech, i) => (
                    <div
                      key={`tech-2-${i}`}
                      className="flex items-center justify-center px-6 py-3 rounded-lg bg-card border border-border min-w-[120px]"
                    >
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </MarqueeScroll>

              <MarqueeScroll direction="left" speed={0.6} className="absolute top-[200px] left-0 w-full">
                <div className="flex gap-4 py-4 px-2">
                  {technologies.slice(3, 9).map((tech, i) => (
                    <div
                      key={`tech-3-${i}`}
                      className="flex items-center justify-center px-6 py-3 rounded-lg bg-card border border-border min-w-[120px]"
                    >
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </MarqueeScroll>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
