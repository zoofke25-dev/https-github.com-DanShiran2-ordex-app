import { Hammer } from "lucide-react"
import { AppHeader } from "@/components/app/app-header"

// Placeholder for pages that are not designed yet. Each one is a starter issue for the class.
export function ComingSoon({ title, issue }: { title: string; issue: string }) {
  return (
    <>
      <AppHeader title={title} />
      <main className="grid flex-1 place-items-center p-8">
        <div className="max-w-sm text-center">
          <span className="mx-auto grid size-12 place-items-center rounded-full bg-secondary">
            <Hammer className="size-5 text-primary" />
          </span>
          <h2 className="mt-4 text-xl font-semibold">{title} is not designed yet</h2>
          <p className="mt-2 text-muted-foreground">{issue}</p>
        </div>
      </main>
    </>
  )
}
