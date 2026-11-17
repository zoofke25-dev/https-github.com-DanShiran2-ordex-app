// Fake data for the Ordex demo firm, Shalev & Dagan. Nothing here is real.
// When a screen needs new data, add it here so every page reads from one place.

export type CaseStatus = "open" | "waiting-client" | "waiting-external" | "closed"

export type Case = {
  id: string
  title: string
  client: string
  owner: string
  status: CaseStatus
  practiceArea: string
  openedOn: string
  lastActivity: string
  nextDeadline?: string
  summary: string
}

export type Task = {
  id: string
  title: string
  caseId: string
  assignee: string
  due: string
  overdue?: boolean
  done?: boolean
}

export type Activity = {
  id: string
  who: string
  action: string
  caseId: string
  when: string
}

export type Client = {
  id: string
  name: string
  initials: string
  matter: string
}

export const firm = {
  name: "Shalev & Dagan",
  user: { name: "Yael Shalev", firstName: "Yael", initials: "YS", email: "yael@shalev-dagan.law" },
  today: "Tuesday, 22 September 2026",
}

export const statusLabel: Record<CaseStatus, string> = {
  open: "Open",
  "waiting-client": "Waiting on client",
  "waiting-external": "Waiting on external party",
  closed: "Closed",
}

export const cases: Case[] = [
  { id: "C-1063", title: "Contract termination advice", client: "Harbor Services Ltd.", owner: "Oren Dagan", status: "open", practiceArea: "Commercial", openedOn: "2 Sep 2026", lastActivity: "21 Sep, 18:10", nextDeadline: "30 Sep", summary: "Harbor wants to exit a five-year service agreement early. We are reviewing the termination clause and the notice period, and drafting a letter to the supplier." },
  { id: "C-1051", title: "Unpaid invoice dispute", client: "Oran Retail Ltd.", owner: "Oren Dagan", status: "waiting-external", practiceArea: "Litigation", openedOn: "14 Aug 2026", lastActivity: "21 Sep, 17:05", nextDeadline: "4 Oct", summary: "A distributor has not paid three invoices totalling $48,200. A demand letter was sent on 10 Sep; we are waiting for their lawyer to respond." },
  { id: "C-1042", title: "Supplier agreement", client: "Cedar Studio Ltd.", owner: "Yael Shalev", status: "waiting-client", practiceArea: "Commercial", openedOn: "1 Aug 2026", lastActivity: "21 Sep, 16:40", nextDeadline: "23 Sep", summary: "Drafting a supplier agreement for Cedar's new fabric vendor. The payment clause was revised; waiting for Cedar to approve the new terms." },
  { id: "C-1058", title: "Commercial lease", client: "Luma Foods Ltd.", owner: "Yael Shalev", status: "open", practiceArea: "Real estate", openedOn: "28 Aug 2026", lastActivity: "21 Sep, 14:30", nextDeadline: "25 Sep", summary: "Negotiating a ten-year lease for Luma's second kitchen. Version 3 is ready for signing." },
  { id: "C-1068", title: "Deposit dispute", client: "Northline Offices Ltd.", owner: "Oren Dagan", status: "waiting-client", practiceArea: "Real estate", openedOn: "9 Sep 2026", lastActivity: "17 Sep, 10:05", summary: "A former tenant is asking for their deposit back. We need Northline's inspection photos before replying." },
  { id: "C-1017", title: "Settlement letter", client: "Delta Print Ltd.", owner: "Yael Shalev", status: "open", practiceArea: "Litigation", openedOn: "3 Jun 2026", lastActivity: "20 Sep, 11:20", nextDeadline: "18 Sep", summary: "Settling a claim with a former employee. The settlement letter needs final wording approval." },
  { id: "C-1029", title: "Fee note query", client: "Maron Logistics Ltd.", owner: "Tamar Rosen", status: "open", practiceArea: "Commercial", openedOn: "30 Jun 2026", lastActivity: "19 Sep, 09:45", nextDeadline: "21 Sep", summary: "The client has questions about the August fee note. Reply with a breakdown of hours." },
  { id: "C-1046", title: "Engagement letter", client: "Tavor Design Ltd.", owner: "Noam Levi", status: "open", practiceArea: "Corporate", openedOn: "18 Aug 2026", lastActivity: "22 Sep, 08:30", nextDeadline: "Today", summary: "New client onboarding. The engagement letter is ready to sign." },
  { id: "C-1033", title: "Lease renewal", client: "Galil Dental Ltd.", owner: "Michal Sela", status: "open", practiceArea: "Real estate", openedOn: "9 Jul 2026", lastActivity: "18 Sep, 15:00", nextDeadline: "25 Sep", summary: "Reviewing the renewal terms for Galil's clinic lease." },
  { id: "C-0988", title: "Trademark registration", client: "Oran Retail Ltd.", owner: "Michal Sela", status: "closed", practiceArea: "IP", openedOn: "12 Mar 2026", lastActivity: "2 Aug, 12:00", summary: "Trademark registered. File closed." },
]

export const tasks: Task[] = [
  { id: "t1", title: "Approve settlement letter wording", caseId: "C-1017", assignee: "Yael Shalev", due: "18 Sep", overdue: true },
  { id: "t2", title: "Reply to client on fee note query", caseId: "C-1029", assignee: "Yael Shalev", due: "21 Sep", overdue: true },
  { id: "t3", title: "Sign engagement letter", caseId: "C-1046", assignee: "Yael Shalev", due: "Today" },
  { id: "t4", title: "Review revised payment clause", caseId: "C-1042", assignee: "Yael Shalev", due: "23 Sep" },
  { id: "t5", title: "Review lease renewal terms", caseId: "C-1033", assignee: "Yael Shalev", due: "25 Sep" },
  { id: "t6", title: "Prepare signing copy", caseId: "C-1058", assignee: "Tamar Rosen", due: "21 Sep", done: true },
  { id: "t7", title: "Send demand letter", caseId: "C-1051", assignee: "Oren Dagan", due: "10 Sep", done: true },
  { id: "t8", title: "Draft engagement letter", caseId: "C-1046", assignee: "Noam Levi", due: "18 Sep", done: true },
]

export const activity: Activity[] = [
  { id: "a1", who: "Noam Levi", action: "uploaded Harbor_Service_Agreement_2024.pdf", caseId: "C-1063", when: "21 Sep, 18:10" },
  { id: "a2", who: "Michal Sela", action: "uploaded Invoice_bundle.pdf", caseId: "C-1051", when: "21 Sep, 17:05" },
  { id: "a3", who: "Michal Sela", action: "uploaded Cedar_Supplier_scan_signed.pdf", caseId: "C-1042", when: "21 Sep, 16:40" },
  { id: "a4", who: "Tamar Rosen", action: "edited the case summary", caseId: "C-1058", when: "21 Sep, 14:30" },
  { id: "a5", who: "Tamar Rosen", action: "completed \"Prepare signing copy\"", caseId: "C-1058", when: "21 Sep, 13:05" },
  { id: "a6", who: "Tamar Rosen", action: "uploaded Luma_Lease_v3_signing.docx", caseId: "C-1058", when: "21 Sep, 13:00" },
]

export const clients: Client[] = [
  { id: "harbor", name: "Harbor Services Ltd.", initials: "HS", matter: "Contract termination advice" },
  { id: "oran", name: "Oran Retail Ltd.", initials: "OR", matter: "Unpaid invoice dispute" },
  { id: "cedar", name: "Cedar Studio Ltd.", initials: "CS", matter: "Supplier agreement" },
  { id: "luma", name: "Luma Foods Ltd.", initials: "LF", matter: "Commercial lease" },
  { id: "northline", name: "Northline Offices Ltd.", initials: "NO", matter: "Deposit dispute" },
]

export function getCase(id: string) {
  return cases.find((c) => c.id === id)
}

export function caseLabel(id: string) {
  const c = getCase(id)
  return c ? `${c.id} · ${c.client.replace(" Ltd.", "")}` : id
}
