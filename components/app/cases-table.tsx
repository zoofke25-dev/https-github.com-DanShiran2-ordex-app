"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatusBadge } from "@/components/app/status-badge"
import type { Case } from "@/lib/data"

const filters = [
  { value: "all", label: "All" },
  { value: "open", label: "Open" },
  { value: "waiting", label: "Waiting" },
  { value: "closed", label: "Closed" },
]

export function CasesTable({ cases }: { cases: Case[] }) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("all")

  const shown = cases.filter((c) => {
    const matchesFilter = filter === "all" || (filter === "waiting" ? c.status.startsWith("waiting") : c.status === filter)
    const text = `${c.id} ${c.title} ${c.client} ${c.owner}`.toLowerCase()
    return matchesFilter && text.includes(query.toLowerCase())
  })

  return (
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
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search cases" className="h-9 pl-9" />
        </div>
        {/* TODO(class): this button does nothing yet. */}
        <Button className="h-9">
          <Plus />
          New case
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-4">Case</TableHead>
            <TableHead>Client</TableHead>
            <TableHead className="max-md:hidden">Owner</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="pr-4 text-right max-md:hidden">Next deadline</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* TODO(class): when nothing matches, the table is just empty. Design an empty state. */}
          {shown.map((c) => (
            <TableRow key={c.id} className="cursor-pointer" onClick={() => router.push(`/cases/${c.id}`)}>
              <TableCell className="py-3.5 pl-4">
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-muted-foreground">{c.id} · {c.practiceArea}</p>
              </TableCell>
              <TableCell>{c.client}</TableCell>
              <TableCell className="max-md:hidden">{c.owner}</TableCell>
              <TableCell><StatusBadge status={c.status} /></TableCell>
              <TableCell className="pr-4 text-right text-muted-foreground max-md:hidden">{c.nextDeadline ?? "None"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
