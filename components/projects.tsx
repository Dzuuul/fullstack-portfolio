"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data - would be fetched from API in a real implementation
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    link: "#",
  },
  {
    id: 3,
    title: "Content Management System",
    description: "A headless CMS with a modern admin interface and API for content delivery.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["NestJS", "PostgreSQL", "GraphQL", "React"],
    link: "#",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media performance across multiple platforms.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Vue.js", "Express", "Chart.js", "OAuth"],
    link: "#",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "Secure messaging platform with end-to-end encryption and file sharing capabilities.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Socket.io", "React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Modern portfolio website with animations and content management system.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity.io"],
    link: "#",
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={project.link}>View Project</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
