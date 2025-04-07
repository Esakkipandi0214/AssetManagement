import { Edit, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CategoriesPage() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Add New Category</CardTitle>
            <CardDescription>Create a new category to organize your assets</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Category Name</Label>
                <Input id="name" placeholder="Enter category name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input id="description" placeholder="Enter description" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="color">Color Tag</Label>
                <div className="flex gap-2">
                  {[
                    "bg-red-500",
                    "bg-blue-500",
                    "bg-green-500",
                    "bg-yellow-500",
                    "bg-purple-500",
                    "bg-pink-500",
                    "bg-indigo-500",
                    "bg-gray-500",
                  ].map((color) => (
                    <div
                      key={color}
                      className={`h-8 w-8 cursor-pointer rounded-full ${color} hover:ring-2 hover:ring-offset-2`}
                    />
                  ))}
                </div>
              </div>
              <Button className="w-full">Create Category</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Category List</CardTitle>
            <CardDescription>Manage your asset categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Assets</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className={`h-4 w-4 rounded-full ${category.color}`} />
                          <span className="font-medium">{category.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{category.description}</TableCell>
                      <TableCell>{category.assetCount}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const categories = [
  {
    id: "c1",
    name: "IT Equipment",
    description: "Computers, printers, and other electronic devices",
    assetCount: 58,
    color: "bg-blue-500",
  },
  {
    id: "c2",
    name: "Vehicles",
    description: "Company cars, vans, and other transportation",
    assetCount: 12,
    color: "bg-green-500",
  },
  {
    id: "c3",
    name: "Office Furniture",
    description: "Desks, chairs, tables, and other furniture",
    assetCount: 45,
    color: "bg-yellow-500",
  },
  {
    id: "c4",
    name: "Tools & Equipment",
    description: "Hand tools, power tools, and other equipment",
    assetCount: 27,
    color: "bg-red-500",
  },
  {
    id: "c5",
    name: "Software Licenses",
    description: "Software subscriptions and licenses",
    assetCount: 34,
    color: "bg-purple-500",
  },
  {
    id: "c6",
    name: "Mobile Devices",
    description: "Smartphones, tablets, and other mobile devices",
    assetCount: 23,
    color: "bg-pink-500",
  },
]

