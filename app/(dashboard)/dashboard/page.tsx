import Link from "next/link"
import { AlertCircle, ArrowRight, CheckCircle2, Clock, Package, Plus, RefreshCw, User, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Link href="/assets/new">
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            Add Asset
          </Button>
        </Link>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">142</div>
                <p className="text-xs text-muted-foreground">+3 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Asset Value</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$245,678</div>
                <p className="text-xs text-muted-foreground">+$12,345 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Maintenance Due</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">3 overdue, 4 upcoming</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Asset Health</CardTitle>
                <RefreshCw className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <Progress value={92} className="mt-2" />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Asset Status</CardTitle>
                <CardDescription>Overview of your asset status distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <p className="text-sm text-muted-foreground">Status chart will appear here</p>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Maintenance</CardTitle>
                <CardDescription>Assets requiring attention in the next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full",
                          item.status === "overdue" ? "bg-destructive/10" : "bg-muted",
                        )}
                      >
                        {item.status === "overdue" ? (
                          <AlertCircle className="h-5 w-5 text-destructive" />
                        ) : (
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.status === "overdue" ? "Overdue" : "Due"} {item.date}
                        </p>
                      </div>
                      <Link href={`/maintenance/${item.id}`}>
                        <Button variant="ghost" size="icon">
                          <ArrowRight className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/maintenance" className="text-sm text-primary hover:underline">
                  View all maintenance tasks
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions performed on your assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activityItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{item.user}</p>
                        <p className="text-xs text-muted-foreground">{item.action}</p>
                      </div>
                      <div className="text-xs text-muted-foreground">{item.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/activity" className="text-sm text-primary hover:underline">
                  View all activity
                </Link>
              </CardFooter>
            </Card>
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Asset Distribution</CardTitle>
                <CardDescription>Breakdown of assets by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <p className="text-sm text-muted-foreground">Distribution chart will appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Asset Value Over Time</CardTitle>
                <CardDescription>Track the total value of your assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <p className="text-sm text-muted-foreground">Value chart will appear here</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Asset Lifecycle</CardTitle>
                <CardDescription>Distribution by lifecycle stage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lifecycleStages.map((stage) => (
                    <div key={stage.name} className="flex items-center gap-4">
                      <div className="w-full space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{stage.name}</span>
                          <span className="text-sm text-muted-foreground">{stage.count}</span>
                        </div>
                        <Progress value={stage.percentage} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Maintenance Compliance</CardTitle>
                <CardDescription>Asset maintenance status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <span className="text-sm font-medium">Compliant</span>
                    <span className="text-2xl font-bold">87%</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                      <Clock className="h-8 w-8 text-yellow-600" />
                    </div>
                    <span className="text-sm font-medium">Due Soon</span>
                    <span className="text-2xl font-bold">9%</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                      <XCircle className="h-8 w-8 text-red-600" />
                    </div>
                    <span className="text-sm font-medium">Overdue</span>
                    <span className="text-2xl font-bold">4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Top Categories</CardTitle>
                <CardDescription>Assets by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCategories.map((category) => (
                    <div key={category.name} className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{category.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {category.count} assets · ${category.value.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Expirations</CardTitle>
                <CardDescription>Warranties and licenses expiring soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {expirations.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Expires on {item.date}</p>
                      </div>
                      <div
                        className={cn(
                          "rounded-full px-2 py-1 text-xs font-medium",
                          item.daysLeft <= 7
                            ? "bg-red-100 text-red-700"
                            : item.daysLeft <= 30
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700",
                        )}
                      >
                        {item.daysLeft} days
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

import { cn } from "@/lib/utils"

const maintenanceItems = [
  {
    id: "m1",
    name: "Laptop HP EliteBook - Annual Check",
    date: "Oct 15, 2023",
    status: "overdue",
  },
  {
    id: "m2",
    name: "Office Printer - Quarterly Maintenance",
    date: "Oct 22, 2023",
    status: "overdue",
  },
  {
    id: "m3",
    name: "Company Car - Oil Change",
    date: "Nov 5, 2023",
    status: "upcoming",
  },
  {
    id: "m4",
    name: "Server Room - AC Maintenance",
    date: "Nov 12, 2023",
    status: "upcoming",
  },
  {
    id: "m5",
    name: "Fire Extinguishers - Annual Inspection",
    date: "Nov 18, 2023",
    status: "upcoming",
  },
]

const activityItems = [
  {
    id: "a1",
    user: "John Doe",
    action: "Added new laptop to IT Equipment",
    time: "2 hours ago",
  },
  {
    id: "a2",
    user: "Sarah Johnson",
    action: "Updated maintenance schedule for Printer #3",
    time: "5 hours ago",
  },
  {
    id: "a3",
    user: "Mike Chen",
    action: "Marked Vehicle Maintenance as complete",
    time: "Yesterday",
  },
  {
    id: "a4",
    user: "Emily Wilson",
    action: "Added 5 new monitors to inventory",
    time: "Yesterday",
  },
  {
    id: "a5",
    user: "Robert Garcia",
    action: "Updated asset value for Office Furniture",
    time: "2 days ago",
  },
]

const lifecycleStages = [
  {
    name: "New (< 1 year)",
    count: 45,
    percentage: 32,
  },
  {
    name: "Mid-life (1-3 years)",
    count: 67,
    percentage: 47,
  },
  {
    name: "Aging (3-5 years)",
    count: 23,
    percentage: 16,
  },
  {
    name: "End of life (> 5 years)",
    count: 7,
    percentage: 5,
  },
]

const topCategories = [
  {
    name: "IT Equipment",
    count: 58,
    value: 124500,
    icon: Package,
  },
  {
    name: "Vehicles",
    count: 12,
    value: 87000,
    icon: Package,
  },
  {
    name: "Office Furniture",
    count: 45,
    value: 28500,
    icon: Package,
  },
  {
    name: "Tools & Equipment",
    count: 27,
    value: 15700,
    icon: Package,
  },
]

const expirations = [
  {
    id: "e1",
    name: "Adobe Creative Cloud License",
    date: "Oct 25, 2023",
    daysLeft: 5,
  },
  {
    id: "e2",
    name: "Dell XPS 15 Warranty",
    date: "Nov 10, 2023",
    daysLeft: 21,
  },
  {
    id: "e3",
    name: "Office 365 Enterprise License",
    date: "Dec 15, 2023",
    daysLeft: 56,
  },
  {
    id: "e4",
    name: "Company Car Insurance",
    date: "Jan 5, 2024",
    daysLeft: 77,
  },
]

