// This file would contain the API service for communicating with the NestJS backend
// Below is a simplified example of what this might look like

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
}

type Skill = {
  id: number
  name: string
  level: number
  category: "frontend" | "backend" | "tools"
}

type Message = {
  id: number
  name: string
  email: string
  subject: string
  message: string
  date: string
  read: boolean
}

type Profile = {
  name: string
  title: string
  bio: string
  image: string
  location: string
  email: string
  phone: string
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects`)
  if (!response.ok) {
    throw new Error("Failed to fetch projects")
  }
  return response.json()
}

export async function getProject(id: number): Promise<Project> {
  const response = await fetch(`${API_URL}/projects/${id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch project")
  }
  return response.json()
}

export async function createProject(project: Omit<Project, "id">): Promise<Project> {
  const response = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  })
  if (!response.ok) {
    throw new Error("Failed to create project")
  }
  return response.json()
}

export async function updateProject(id: number, project: Partial<Project>): Promise<Project> {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  })
  if (!response.ok) {
    throw new Error("Failed to update project")
  }
  return response.json()
}

export async function deleteProject(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error("Failed to delete project")
  }
}

export async function getSkills(): Promise<Skill[]> {
  const response = await fetch(`${API_URL}/skills`)
  if (!response.ok) {
    throw new Error("Failed to fetch skills")
  }
  return response.json()
}

export async function createSkill(skill: Omit<Skill, "id">): Promise<Skill> {
  const response = await fetch(`${API_URL}/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(skill),
  })
  if (!response.ok) {
    throw new Error("Failed to create skill")
  }
  return response.json()
}

export async function updateSkill(id: number, skill: Partial<Skill>): Promise<Skill> {
  const response = await fetch(`${API_URL}/skills/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(skill),
  })
  if (!response.ok) {
    throw new Error("Failed to update skill")
  }
  return response.json()
}

export async function deleteSkill(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/skills/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error("Failed to delete skill")
  }
}

export async function getMessages(): Promise<Message[]> {
  const response = await fetch(`${API_URL}/messages`)
  if (!response.ok) {
    throw new Error("Failed to fetch messages")
  }
  return response.json()
}

export async function sendMessage(message: Omit<Message, "id" | "date" | "read">): Promise<Message> {
  const response = await fetch(`${API_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
  if (!response.ok) {
    throw new Error("Failed to send message")
  }
  return response.json()
}

export async function markMessageAsRead(id: number): Promise<Message> {
  const response = await fetch(`${API_URL}/messages/${id}/read`, {
    method: "PATCH",
  })
  if (!response.ok) {
    throw new Error("Failed to mark message as read")
  }
  return response.json()
}

export async function deleteMessage(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/messages/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error("Failed to delete message")
  }
}

export async function getProfile(): Promise<Profile> {
  const response = await fetch(`${API_URL}/profile`)
  if (!response.ok) {
    throw new Error("Failed to fetch profile")
  }
  return response.json()
}

export async function updateProfile(profile: Partial<Profile>): Promise<Profile> {
  const response = await fetch(`${API_URL}/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  })
  if (!response.ok) {
    throw new Error("Failed to update profile")
  }
  return response.json()
}
