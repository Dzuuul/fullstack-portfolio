"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { AlertCircle, Check, Save } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SettingsPage() {
  const [saving, setSaving] = useState(false)
  const [profileForm, setProfileForm] = useState({
    name: "John Doe",
    title: "Full-Stack Developer",
    email: "contact@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Experienced full-stack developer specializing in building modern, responsive web applications with cutting-edge technologies.",
    avatarUrl: "/placeholder.svg?height=200&width=200",
  })

  const [siteForm, setSiteForm] = useState({
    siteTitle: "Developer Portfolio",
    siteDescription: "Full-stack developer portfolio showcasing projects and skills",
    metaKeywords: "developer, portfolio, full-stack, react, next.js",
    googleAnalyticsId: "UA-XXXXXXXXX-X",
    showProjectCount: true,
    enableBlog: false,
    enableDarkMode: true,
    accentColor: "#000000",
  })

  const [socialForm, setSocialForm] = useState({
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourusername",
    instagram: "",
    facebook: "",
    youtube: "",
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setSiteForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSocialForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean, name: string) => {
    setSiteForm((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSave = async (formType: string) => {
    setSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Settings saved",
      description: `Your ${formType} settings have been saved successfully.`,
    })

    setSaving(false)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Settings</h1>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="site">Site</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information displayed on your portfolio.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative">
                      <img
                        src={profileForm.avatarUrl || "/placeholder.svg"}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border"
                      />
                      <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                        +
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">Upload a new photo</p>
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" value={profileForm.name} onChange={handleProfileChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input id="title" name="title" value={profileForm.title} onChange={handleProfileChange} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileForm.email}
                        onChange={handleProfileChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" value={profileForm.phone} onChange={handleProfileChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" name="location" value={profileForm.location} onChange={handleProfileChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" name="bio" value={profileForm.bio} onChange={handleProfileChange} rows={4} />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => handleSave("profile")} disabled={saving}>
                {saving ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="site" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Site Settings</CardTitle>
              <CardDescription>Configure general settings for your portfolio website.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="siteTitle">Site Title</Label>
                  <Input id="siteTitle" name="siteTitle" value={siteForm.siteTitle} onChange={handleSiteChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accentColor">Accent Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="accentColor"
                      name="accentColor"
                      type="color"
                      value={siteForm.accentColor}
                      onChange={handleSiteChange}
                      className="w-12 h-10 p-1"
                    />
                    <Input
                      value={siteForm.accentColor}
                      onChange={handleSiteChange}
                      name="accentColor"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  name="siteDescription"
                  value={siteForm.siteDescription}
                  onChange={handleSiteChange}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metaKeywords">Meta Keywords</Label>
                <Input
                  id="metaKeywords"
                  name="metaKeywords"
                  value={siteForm.metaKeywords}
                  onChange={handleSiteChange}
                />
                <p className="text-sm text-muted-foreground">Separate keywords with commas</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                <Input
                  id="googleAnalyticsId"
                  name="googleAnalyticsId"
                  value={siteForm.googleAnalyticsId}
                  onChange={handleSiteChange}
                />
              </div>
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="showProjectCount">Show Project Count</Label>
                    <p className="text-sm text-muted-foreground">Display the number of projects on your portfolio</p>
                  </div>
                  <Switch
                    id="showProjectCount"
                    checked={siteForm.showProjectCount}
                    onCheckedChange={(checked) => handleSwitchChange(checked, "showProjectCount")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enableBlog">Enable Blog</Label>
                    <p className="text-sm text-muted-foreground">Show the blog section on your portfolio</p>
                  </div>
                  <Switch
                    id="enableBlog"
                    checked={siteForm.enableBlog}
                    onCheckedChange={(checked) => handleSwitchChange(checked, "enableBlog")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enableDarkMode">Enable Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow visitors to switch between light and dark mode
                    </p>
                  </div>
                  <Switch
                    id="enableDarkMode"
                    checked={siteForm.enableDarkMode}
                    onCheckedChange={(checked) => handleSwitchChange(checked, "enableDarkMode")}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => handleSave("site")} disabled={saving}>
                {saving ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>Connect your social media accounts to your portfolio.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  <Input
                    id="github"
                    name="github"
                    value={socialForm.github}
                    onChange={handleSocialChange}
                    placeholder="https://github.com/yourusername"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    value={socialForm.linkedin}
                    onChange={handleSocialChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    name="twitter"
                    value={socialForm.twitter}
                    onChange={handleSocialChange}
                    placeholder="https://twitter.com/yourusername"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    name="instagram"
                    value={socialForm.instagram}
                    onChange={handleSocialChange}
                    placeholder="https://instagram.com/yourusername"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    name="facebook"
                    value={socialForm.facebook}
                    onChange={handleSocialChange}
                    placeholder="https://facebook.com/yourusername"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="youtube">YouTube</Label>
                  <Input
                    id="youtube"
                    name="youtube"
                    value={socialForm.youtube}
                    onChange={handleSocialChange}
                    placeholder="https://youtube.com/c/yourchannel"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => handleSave("social")} disabled={saving}>
                {saving ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security and authentication settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" placeholder="Enter your current password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" placeholder="Enter your new password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" placeholder="Confirm your new password" />
                </div>
              </div>

              <Alert className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Two-Factor Authentication</AlertTitle>
                <AlertDescription className="flex flex-col gap-2">
                  <p>Enhance your account security by enabling two-factor authentication.</p>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-500 font-medium">Two-factor authentication is enabled</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-fit mt-2">
                    Disable 2FA
                  </Button>
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => handleSave("security")} disabled={saving}>
                {saving ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Update Password
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}
