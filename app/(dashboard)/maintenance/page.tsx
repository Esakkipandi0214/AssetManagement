import Link from "next/link"
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Filter,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MaintenancePage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Maintenance Scheduler</h1>
        <Link href="/maintenance/new">
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            Schedule Maintenance
          </Button>
        </Link>
      </div>
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 py-4">
              <CardTitle className="text-xl">Upcoming Maintenance</CardTitle>
              <CardDescription className="flex-1">Scheduled maintenance tasks for the next 30 days</CardDescription>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Calendar View
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  Filter
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <SlidersHorizontal className="h-3.5 w-3.5" />
                      View
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>Asset Name</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>Maintenance Type</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>Due Date</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>Status</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>Assigned To</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Priority</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Estimated Cost</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 pb-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search maintenance tasks..."
                      className="w-full pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="h-8 w-[130px]">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priorities</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="h-8 w-[130px]">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="inspection">Inspection</SelectItem>
                      <SelectItem value="repair">Repair</SelectItem>
                      <SelectItem value="replacement">Replacement</SelectItem>
                      <SelectItem value="calibration">Calibration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40px]">
                        <Checkbox />
                      </TableHead>
                      <TableHead>Asset</TableHead>
                      <TableHead>Maintenance Type</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingMaintenance.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">{task.asset}</TableCell>
                        <TableCell>{task.type}</TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-yellow-500" />
                            <span>Upcoming</span>
                          </div>
                        </TableCell>
                        <TableCell>{task.assignedTo}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <span className="sr-only">Open menu</span>
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Edit task</DropdownMenuItem>
                              <DropdownMenuItem>Mark as complete</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Cancel task</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-between py-4">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>1-5</strong> of <strong>12</strong> tasks
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="overdue" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 py-4">
              <CardTitle className="text-xl">Overdue Maintenance</CardTitle>
              <CardDescription className="flex-1">Maintenance tasks that are past their due date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40px]">
                        <Checkbox />
                      </TableHead>
                      <TableHead>Asset</TableHead>
                      <TableHead>Maintenance Type</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {overdueMaintenance.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">{task.asset}</TableCell>
                        <TableCell>{task.type}</TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-destructive" />
                            <span className="text-destructive">Overdue</span>
                          </div>
                        </TableCell>
                        <TableCell>{task.assignedTo}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <span className="sr-only">Open menu</span>
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Edit task</DropdownMenuItem>
                              <DropdownMenuItem>Mark as complete</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Cancel task</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 py-4">
              <CardTitle className="text-xl">Completed Maintenance</CardTitle>
              <CardDescription className="flex-1">Maintenance tasks that have been completed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40px]">
                        <Checkbox />
                      </TableHead>
                      <TableHead>Asset</TableHead>
                      <TableHead>Maintenance Type</TableHead>
                      <TableHead>Completion Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Completed By</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {completedMaintenance.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">{task.asset}</TableCell>
                        <TableCell>{task.type}</TableCell>
                        <TableCell>{task.completionDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-green-600">Completed</span>
                          </div>
                        </TableCell>
                        <TableCell>{task.completedBy}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <span className="sr-only">Open menu</span>
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>View report</DropdownMenuItem>
                              <DropdownMenuItem>Schedule follow-up</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 py-4">
              <CardTitle className="text-xl">All Maintenance Tasks</CardTitle>
              <CardDescription className="flex-1">View all maintenance tasks in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40px]">
                        <Checkbox />
                      </TableHead>
                      <TableHead>Asset</TableHead>
                      <TableHead>Maintenance Type</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...overdueMaintenance, ...upcomingMaintenance].map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">{task.asset}</TableCell>
                        <TableCell>{task.type}</TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {task.id.startsWith("o") ? (
                              <>
                                <AlertCircle className="h-4 w-4 text-destructive" />
                                <span className="text-destructive">Overdue</span>
                              </>
                            ) : (
                              <>
                                <Clock className="h-4 w-4 text-yellow-500" />
                                <span>Upcoming</span>
                              </>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{task.assignedTo}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <span className="sr-only">Open menu</span>
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Edit task</DropdownMenuItem>
                              <DropdownMenuItem>Mark as complete</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Cancel task</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const upcomingMaintenance = [
  {
    id: "u1",
    asset: "Company Car - Ford Transit",
    type: "Oil Change",
    dueDate: "Nov 5, 2023",
    assignedTo: "Mike Chen",
  },
  {
    id: "u2",
    asset: "Server Room - AC Maintenance",
    type: "Inspection",
    dueDate: "Nov 12, 2023",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "u3",
    asset: "Fire Extinguishers - Annual Inspection",
    type: "Inspection",
    dueDate: "Nov 18, 2023",
    assignedTo: "Robert Garcia",
  },
  {
    id: "u4",
    asset: "Office Printer - Canon MX922",
    type: "Calibration",
    dueDate: "Nov 25, 2023",
    assignedTo: "Emily Wilson",
  },
  {
    id: "u5",
    asset: "CNC Machine - Quarterly Maintenance",
    type: "Inspection",
    dueDate: "Dec 1, 2023",
    assignedTo: "Mike Chen",
  },
]

const overdueMaintenance = [
  {
    id: "o1",
    asset: "Laptop HP EliteBook - Annual Check",
    type: "Inspection",
    dueDate: "Oct 15, 2023",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "o2",
    asset: "Office Printer - Quarterly Maintenance",
    type: "Maintenance",
    dueDate: "Oct 22, 2023",
    assignedTo: "Emily Wilson",
  },
  {
    id: "o3",
    asset: "HVAC System - Filter Replacement",
    type: "Replacement",
    dueDate: "Oct 28, 2023",
    assignedTo: "Robert Garcia",
  },
]

const completedMaintenance = [
  {
    id: "c1",
    asset: "Company Car - Toyota Camry",
    type: "Tire Rotation",
    completionDate: "Oct 18, 2023",
    completedBy: "Mike Chen",
  },
  {
    id: "c2",
    asset: "Conference Room Projector",
    type: "Lamp Replacement",
    completionDate: "Oct 12, 2023",
    completedBy: "Emily Wilson",
  },
  {
    id: "c3",
    asset: "Water Cooler - Monthly Cleaning",
    type: "Cleaning",
    completionDate: "Oct 5, 2023",
    completedBy: "Robert Garcia",
  },
  {
    id: "c4",
    asset: "Office Chairs - Quarterly Inspection",
    type: "Inspection",
    completionDate: "Sep 28, 2023",
    completedBy: "Sarah Johnson",
  },
]

