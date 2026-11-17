import Image from "next/image"
import { cn } from "@/lib/utils"

// The Ordex mark alone (sidebar) or with the wordmark (marketing pages).
export function OrdexMark({ className }: { className?: string }) {
  return (
    <span className={cn("grid size-8 place-items-center rounded-full bg-primary", className)} aria-hidden>
      <span className="size-3.5 rounded-[4px] bg-primary-foreground" />
    </span>
  )
}

export function OrdexLogo({ className }: { className?: string }) {
  return <Image src="/ordex-logo.svg" alt="Ordex" width={104} height={35} className={cn("h-8 w-auto", className)} priority />
}
