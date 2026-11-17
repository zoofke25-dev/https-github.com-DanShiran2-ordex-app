import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app/app-sidebar"

// The product shell: sidebar on the left, the page on the right.
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-w-0 bg-background">{children}</SidebarInset>
    </SidebarProvider>
  )
}
