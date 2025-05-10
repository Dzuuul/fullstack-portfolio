"use client"

import { motion } from "framer-motion"
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards"
import { AnimatedTooltip } from "@/components/ui/aceternity/animated-tooltip"

const testimonials = [
  {
    quote:
      "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations.",
    name: "Sarah Johnson",
    title: "CEO, TechRetail",
  },
  {
    quote:
      "Incredible attention to detail and technical expertise. Our web application performance improved by 40% after their optimization work.",
    name: "Michael Chen",
    title: "CTO, DataFlow Systems",
  },
  {
    quote:
      "The most responsive developer I've ever worked with. They quickly understood our requirements and delivered a flawless product.",
    name: "Emily Rodriguez",
    title: "Product Manager, InnovateCorp",
  },
  {
    quote:
      "Their expertise in both frontend and backend development made our project implementation seamless. Highly recommended!",
    name: "David Kim",
    title: "Lead Developer, StartupX",
  },
  {
    quote:
      "Not only did they build an amazing application, but they also provided valuable insights that improved our overall product strategy.",
    name: "Jessica Taylor",
    title: "Founder, CreativeMinds",
  },
]

const people = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "CEO, TechRetail",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "CTO, DataFlow Systems",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "Product Manager, InnovateCorp",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "David Kim",
    designation: "Lead Developer, StartupX",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Jessica Taylor",
    designation: "Founder, CreativeMinds",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/20">
      <div className="container">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Testimonials</h2>
            <p className="text-muted-foreground md:text-lg">What clients and colleagues say about working with me.</p>
          </div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <AnimatedTooltip items={people} />
        </motion.div>
      </div>
    </section>
  )
}
