import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" defaultValue="IT Manager" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="organization" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Organization</CardTitle>
              <CardDescription>Manage your organization details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="org-name">Organization Name</Label>
                <Input id="org-name" defaultValue="Acme Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-address">Address</Label>
                <Input id="org-address" defaultValue="123 Main St, Suite 100" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="org-city">City</Label>
                  <Input id="org-city" defaultValue="San Francisco" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-state">State</Label>
                  <Input id="org-state" defaultValue="CA" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="org-zip">ZIP Code</Label>
                  <Input id="org-zip" defaultValue="94103" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-country">Country</Label>
                  <Input id="org-country" defaultValue="United States" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Custom Fields</CardTitle>
              <CardDescription>Configure custom fields for your assets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="font-medium">Serial Number</div>
                  <div className="text-sm text-muted-foreground">Text field for tracking serial numbers</div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="font-medium">Purchase Order</div>
                  <div className="text-sm text-muted-foreground">Text field for purchase order references</div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="font-medium">Department</div>
                  <div className="text-sm text-muted-foreground">Dropdown field for department assignment</div>
                </div>
                <Button variant="outline">Add Custom Field</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="subscription" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>You are currently on the Professional plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Professional Plan</div>
                    <div className="text-sm text-muted-foreground">$79/month, billed monthly</div>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
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
                    <span>Up to 1,000 assets</span>
                  </div>
                  <div className="flex items-center gap-2">
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
                    <span>Advanced reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
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
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center gap-2">
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
                    <span>5 team members</span>
                  </div>
                  <div className="flex items-center gap-2">
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
                    <span>API access</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2">
              <div className="text-sm text-muted-foreground">Your next billing date is November 1, 2023</div>
              <div className="flex gap-2">
                <Button variant="outline">Update Billing</Button>
                <Button variant="outline" className="text-destructive">
                  Cancel Subscription
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-md bg-muted p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <path d="M2 10h20" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Visa ending in 4242</div>
                        <div className="text-sm text-muted-foreground">Expires 04/2024</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline">Add Payment Method</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  {emailNotifications.map((notification) => (
                    <div key={notification.id} className="flex items-center justify-between rounded-lg border p-3">
                      <div className="space-y-0.5">
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-sm text-muted-foreground">{notification.description}</div>
                      </div>
                      <Switch defaultChecked={notification.enabled} />
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">In-App Notifications</h3>
                <div className="space-y-2">
                  {inAppNotifications.map((notification) => (
                    <div key={notification.id} className="flex items-center justify-between rounded-lg border p-3">
                      <div className="space-y-0.5">
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-sm text-muted-foreground">{notification.description}</div>
                      </div>
                      <Switch defaultChecked={notification.enabled} />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect with other tools and services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {integrations.map((integration) => (
                <div key={integration.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border">
                      <integration.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium">{integration.name}</div>
                      <div className="text-sm text-muted-foreground">{integration.description}</div>
                    </div>
                  </div>
                  <Button variant={integration.connected ? "outline" : "default"}>
                    {integration.connected ? "Manage" : "Connect"}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

import { FileText, MessageSquare, Slack, Zap } from "lucide-react"

const emailNotifications = [
  {
    id: "email-1",
    title: "Maintenance Reminders",
    description: "Get notified when maintenance is due or overdue",
    enabled: true,
  },
  {
    id: "email-2",
    title: "Asset Updates",
    description: "Receive updates when assets are added, modified, or deleted",
    enabled: true,
  },
  {
    id: "email-3",
    title: "Team Activity",
    description: "Get notified about team member actions",
    enabled: false,
  },
  {
    id: "email-4",
    title: "Warranty Expirations",
    description: "Receive alerts when warranties are about to expire",
    enabled: true,
  },
  {
    id: "email-5",
    title: "Weekly Reports",
    description: "Receive weekly summary reports of your assets",
    enabled: false,
  },
]

const inAppNotifications = [
  {
    id: "app-1",
    title: "Maintenance Alerts",
    description: "Show alerts for upcoming and overdue maintenance",
    enabled: true,
  },
  {
    id: "app-2",
    title: "Asset Status Changes",
    description: "Notify when asset status changes",
    enabled: true,
  },
  {
    id: "app-3",
    title: "Team Member Actions",
    description: "Show notifications for team member activities",
    enabled: true,
  },
  {
    id: "app-4",
    title: "System Updates",
    description: "Get notified about system updates and new features",
    enabled: true,
  },
]

const integrations = [
  {
    id: "int-1",
    name: "Slack",
    description: "Send notifications and reports to Slack channels",
    icon: Slack,
    connected: true,
  },
  {
    id: "int-2",
    name: "Google Sheets",
    description: "Export and sync data with Google Sheets",
    icon: FileText,
    connected: false,
  },
  {
    id: "int-3",
    name: "Zapier",
    description: "Connect with 3,000+ apps and automate workflows",
    icon: Zap,
    connected: false,
  },
  {
    id: "int-4",
    name: "Intercom",
    description: "Connect customer support and communication",
    icon: MessageSquare,
    connected: false,
  },
]

