import { Badge } from "@/components/ui/badge"
import { statusLabel, type CaseStatus } from "@/lib/data"

// Case status → badge style. Open is brand blue, waiting is amber.
const variant = {
  open: "brand",
  "waiting-client": "warning",
  "waiting-external": "warning",
} as const

export function StatusBadge({ status }: { status: CaseStatus }) {
  return (
    <Badge variant={variant[status as keyof typeof variant] ?? "default"} className="h-6 px-2.5 text-[13px]">
      {statusLabel[status]}
    </Badge>
  )
}
