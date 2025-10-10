"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useRole } from "@/components/role-context"

type Agency = {
  name: string
  state: string
  component: "Adarsh Gram" | "GIA" | "Hostel"
  type: "Implementing" | "Executing"
  role: string
  responsibilities: string
  contact: { name: string; email: string; phone: string }
}

const AGENCIES: Agency[] = [
  {
    name: "State Rural Dev Dept",
    state: "Maharashtra",
    component: "Adarsh Gram",
    type: "Implementing",
    role: "State Nodal",
    responsibilities: "Execution oversight, reporting",
    contact: { name: "A. Sharma", email: "a.sharma@gov.in", phone: "1800-000-111" },
  },
  {
    name: "Edu Infrastructure Corp",
    state: "Karnataka",
    component: "Hostel",
    type: "Executing",
    role: "Project Execution",
    responsibilities: "Construction, milestones",
    contact: { name: "R. Rao", email: "r.rao@gov.in", phone: "1800-000-222" },
  },
  {
    name: "State Finance Dept",
    state: "Gujarat",
    component: "GIA",
    type: "Implementing",
    role: "Fund Release",
    responsibilities: "Sanction, PFMS integration",
    contact: { name: "P. Patel", email: "p.patel@gov.in", phone: "1800-000-333" },
  },
]

export default function AgenciesPage() {
  const [q, setQ] = useState("")
  const [state, setState] = useState<string>("all")
  const [component, setComponent] = useState<string>("all")
  const [type, setType] = useState<string>("all")
  const { role, setRole } = useRole()

  const filtered = useMemo(() => {
    return AGENCIES.filter((a) => {
      const matchesQ = q ? a.name.toLowerCase().includes(q.toLowerCase()) : true
      const matchesState = state === "all" ? true : a.state === state
      const matchesComp = component === "all" ? true : a.component === component
      const matchesType = type === "all" ? true : a.type === type
      return matchesQ && matchesState && matchesComp && matchesType
    })
  }, [q, state, component, type])

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Agencies Repository • एजेंसियों की सूची</h1>
          <p className="text-sm text-muted-foreground">Search, filter, and download structured agency information.</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Role:</span>
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="official">Official</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <Card>
        <CardContent className="grid gap-4 py-6 md:grid-cols-4">
          <Input
            className="md:col-span-2"
            placeholder="Search agency • एजेंसी खोजें"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <Select value={state} onValueChange={setState}>
            <SelectTrigger>
              <SelectValue placeholder="State • राज्य" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {Array.from(new Set(AGENCIES.map((a) => a.state))).map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            <Select value={component} onValueChange={setComponent}>
              <SelectTrigger>
                <SelectValue placeholder="Component • घटक" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Adarsh Gram">Adarsh Gram</SelectItem>
                <SelectItem value="GIA">GIA</SelectItem>
                <SelectItem value="Hostel">Hostel</SelectItem>
              </SelectContent>
            </Select>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="Agency Type • प्रकार" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Implementing">Implementing</SelectItem>
                <SelectItem value="Executing">Executing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Directory • निर्देशिका</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline">Export PDF • पीडीएफ</Button>
            <Button variant="outline">Export Excel • एक्सेल</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Agency • एजेंसी</TableHead>
                  <TableHead>State • राज्य</TableHead>
                  <TableHead>Component • घटक</TableHead>
                  <TableHead>Type • प्रकार</TableHead>
                  <TableHead>Role • भूमिका</TableHead>
                  <TableHead>Responsibilities • दायित्व</TableHead>
                  <TableHead>Sensitive Contact • संपर्क</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((a) => (
                  <TableRow key={a.name}>
                    <TableCell>{a.name}</TableCell>
                    <TableCell>{a.state}</TableCell>
                    <TableCell>{a.component}</TableCell>
                    <TableCell>{a.type}</TableCell>
                    <TableCell>{a.role}</TableCell>
                    <TableCell>{a.responsibilities}</TableCell>
                    <TableCell className="text-sm">
                      {role === "official" ? (
                        <div>
                          <div>{a.contact.name}</div>
                          <div className="text-muted-foreground">{a.contact.email}</div>
                          <div className="text-muted-foreground">{a.contact.phone}</div>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">Restricted • प्रतिबंधित</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
