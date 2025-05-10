"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Edit, Plus, Search, Trash } from "lucide-react"

// Mock data - would be fetched from API in a real implementation
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
  },
  {
    id: 3,
    title: "Content Management System",
    description: "A headless CMS with a modern admin interface and API for content delivery.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["NestJS", "PostgreSQL", "GraphQL", "React"],
  },
]

export default function ProjectsAdmin() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Projects</h1>
        <Button asChild>
          <Link href="/admin/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Projects</CardTitle>
          <CardDescription>Add, edit, or remove projects from your portfolio.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
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
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 font-medium">
              <div>Project</div>
              <div>Actions</div>
            </div>

            {filteredProjects.map((project) => (
              <div key={project.id} className="grid grid-cols-[1fr_auto] items-center gap-4 border-t p-4">
                <div className="grid gap-1">
                  <div className="font-medium">{project.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1">{project.description}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <div className="p-4 text-center text-sm text-muted-foreground">No projects found.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
