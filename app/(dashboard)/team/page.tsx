import { Mail, MoreHorizontal, Plus, Search, Shield, ShieldAlert, ShieldCheck, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Invite Team Member
        </Button>
      </div>
      <Tabs defaultValue="members" className="space-y-4">
        <TabsList>
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
        </TabsList>
        <TabsContent value="members" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 py-4">
              <CardTitle className="text-xl">Team Members</CardTitle>
              <CardDescription className="flex-1">Manage your team members and their access</CardDescription>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search team..." className="w-[200px] pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamMembers.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{member.name}</div>
                              <div className="text-sm text-muted-foreground">{member.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {member.role === "Admin" ? (
                              <ShieldAlert className="h-4 w-4 text-destructive" />
                            ) : member.role === "Editor" ? (
                              <ShieldCheck className="h-4 w-4 text-primary" />
                            ) : (
                              <Shield className="h-4 w-4 text-muted-foreground" />
                            )}
                            {member.role}
                          </div>
                        </TableCell>
                        <TableCell>{member.lastActive}</TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              member.status === "Online"
                                ? "bg-green-100 text-green-700"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {member.status}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                View profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Mail className="mr-2 h-4 w-4" />
                                Send email
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Shield className="mr-2 h-4 w-4" />
                                Change role
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Remove user</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Showing <strong>5</strong> of <strong>5</strong> team members
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>3</strong> of <strong>5</strong> team member slots used in your plan
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pending Invitations</CardTitle>
              <CardDescription>Team members who have been invited but haven&apos;t joined yet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Invited By</TableHead>
                      <TableHead>Invited On</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingInvitations.map((invitation) => (
                      <TableRow key={invitation.id}>
                        <TableCell className="font-medium">{invitation.email}</TableCell>
                        <TableCell>{invitation.role}</TableCell>
                        <TableCell>{invitation.invitedBy}</TableCell>
                        <TableCell>{invitation.invitedOn}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Resend
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="roles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Roles & Permissions</CardTitle>
              <CardDescription>Manage what team members can do in your organization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {roles.map((role) => (
                  <div key={role.name} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {role.name === "Admin" ? (
                          <ShieldAlert className="h-5 w-5 text-destructive" />
                        ) : role.name === "Editor" ? (
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        ) : (
                          <Shield className="h-5 w-5 text-muted-foreground" />
                        )}
                        <h3 className="font-medium">{role.name}</h3>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit Role
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{role.description}</p>
                    <div className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                      {role.permissions.map((permission) => (
                        <div key={permission} className="flex items-center gap-2 text-sm">
                          <svg
                            className="h-4 w-4 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {permission}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
              <CardDescription>Recent actions performed by team members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {activityDays.map((day) => (
                  <div key={day.date} className="space-y-4">
                    <div className="sticky top-0 z-20 flex items-center gap-2 bg-background py-2">
                      <div className="h-px flex-1 bg-muted"></div>
                      <div className="text-sm font-medium">{day.date}</div>
                      <div className="h-px flex-1 bg-muted"></div>
                    </div>
                    <div className="space-y-4">
                      {day.activities.map((activity, index) => (
                        <div key={index} className="flex gap-4">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={activity.userAvatar} alt={activity.userName} />
                            <AvatarFallback>{activity.userInitials}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              <span className="font-semibold">{activity.userName}</span> {activity.action}
                            </p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Load More
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const teamMembers = [
  {
    id: "tm1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    lastActive: "Just now",
    status: "Online",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "JD",
  },
  {
    id: "tm2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Editor",
    lastActive: "2 hours ago",
    status: "Offline",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "SJ",
  },
  {
    id: "tm3",
    name: "Mike Chen",
    email: "mike@example.com",
    role: "Editor",
    lastActive: "3 hours ago",
    status: "Online",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "MC",
  },
  {
    id: "tm4",
    name: "Emily Wilson",
    email: "emily@example.com",
    role: "Viewer",
    lastActive: "Yesterday",
    status: "Offline",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "EW",
  },
  {
    id: "tm5",
    name: "Robert Garcia",
    email: "robert@example.com",
    role: "Viewer",
    lastActive: "2 days ago",
    status: "Offline",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "RG",
  },
]

const pendingInvitations = [
  {
    id: "pi1",
    email: "alex@example.com",
    role: "Editor",
    invitedBy: "John Doe",
    invitedOn: "Oct 15, 2023",
  },
  {
    id: "pi2",
    email: "lisa@example.com",
    role: "Viewer",
    invitedBy: "John Doe",
    invitedOn: "Oct 18, 2023",
  },
]

const roles = [
  {
    name: "Admin",
    description: "Full access to all settings and features. Can manage team members and billing.",
    permissions: [
      "Manage team members",
      "Manage billing",
      "Add/edit/delete assets",
      "Manage categories",
      "View all reports",
      "Export data",
      "Access API",
      "Configure settings",
    ],
  },
  {
    name: "Editor",
    description: "Can add, edit, and manage assets, but cannot manage team or billing.",
    permissions: [
      "Add/edit/delete assets",
      "Manage categories",
      "View all reports",
      "Export data",
      "Schedule maintenance",
    ],
  },
  {
    name: "Viewer",
    description: "Read-only access to assets and reports. Cannot make changes.",
    permissions: ["View assets", "View reports", "View maintenance schedule"],
  },
]

const activityDays = [
  {
    date: "Today",
    activities: [
      {
        userName: "John Doe",
        userAvatar: "/placeholder.svg?height=36&width=36",
        userInitials: "JD",
        action: "added a new laptop to IT Equipment",
        time: "2 hours ago",
      },
      {
        userName: "Sarah Johnson",
        userAvatar: "/placeholder.svg?height=36&width=36",
        userInitials: "SJ",
        action: "updated maintenance schedule for Printer #3",
        time: "5 hours ago",
      },
    ],
  },
  {
    date: "Yesterday",
    activities: [
      {
        userName: "Mike Chen",
        userAvatar: "/placeholder.svg?height=36&width=36",
        userInitials: "MC",
        action: "marked Vehicle Maintenance as complete",
        time: "1:45 PM",
      },
      {
        userName: "Emily Wilson",
        userAvatar: "/placeholder.svg?height=36&width=36",
        userInitials: "EW",
        action: "added 5 new monitors to inventory",
        time: "11:30 AM",
      },
      {
        userName: "John Doe",
        userAvatar: "/placeholder.svg?height=36&width=36",
        userInitials: "JD",
        action: "invited alex@example.com to join the team",
        time: "9:15 AM",
      },
    ],
  },
  {
    date: "October 18, 2023",
    activities: [
      {
        userName: "Robert Garcia",
        userAvatar: "/placeholder.svg?height=36&width=36",
        userInitials: "RG",
        action: "updated asset value for Office Furniture",
        time: "4:20 PM",
      },
      {
        userName: "John Doe",
        userAvatar: "/placeholder.svg?height=36&width=36",
        userInitials: "JD",
        action: "invited lisa@example.com to join the team",
        time: "2:30 PM",
      },
    ],
  },
]

