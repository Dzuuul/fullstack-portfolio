"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// Mock data with images
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=200&width=400&text=E-commerce",
    link: "#",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=200&width=400&text=Task+Management",
    link: "#",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
  },
  {
    id: 3,
    title: "Content Management System",
    description: "A headless CMS with a modern admin interface and API for content delivery.",
    image: "/placeholder.svg?height=200&width=400&text=CMS",
    link: "#",
    tags: ["NestJS", "PostgreSQL", "GraphQL", "React"],
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media performance across multiple platforms.",
    image: "/placeholder.svg?height=200&width=400&text=Social+Dashboard",
    link: "#",
    tags: ["Vue.js", "Express", "Chart.js", "OAuth"],
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "Secure messaging platform with end-to-end encryption and file sharing capabilities.",
    image: "/placeholder.svg?height=200&width=400&text=Chat+App",
    link: "#",
    tags: ["Socket.io", "React", "Node.js", "MongoDB"],
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Modern portfolio website with animations and content management system.",
    image: "/placeholder.svg?height=200&width=400&text=Portfolio",
    link: "#",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity.io"],
  },
]

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Projects</h2>
            <p className="text-muted-foreground md:text-lg">
              A showcase of my recent work and projects I've contributed to.
            </p>
          </div>
          <motion.div
            className="w-full max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search projects..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden border border-border/40 hover:border-primary/40 transition-colors duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    View Project →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
