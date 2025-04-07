import { BarChart3, Download, FileText, PieChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
        <Button className="flex items-center gap-1">
          <Download className="h-4 w-4" />
          Export Reports
        </Button>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="value">Asset Value</TabsTrigger>
          <TabsTrigger value="lifecycle">Lifecycle</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="custom">Custom Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Asset Value</CardTitle>
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
                <CardTitle className="text-sm font-medium">Average Asset Age</CardTitle>
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
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4 years</div>
                <p className="text-xs text-muted-foreground">-0.2 years from last quarter</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Maintenance Compliance</CardTitle>
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">+2% from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Asset Value Over Time</CardTitle>
                <CardDescription>Track the total value of your assets over the past year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Asset Distribution</CardTitle>
                <CardDescription>Breakdown of assets by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <PieChart className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Top Valuable Assets</CardTitle>
                <CardDescription>Your most valuable assets by purchase price</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topAssets.map((asset) => (
                    <div key={asset.id} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{asset.name}</p>
                        <p className="text-xs text-muted-foreground">{asset.category}</p>
                      </div>
                      <div className="font-medium">${asset.value.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Assets
                </Button>
              </CardFooter>
            </Card>
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Depreciation Forecast</CardTitle>
                <CardDescription>Projected asset value over the next 5 years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="value" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Asset Value Analysis</CardTitle>
              <CardDescription>Detailed breakdown of your asset values</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="lifecycle" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Asset Lifecycle Analysis</CardTitle>
              <CardDescription>Track the lifecycle stages of your assets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                <PieChart className="h-16 w-16 text-muted-foreground/50" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Analysis</CardTitle>
              <CardDescription>Track maintenance history and compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="custom" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {savedReports.map((report) => (
              <Card key={report.id}>
                <CardHeader>
                  <CardTitle>{report.name}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Last generated</p>
                      <p className="font-medium">{report.lastGenerated}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Edit</Button>
                  <Button>Generate</Button>
                </CardFooter>
              </Card>
            ))}
            <Card className="flex flex-col items-center justify-center p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Plus className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Create Custom Report</h3>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Build a custom report with the exact data you need
              </p>
              <Button className="mt-6">Create Report</Button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

import { Plus } from "lucide-react"

const topAssets = [
  {
    id: "a1",
    name: "Company Van - Ford Transit",
    category: "Vehicles",
    value: 35000,
  },
  {
    id: "a2",
    name: "Server Rack - Dell PowerEdge",
    category: "IT Equipment",
    value: 28500,
  },
  {
    id: "a3",
    name: "CNC Machine",
    category: "Tools & Equipment",
    value: 22000,
  },
  {
    id: "a4",
    name: "Conference Room A/V System",
    category: "IT Equipment",
    value: 15000,
  },
  {
    id: "a5",
    name: "Executive Office Furniture Set",
    category: "Office Furniture",
    value: 12500,
  },
]

const savedReports = [
  {
    id: "r1",
    name: "Quarterly Asset Summary",
    description: "Overview of all assets with valuation and status",
    lastGenerated: "Oct 1, 2023",
  },
  {
    id: "r2",
    name: "IT Equipment Audit",
    description: "Detailed report of all IT assets with warranty status",
    lastGenerated: "Sep 15, 2023",
  },
  {
    id: "r3",
    name: "Maintenance Compliance",
    description: "Analysis of maintenance schedule adherence",
    lastGenerated: "Aug 30, 2023",
  },
  {
    id: "r4",
    name: "Depreciation Report",
    description: "Financial report showing asset depreciation over time",
    lastGenerated: "Sep 5, 2023",
  },
  {
    id: "r5",
    name: "Vehicle Fleet Status",
    description: "Status and maintenance history of all company vehicles",
    lastGenerated: "Oct 10, 2023",
  },
]

