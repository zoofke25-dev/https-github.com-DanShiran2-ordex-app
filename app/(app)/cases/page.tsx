import { AppHeader } from "@/components/app/app-header"
import { CasesTable } from "@/components/app/cases-table"
import { cases } from "@/lib/data"

export default function CasesPage() {
  return (
    <>
      <AppHeader title="Cases" />
      <main className="mx-auto w-full max-w-[1200px] space-y-6 p-6 lg:p-8">
        <div>
          <h2 className="text-3xl font-bold">Cases</h2>
          <p className="mt-1 text-muted-foreground">Every matter in the firm, with who owns it and what it is waiting for.</p>
        </div>
        <CasesTable cases={cases} />
      </main>
    </>
  )
}
