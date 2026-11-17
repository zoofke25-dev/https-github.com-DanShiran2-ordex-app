import { AppHeader } from "@/components/app/app-header"
import { TasksList } from "@/components/app/tasks-list"
import { firm, tasks } from "@/lib/data"

export default function TasksPage() {
  return (
    <>
      <AppHeader title="Tasks" />
      <main className="mx-auto w-full max-w-[1200px] space-y-6 p-6 lg:p-8">
        <div>
          <h2 className="text-3xl font-bold">Tasks</h2>
          <p className="mt-1 text-muted-foreground">Every task across your cases, in one list.</p>
        </div>
        <TasksList tasks={tasks} me={firm.user.name} />
      </main>
    </>
  )
}
