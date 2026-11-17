import Link from "next/link"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { OrdexLogo } from "@/components/app/ordex-logo"

const plans = [
  { name: "Solo", blurb: "For lawyers working on their own.", price: "$29", features: ["1 lawyer", "Up to 50 cases", "Tasks and documents", "Email support"] },
  { name: "Firm", blurb: "For firms with up to 10 lawyers.", price: "$79", popular: true, features: ["Up to 10 lawyers", "Unlimited cases", "Case assistant", "Client updates"] },
  { name: "Practice", blurb: "For practices with up to 50 lawyers.", price: "$149", features: ["Up to 50 lawyers", "Unlimited cases", "Roles and permissions", "Priority support"] },
  { name: "Enterprise", blurb: "For firms with more than 50 lawyers.", price: "Custom", enterprise: true, features: ["SSO and audit logs", "Dedicated onboarding", "Custom data retention", "Invoice billing"] },
]

const links = ["Product", "Customers", "Pricing", "Resources"]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="mx-auto grid max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-6 py-5">
        <Link href="/pricing"><OrdexLogo /></Link>
        <div className="flex gap-8 text-sm font-semibold text-muted-foreground max-md:hidden">
          {links.map((l) => (
            <span key={l} className={l === "Pricing" ? "text-foreground" : undefined}>{l}</span>
          ))}
        </div>
        <div className="flex items-center justify-end gap-4 text-sm font-semibold">
          <Link href="/">Sign in</Link>
          <Button className="h-10 px-4">Start free trial</Button>
        </div>
      </nav>

      <header className="px-6 pt-20 pb-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-[-0.04em] md:text-6xl">Pricing for growing law firms</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">One place to see where every case stands. Pick the plan that fits your firm.</p>
        {/* TODO(class): the toggle is drawn but does nothing. Yearly should show 2 months free. */}
        <div className="mt-8 inline-flex rounded-full border bg-card p-1 text-sm font-semibold">
          <span className="rounded-full bg-primary px-4 py-2 text-primary-foreground">Monthly</span>
          <span className="px-4 py-2 text-muted-foreground">Yearly · 2 months free</span>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1200px] gap-5 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={cn(
              "flex flex-col rounded-2xl border bg-card p-7",
              plan.popular && "border-2 border-primary",
              plan.enterprise && "border-primary bg-primary text-primary-foreground",
            )}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              {plan.popular && <Badge variant="brand">Most popular</Badge>}
            </div>
            <p className={cn("mt-3 text-sm", plan.enterprise ? "text-primary-foreground/80" : "text-muted-foreground")}>{plan.blurb}</p>
            <p className="mt-6 text-5xl font-bold tracking-tight">
              {plan.price}
              {!plan.enterprise && <span className="ml-1 text-base font-normal text-muted-foreground">/ month</span>}
            </p>
            <Button
              variant={plan.popular ? "default" : "secondary"}
              className={cn("mt-6 h-12 text-[15px]", plan.enterprise && "bg-card text-primary hover:bg-card/90")}
            >
              {plan.enterprise ? "Talk to sales" : "Start free trial"}
            </Button>
            <ul className={cn("mt-6 space-y-3 border-t pt-6 text-[15px]", plan.enterprise && "border-primary-foreground/25")}>
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <Check className={cn("size-4", plan.enterprise ? "text-primary-foreground" : "text-primary")} />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <p className="pb-16 text-center text-sm text-muted-foreground">Prices in USD, billed per firm. Cancel anytime.</p>
    </div>
  )
}
