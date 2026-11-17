import Link from "next/link"
import { CheckSquare, Clock, Folder, Users } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { AppHeader } from "@/components/app/app-header"
import { Panel } from "@/components/app/panel"
import { StatusBadge } from "@/components/app/status-badge"
import { activity, caseLabel, cases, clients, firm, tasks } from "@/lib/data"

const stats = [
  { value: cases.filter((c) => c.status !== "closed").length, label: "Open cases" },
  { value: tasks.filter((t) => t.overdue).length, label: "My overdue tasks", alert: true },
  { value: tasks.filter((t) => t.due === "Today").length, label: "Due today" },
  { value: tasks.length, label: "My open tasks" },
]

export default function HomePage() {
  return (
    <>
      <AppHeader title="Home" />
      <main className="mx-auto w-full max-w-[1200px] space-y-6 p-6 lg:p-8">
        <div>
          <h2 className="text-3xl font-bold">Good morning, {firm.user.firstName}</h2>
          <p className="mt-1 text-muted-foreground">{firm.today} · Daily overview of activity in the firm</p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border bg-card p-6">
              <p className={stat.alert ? "text-3xl font-bold text-destructive" : "text-3xl font-bold"}>{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          <Panel title="My tasks" icon={CheckSquare} href="/tasks" linkLabel="All tasks">
            <ul className="divide-y">
              {tasks.map((task) => (
                <li key={task.id} className="flex items-center gap-3 py-3.5">
                  <Checkbox id={task.id} className="size-5" />
                  <label htmlFor={task.id} className="flex-1 text-[15px]">{task.title}</label>
                  <Badge variant="outline" className="h-6 font-normal text-muted-foreground max-sm:hidden">{caseLabel(task.caseId)}</Badge>
                  {/* TODO(class): this red is a raw hex. Swap it for the destructive token. */}
                  <span className={task.overdue ? "w-14 text-right text-sm font-semibold text-[#e5484d]" : "w-14 text-right text-sm font-semibold"}>
                    {task.due}
                  </span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Recent activity" icon={Clock} href="/cases" linkLabel="All activity">
            <ul className="divide-y">
              {activity.map((item) => (
                <li key={item.id} className="flex gap-3 py-3">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-muted">
                    <Clock className="size-3.5 text-muted-foreground" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[15px]">{item.who} {item.action}</p>
                    <p className="text-sm text-muted-foreground">{caseLabel(item.caseId).split(" · ")[1]} · {item.when}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <Panel title="Recent cases" icon={Folder} href="/cases" linkLabel="All cases">
            <ul className="divide-y">
              {cases.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <Link href={`/cases/${c.id}`} className="flex items-center gap-4 py-3.5 hover:bg-muted/50">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15px] font-semibold">{c.client.replace(" Ltd.", "")}: {c.title.toLowerCase()}</p>
                      <p className="text-sm text-muted-foreground">{c.id} · {c.owner}</p>
                    </div>
                    <StatusBadge status={c.status} />
                    <span className="w-44 text-right text-sm text-muted-foreground max-md:hidden">Last activity {c.lastActivity}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Recent clients" icon={Users} href="/clients" linkLabel="All clients">
            <ul className="divide-y">
              {clients.map((client) => (
                <li key={client.id} className="flex items-center gap-3 py-3">
                  <Avatar className="size-9">
                    <AvatarFallback className="bg-muted text-xs font-semibold">{client.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-[15px] font-medium">{client.name}</p>
                    <p className="truncate text-sm text-muted-foreground">{client.matter}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </main>
    </>
  )
}
