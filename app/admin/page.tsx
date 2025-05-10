import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, FileText, Users } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+180 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Requests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Recent updates and activity on your portfolio.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <div className="text-sm font-medium">Project Updated</div>
                  <div className="text-sm text-muted-foreground">
                    You updated the E-commerce Platform project 2 days ago.
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="text-sm font-medium">New Contact Request</div>
                  <div className="text-sm text-muted-foreground">
                    You received a new contact request from John Doe yesterday.
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="text-sm font-medium">Skill Added</div>
                  <div className="text-sm text-muted-foreground">You added Docker to your skills 3 days ago.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
              <CardDescription>Website traffic and visitor statistics.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Analytics chart would be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Messages from your contact form.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2 p-4 border rounded-md">
                  <div className="flex justify-between">
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground">2 days ago</div>
                  </div>
                  <div className="text-sm font-medium">Project Inquiry</div>
                  <div className="text-sm text-muted-foreground">
                    I'm interested in discussing a potential e-commerce project for my business...
                  </div>
                </div>
                <div className="grid gap-2 p-4 border rounded-md">
                  <div className="flex justify-between">
                    <div className="text-sm font-medium">Jane Smith</div>
                    <div className="text-xs text-muted-foreground">5 days ago</div>
                  </div>
                  <div className="text-sm font-medium">Job Opportunity</div>
                  <div className="text-sm text-muted-foreground">
                    We have an opening for a senior developer position at our company...
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
