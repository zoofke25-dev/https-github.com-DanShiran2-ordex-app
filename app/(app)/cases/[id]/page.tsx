import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarClock, CheckSquare, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { AppHeader } from "@/components/app/app-header"
import { Panel } from "@/components/app/panel"
import { StatusBadge } from "@/components/app/status-badge"
import { activity, cases, getCase, tasks } from "@/lib/data"

// The page waits for the case id before it renders. Fine here: the data is local and instant.
export const instant = false

export function generateStaticParams() {
  return cases.map((c) => ({ id: c.id }))
}

export default async function CasePage({ params }: PageProps<"/cases/[id]">) {
  const { id } = await params
  const c = getCase(id)
  if (!c) notFound()

  const caseTasks = tasks.filter((t) => t.caseId === c.id)
  const caseActivity = activity.filter((a) => a.caseId === c.id)
  const details = [
    ["Client", c.client],
    ["Owner", c.owner],
    ["Practice area", c.practiceArea],
    ["Opened", c.openedOn],
    ["Next deadline", c.nextDeadline ?? "None"],
  ]

  return (
    <>
      <AppHeader title="Cases" />
      <main className="mx-auto w-full max-w-[1200px] space-y-6 p-6 lg:p-8">
        <Link href="/cases" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-4" />
          All cases
        </Link>

        <div className="flex flex-wrap items-start gap-4">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-sm text-muted-foreground">{c.id}</p>
            <h2 className="mt-1 text-3xl font-bold">{c.client.replace(" Ltd.", "")}: {c.title.toLowerCase()}</h2>
            <div className="mt-3 flex items-center gap-3">
              <StatusBadge status={c.status} />
              <span className="text-sm text-muted-foreground">Last activity {c.lastActivity}</span>
            </div>
          </div>
          {/* TODO(class): "Add note" has no design and no behaviour yet. */}
          <Button variant="secondary" className="h-10 px-4">Add note</Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            <Panel title="Summary" icon={FileText}>
              <p className="text-[15px] leading-7 text-foreground/85">{c.summary}</p>
            </Panel>

            <Panel title="Tasks" icon={CheckSquare}>
              {caseTasks.length ? (
                <ul className="divide-y">
                  {caseTasks.map((task) => (
                    <li key={task.id} className="flex items-center gap-3 py-3.5">
                      <Checkbox id={task.id} className="size-5" />
                      <label htmlFor={task.id} className="flex-1 text-[15px]">{task.title}</label>
                      <span className="text-sm font-semibold">{task.due}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="py-3 text-sm text-muted-foreground">No tasks yet.</p>
              )}
            </Panel>

            <Panel title="Activity" icon={Clock}>
              {caseActivity.length ? (
                <ul className="divide-y">
                  {caseActivity.map((item) => (
                    <li key={item.id} className="py-3">
                      <p className="text-[15px]">{item.who} {item.action}</p>
                      <p className="text-sm text-muted-foreground">{item.when}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="py-3 text-sm text-muted-foreground">No activity yet.</p>
              )}
            </Panel>
          </div>

          <Panel title="Details" icon={CalendarClock} className="h-fit">
            <dl className="divide-y">
              {details.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 py-3 text-[15px]">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="text-right font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </Panel>
        </div>
      </main>
    </>
  )
}
