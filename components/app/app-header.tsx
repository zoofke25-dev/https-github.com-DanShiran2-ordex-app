import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

// The top bar on every app page: the page name on the left, search and notifications on the right.
export function AppHeader({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-card px-6">
      <SidebarTrigger className="md:hidden" />
      <h1 className="text-[15px] font-semibold">{title}</h1>
      <div className="ml-auto flex items-center gap-2">
        <button className="flex h-9 w-56 items-center gap-2 rounded-lg border border-input bg-card px-3 text-sm text-muted-foreground max-sm:hidden">
          <Search className="size-4" />
          Search
          <kbd className="ml-auto font-sans text-xs">⌘K</kbd>
        </button>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell />
        </Button>
      </div>
    </header>
  )
}
