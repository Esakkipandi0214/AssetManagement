import type { ReactNode } from "react"
import Link from "next/link"
import {
  BarChart3,
  Bell,
  ChevronDown,
  Cog,
  FolderKanban,
  Home,
  LayoutDashboard,
  LogOut,
  Package,
  Settings,
  Tag,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Package className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/assets"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                Assets
              </Link>
              <Link
                href="/categories"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Tag className="h-5 w-5" />
                Categories
              </Link>
              <Link
                href="/reports"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <BarChart3 className="h-5 w-5" />
                Reports
              </Link>
              <Link
                href="/maintenance"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <FolderKanban className="h-5 w-5" />
                Maintenance
              </Link>
              <Link
                href="/team"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Users className="h-5 w-5" />
                Team
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight">AssetTrack</span>
        </div>
        <div className="flex-1"></div>
        <Button variant="outline" size="icon" className="shrink-0">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="relative h-8 flex items-center gap-2 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="hidden md:flex md:flex-col md:items-start md:leading-none">
                <span className="font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">john@example.com</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Cog className="mr-2 h-4 w-4" />
                <span>Subscription</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <nav className="grid gap-1 text-sm">
              <Link
                href="/dashboard"
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent", "bg-accent")}
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/assets"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                Assets
              </Link>
              <Link
                href="/categories"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <Tag className="h-5 w-5" />
                Categories
              </Link>
              <Link
                href="/reports"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <BarChart3 className="h-5 w-5" />
                Reports
              </Link>
              <Link
                href="/maintenance"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <FolderKanban className="h-5 w-5" />
                Maintenance
              </Link>
              <Link
                href="/team"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <Users className="h-5 w-5" />
                Team
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

