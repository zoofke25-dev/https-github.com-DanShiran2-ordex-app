"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CheckSquare, ChevronsUpDown, FileText, Folder, Home, Settings2, Users } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { OrdexMark } from "@/components/app/ordex-logo"
import { firm } from "@/lib/data"

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/cases", label: "Cases", icon: Folder },
  { href: "/tasks", label: "Tasks", icon: CheckSquare },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/clients", label: "Clients", icon: Users },
]

export function AppSidebar() {
  const pathname = usePathname()
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <OrdexMark />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">{firm.name}</p>
            <p className="truncate text-xs text-muted-foreground">Ordex workspace</p>
          </div>
          <ChevronsUpDown className="size-4 text-muted-foreground" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {nav.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={isActive(item.href)} className="h-10 text-[15px]">
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-10 text-[15px]">
              <Settings2 />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-11">
              <Avatar className="size-7">
                <AvatarFallback className="bg-secondary text-xs font-semibold text-secondary-foreground">{firm.user.initials}</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-foreground">{firm.user.name}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
