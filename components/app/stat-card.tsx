import { cn } from "@/lib/utils"

// A big number with a label, on a white panel. Tone "danger" turns the number red (e.g. overdue).
export function StatCard({
  value,
  label,
  tone = "default",
  className,
}: {
  value: number | string
  label: string
  tone?: "default" | "danger"
  className?: string
}) {
  return (
    <div className={cn("rounded-2xl border bg-card p-6", className)}>
      <p className={cn("text-3xl font-bold tracking-tight", tone === "danger" && "text-destructive")}>{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
