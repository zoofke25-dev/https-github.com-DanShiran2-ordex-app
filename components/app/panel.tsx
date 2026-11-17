import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

// A white panel with an icon title and an optional "All …" link. Every dashboard block uses it.
export function Panel({
  title,
  icon: Icon,
  href,
  linkLabel,
  className,
  children,
}: {
  title: string
  icon?: LucideIcon
  href?: string
  linkLabel?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={cn("rounded-2xl border bg-card p-6", className)}>
      <div className="mb-3 flex items-center gap-2.5">
        {Icon && <Icon className="size-5 text-foreground" />}
        <h2 className="text-[17px] font-semibold">{title}</h2>
        {href && (
          <Link href={href} className="ml-auto flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary">
            {linkLabel}
            <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}
