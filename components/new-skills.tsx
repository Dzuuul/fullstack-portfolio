"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Wrench } from "lucide-react"
import { motion } from "framer-motion"

// Skill data with logos
const skillsData = {
  frontend: [
    { id: 1, name: "React", level: 90, logo: "/placeholder.svg?height=40&width=40&text=React" },
    { id: 2, name: "Next.js", level: 85, logo: "/placeholder.svg?height=40&width=40&text=Next.js" },
    { id: 3, name: "TypeScript", level: 80, logo: "/placeholder.svg?height=40&width=40&text=TS" },
    { id: 4, name: "Tailwind CSS", level: 85, logo: "/placeholder.svg?height=40&width=40&text=Tailwind" },
    { id: 5, name: "Redux", level: 75, logo: "/placeholder.svg?height=40&width=40&text=Redux" },
    { id: 6, name: "Framer Motion", level: 70, logo: "/placeholder.svg?height=40&width=40&text=Framer" },
  ],
  backend: [
    { id: 7, name: "Node.js", level: 85, logo: "/placeholder.svg?height=40&width=40&text=Node" },
    { id: 8, name: "NestJS", level: 80, logo: "/placeholder.svg?height=40&width=40&text=Nest" },
    { id: 9, name: "Express", level: 85, logo: "/placeholder.svg?height=40&width=40&text=Express" },
    { id: 10, name: "PostgreSQL", level: 75, logo: "/placeholder.svg?height=40&width=40&text=Postgres" },
    { id: 11, name: "MongoDB", level: 80, logo: "/placeholder.svg?height=40&width=40&text=Mongo" },
    { id: 12, name: "GraphQL", level: 70, logo: "/placeholder.svg?height=40&width=40&text=GraphQL" },
  ],
  tools: [
    { id: 13, name: "Git", level: 90, logo: "/placeholder.svg?height=40&width=40&text=Git" },
    { id: 14, name: "Docker", level: 75, logo: "/placeholder.svg?height=40&width=40&text=Docker" },
    { id: 15, name: "AWS", level: 70, logo: "/placeholder.svg?height=40&width=40&text=AWS" },
    { id: 16, name: "CI/CD", level: 75, logo: "/placeholder.svg?height=40&width=40&text=CI/CD" },
    { id: 17, name: "Jest", level: 80, logo: "/placeholder.svg?height=40&width=40&text=Jest" },
    { id: 18, name: "Webpack", level: 65, logo: "/placeholder.svg?height=40&width=40&text=Webpack" },
  ],
}

export default function Skills() {
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Skills</h2>
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
              <TabsTrigger value="frontend" className="flex items-center gap-2 data-[state=active]:bg-primary/10">
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">Frontend</span>
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2 data-[state=active]:bg-primary/10">
                <Database className="h-4 w-4" />
                <span className="hidden sm:inline">Backend</span>
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2 data-[state=active]:bg-primary/10">
                <Wrench className="h-4 w-4" />
                <span className="hidden sm:inline">Tools</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend">
              <SkillGrid skills={skillsData.frontend} />
            </TabsContent>

            <TabsContent value="backend">
              <SkillGrid skills={skillsData.backend} />
            </TabsContent>

            <TabsContent value="tools">
              <SkillGrid skills={skillsData.tools} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

function SkillGrid({ skills }: { skills: Array<{ id: number; name: string; level: number; logo: string }> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, idx) => (
        <motion.div
          key={skill.id}
          className="relative rounded-xl border border-border/40 bg-card p-5 hover:border-primary/40 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <img src={skill.logo || "/placeholder.svg"} alt={skill.name} className="w-10 h-10 rounded-md" />
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
        </motion.div>
      ))}
    </div>
  )
}
