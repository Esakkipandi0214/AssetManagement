import Link from "next/link"
import {
  ArrowUpDown,
  CheckCircle2,
  ChevronDown,
  Download,
  Filter,
  Plus,
  Search,
  SlidersHorizontal,
  XCircle,
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

export default function AssetsPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Assets</h1>
        <Link href="/assets/new">
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            Add Asset
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4 py-4">
          <CardTitle className="text-xl">Asset Inventory</CardTitle>
          <CardDescription className="flex-1">Manage and track all your assets</CardDescription>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Download className="h-3.5 w-3.5" />
              Export
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
                <DropdownMenuCheckboxItem checked>Category</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Status</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Purchase Date</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Value</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Location</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Serial Number</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Assigned To</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Warranty Expiry</DropdownMenuCheckboxItem>
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
                  placeholder="Search assets..."
                  className="w-full pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[130px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="maintenance">Under Maintenance</SelectItem>
                  <SelectItem value="decommissioned">Decommissioned</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[130px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="it">IT Equipment</SelectItem>
                  <SelectItem value="vehicles">Vehicles</SelectItem>
                  <SelectItem value="furniture">Office Furniture</SelectItem>
                  <SelectItem value="tools">Tools & Equipment</SelectItem>
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
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Asset Name
                      <ArrowUpDown className="h-3.5 w-3.5" />
                    </div>
                  </TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Purchase Date</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assets.map((asset) => (
                  <TableRow key={asset.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">{asset.name}</TableCell>
                    <TableCell>{asset.category}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${
                            asset.status === "Active"
                              ? "bg-green-500"
                              : asset.status === "Under Maintenance"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        />
                        {asset.status}
                      </div>
                    </TableCell>
                    <TableCell>{asset.purchaseDate}</TableCell>
                    <TableCell>${asset.value.toLocaleString()}</TableCell>
                    <TableCell>{asset.location}</TableCell>
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
                          <DropdownMenuItem>Edit asset</DropdownMenuItem>
                          <DropdownMenuItem>Schedule maintenance</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Decommission</DropdownMenuItem>
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
              Showing <strong>1-10</strong> of <strong>142</strong> assets
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
      <Card>
        <CardHeader>
          <CardTitle>Asset Health Overview</CardTitle>
          <CardDescription>Quick summary of your asset health status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Healthy</div>
                <div className="text-2xl font-bold">124</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6 text-yellow-600"
                >
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                  <path d="M3.34 17a10 10 0 1 1 17.32 0" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Needs Attention</div>
                <div className="text-2xl font-bold">11</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Critical</div>
                <div className="text-2xl font-bold">7</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const assets = [
  {
    id: "a1",
    name: 'MacBook Pro 16"',
    category: "IT Equipment",
    status: "Active",
    purchaseDate: "Jan 15, 2023",
    value: 2499,
    location: "Main Office",
  },
  {
    id: "a2",
    name: "Dell XPS 15",
    category: "IT Equipment",
    status: "Active",
    purchaseDate: "Mar 10, 2023",
    value: 1899,
    location: "Main Office",
  },
  {
    id: "a3",
    name: "HP LaserJet Pro",
    category: "IT Equipment",
    status: "Under Maintenance",
    purchaseDate: "Nov 5, 2022",
    value: 499,
    location: "Main Office",
  },
  {
    id: "a4",
    name: "Conference Room Table",
    category: "Office Furniture",
    status: "Active",
    purchaseDate: "Jun 20, 2022",
    value: 1200,
    location: "Conference Room A",
  },
  {
    id: "a5",
    name: "Ergonomic Office Chair",
    category: "Office Furniture",
    status: "Active",
    purchaseDate: "Jul 12, 2022",
    value: 350,
    location: "Main Office",
  },
  {
    id: "a6",
    name: "Company Van - Ford Transit",
    category: "Vehicles",
    status: "Under Maintenance",
    purchaseDate: "Sep 3, 2021",
    value: 35000,
    location: "Parking Garage",
  },
  {
    id: "a7",
    name: "iPhone 14 Pro",
    category: "IT Equipment",
    status: "Active",
    purchaseDate: "Feb 8, 2023",
    value: 999,
    location: "Mobile",
  },
  {
    id: "a8",
    name: "Projector - Epson",
    category: "IT Equipment",
    status: "Active",
    purchaseDate: "Apr 15, 2022",
    value: 799,
    location: "Conference Room B",
  },
  {
    id: "a9",
    name: "Power Drill Set",
    category: "Tools & Equipment",
    status: "Decommissioned",
    purchaseDate: "May 22, 2020",
    value: 250,
    location: "Maintenance Room",
  },
  {
    id: "a10",
    name: "Reception Desk",
    category: "Office Furniture",
    status: "Active",
    purchaseDate: "Aug 30, 2021",
    value: 1800,
    location: "Reception Area",
  },
]

