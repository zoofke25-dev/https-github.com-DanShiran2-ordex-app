"use client"

import { useState } from "react"
import { Plus, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatCard } from "@/components/app/stat-card"
import { caseLabel, type Task } from "@/lib/data"
import { cn } from "@/lib/utils"

const filters = [
  { value: "all", label: "All" },
  { value: "mine", label: "Mine" },
  { value: "overdue", label: "Overdue" },
  { value: "done", label: "Done" },
]

// The Tasks page body: stats, then one panel with filters, search and the task list grouped into Open and Done.
export function TasksList({ tasks: initialTasks, me }: { tasks: Task[]; me: string }) {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState("all")
  const [query, setQuery] = useState("")

  const toggle = (id: string) => setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  const shown = tasks.filter((t) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "mine" && t.assignee === me) ||
      (filter === "overdue" && t.overdue && !t.done) ||
      (filter === "done" && t.done)
    const text = `${t.title} ${caseLabel(t.caseId)}`.toLowerCase()
    return matchesFilter && text.includes(query.toLowerCase())
  })

  const groups = [
    { label: "Open", items: shown.filter((t) => !t.done) },
    { label: "Done", items: shown.filter((t) => t.done) },
  ].filter((g) => g.items.length > 0)

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard value={tasks.filter((t) => t.overdue && !t.done).length} label="Overdue" tone="danger" />
        <StatCard value={tasks.filter((t) => t.due === "Today" && !t.done).length} label="Due today" />
        <StatCard value={tasks.filter((t) => t.done).length} label="Done this week" />
      </div>

      <div className="rounded-2xl border bg-card">
        <div className="flex flex-wrap items-center gap-3 border-b p-4">
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList>
              {filters.map((f) => (
                <TabsTrigger key={f.value} value={f.value}>{f.label}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="relative ml-auto w-full sm:w-64">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tasks" className="h-9 pl-9" />
          </div>
          {/* TODO(class): this button does nothing yet. */}
          <Button className="h-9">
            <Plus />
            New task
          </Button>
        </div>

        <div className="space-y-6 p-6">
          {groups.length === 0 && <p className="py-8 text-center text-muted-foreground">No tasks match.</p>}
          {groups.map((group) => (
            <section key={group.label}>
              <h3 className="text-sm font-semibold tracking-normal text-muted-foreground">
                {group.label} · {group.items.length}
              </h3>
              <ul className="divide-y">
                {group.items.map((task) => (
                  <li key={task.id} className="flex items-center gap-3 py-3.5">
                    <Checkbox id={task.id} checked={!!task.done} onCheckedChange={() => toggle(task.id)} className="size-5" />
                    <label
                      htmlFor={task.id}
                      className={cn("flex-1 text-[15px]", task.done && "text-muted-foreground line-through")}
                    >
                      {task.title}
                    </label>
                    <Badge variant="outline" className="h-6 px-2.5 text-[13px] text-muted-foreground max-sm:hidden">
                      {caseLabel(task.caseId)}
                    </Badge>
                    <span
                      className={cn(
                        "w-14 text-right text-sm font-semibold",
                        task.done ? "text-muted-foreground" : task.overdue && "text-destructive"
                      )}
                    >
                      {task.due}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
