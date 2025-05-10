"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedGrid } from "@/components/ui/aceternity/animated-grid"

// Mock data - would be fetched from API in a real implementation
const skillsData = {
  frontend: [
    { id: 1, name: "React", level: 90, logo: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Next.js", level: 85, logo: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "TypeScript", level: 80, logo: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "Tailwind CSS", level: 85, logo: "/placeholder.svg?height=40&width=40" },
    { id: 5, name: "Redux", level: 75, logo: "/placeholder.svg?height=40&width=40" },
    { id: 6, name: "Framer Motion", level: 70, logo: "/placeholder.svg?height=40&width=40" },
  ],
  backend: [
    { id: 7, name: "Node.js", level: 85, logo: "/placeholder.svg?height=40&width=40" },
    { id: 8, name: "NestJS", level: 80, logo: "/placeholder.svg?height=40&width=40" },
    { id: 9, name: "Express", level: 85, logo: "/placeholder.svg?height=40&width=40" },
    { id: 10, name: "PostgreSQL", level: 75, logo: "/placeholder.svg?height=40&width=40" },
    { id: 11, name: "MongoDB", level: 80, logo: "/placeholder.svg?height=40&width=40" },
    { id: 12, name: "GraphQL", level: 70, logo: "/placeholder.svg?height=40&width=40" },
  ],
  tools: [
    { id: 13, name: "Git", level: 90, logo: "/placeholder.svg?height=40&width=40" },
    { id: 14, name: "Docker", level: 75, logo: "/placeholder.svg?height=40&width=40" },
    { id: 15, name: "AWS", level: 70, logo: "/placeholder.svg?height=40&width=40" },
    { id: 16, name: "CI/CD", level: 75, logo: "/placeholder.svg?height=40&width=40" },
    { id: 17, name: "Jest", level: 80, logo: "/placeholder.svg?height=40&width=40" },
    { id: 18, name: "Webpack", level: 65, logo: "/placeholder.svg?height=40&width=40" },
  ],
}

export default function Skills() {
  const frontendItems = skillsData.frontend.map((skill) => ({
    id: skill.id,
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <img src={skill.logo || "/placeholder.svg"} alt={skill.name} className="w-8 h-8" />
          <div className="flex items-center justify-between w-full">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    ),
  }))

  const backendItems = skillsData.backend.map((skill) => ({
    id: skill.id,
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <img src={skill.logo || "/placeholder.svg"} alt={skill.name} className="w-8 h-8" />
          <div className="flex items-center justify-between w-full">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    ),
  }))

  const toolsItems = skillsData.tools.map((skill) => ({
    id: skill.id,
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <img src={skill.logo || "/placeholder.svg"} alt={skill.name} className="w-8 h-8" />
          <div className="flex items-center justify-between w-full">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    ),
  }))

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
            <p className="text-muted-foreground md:text-lg">
              My technical skills and expertise across different domains.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 max-w-5xl mx-auto"
        >
          <Tabs defaultValue="frontend">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="frontend" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">Frontend</span>
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                <span className="hidden sm:inline">Backend</span>
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                <span className="hidden sm:inline">Tools</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend">
              <AnimatedGrid items={frontendItems} />
            </TabsContent>

            <TabsContent value="backend">
              <AnimatedGrid items={backendItems} />
            </TabsContent>

            <TabsContent value="tools">
              <AnimatedGrid items={toolsItems} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
