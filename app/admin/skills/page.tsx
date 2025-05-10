"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Plus, Trash } from "lucide-react"

// Mock data - would be fetched from API in a real implementation
const skillsData = {
  frontend: [
    { id: 1, name: "React", level: 90 },
    { id: 2, name: "Next.js", level: 85 },
    { id: 3, name: "TypeScript", level: 80 },
    { id: 4, name: "Tailwind CSS", level: 85 },
    { id: 5, name: "Redux", level: 75 },
  ],
  backend: [
    { id: 6, name: "Node.js", level: 85 },
    { id: 7, name: "NestJS", level: 80 },
    { id: 8, name: "Express", level: 85 },
    { id: 9, name: "PostgreSQL", level: 75 },
    { id: 10, name: "MongoDB", level: 80 },
  ],
  tools: [
    { id: 11, name: "Git", level: 90 },
    { id: 12, name: "Docker", level: 75 },
    { id: 13, name: "AWS", level: 70 },
    { id: 14, name: "CI/CD", level: 75 },
    { id: 15, name: "Jest", level: 80 },
  ],
}

export default function SkillsAdmin() {
  const [activeTab, setActiveTab] = useState("frontend")

  const handleAddSkill = () => {
    // In a real implementation, this would open a modal or navigate to a form
    console.log("Add skill to", activeTab)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Skills</h1>
        <Button onClick={handleAddSkill}>
          <Plus className="mr-2 h-4 w-4" />
          Add Skill
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Skills</CardTitle>
          <CardDescription>Add, edit, or remove skills from your portfolio.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="frontend" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="mt-4">
              <SkillsList skills={skillsData.frontend} />
            </TabsContent>

            <TabsContent value="backend" className="mt-4">
              <SkillsList skills={skillsData.backend} />
            </TabsContent>

            <TabsContent value="tools" className="mt-4">
              <SkillsList skills={skillsData.tools} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function SkillsList({ skills }: { skills: { id: number; name: string; level: number }[] }) {
  return (
    <div className="rounded-md border">
      <div className="grid grid-cols-[1fr_100px_auto] items-center gap-4 p-4 font-medium">
        <div>Skill</div>
        <div>Level</div>
        <div>Actions</div>
      </div>

      {skills.map((skill) => (
        <div key={skill.id} className="grid grid-cols-[1fr_100px_auto] items-center gap-4 border-t p-4">
          <div className="font-medium">{skill.name}</div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-primary" style={{ width: `${skill.level}%` }} />
            </div>
            <span className="text-xs">{skill.level}%</span>
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
    </div>
  )
}
