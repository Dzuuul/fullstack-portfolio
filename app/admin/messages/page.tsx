"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Trash } from "lucide-react"

// Mock data - would be fetched from API in a real implementation
const messagesData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Project Inquiry",
    message:
      "I'm interested in discussing a potential e-commerce project for my business. Would love to schedule a call to discuss details.",
    date: "2023-05-01T10:30:00Z",
    read: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    subject: "Job Opportunity",
    message:
      "We have an opening for a senior developer position at our company. Based on your portfolio, I think you'd be a great fit. Let's discuss if you're interested.",
    date: "2023-05-03T14:15:00Z",
    read: false,
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "alex@example.com",
    subject: "Collaboration Proposal",
    message:
      "I'm working on a startup and looking for a technical co-founder. Your skills seem to align perfectly with what we need. Would you be open to discussing a potential partnership?",
    date: "2023-05-05T09:45:00Z",
    read: false,
  },
]

export default function MessagesAdmin() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedMessage, setExpandedMessage] = useState<number | null>(null)

  const filteredMessages = messagesData.filter(
    (message) =>
      message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.message.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleMessage = (id: number) => {
    setExpandedMessage(expandedMessage === id ? null : id)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Messages</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Messages</CardTitle>
          <CardDescription>Messages received through your contact form.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search messages..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            {filteredMessages.map((message) => (
              <div key={message.id} className="border-t first:border-t-0">
                <div
                  className={`grid cursor-pointer grid-cols-[1fr_auto] gap-4 p-4 ${!message.read ? "bg-muted/50" : ""}`}
                  onClick={() => toggleMessage(message.id)}
                >
                  <div className="grid gap-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{message.subject}</div>
                      <div className="text-xs text-muted-foreground">{new Date(message.date).toLocaleDateString()}</div>
                    </div>
                    <div className="text-sm">
                      From: {message.name} ({message.email})
                    </div>
                    <div className="text-sm text-muted-foreground line-clamp-1">{message.message}</div>
                  </div>
                  <div className="flex items-center">
                    <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>

                {expandedMessage === message.id && (
                  <div className="border-t bg-muted/30 p-4">
                    <div className="whitespace-pre-wrap text-sm">{message.message}</div>
                    <div className="mt-4 flex justify-end">
                      <Button size="sm">Reply</Button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {filteredMessages.length === 0 && (
              <div className="p-4 text-center text-sm text-muted-foreground">No messages found.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
