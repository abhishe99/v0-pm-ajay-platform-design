"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Project = {
  name: string
  location: string
  milestone: string
  status: "Green" | "Yellow" | "Red"
  responsible: string
}

const PROJECTS: Project[] = [
  {
    name: "Model Village Phase I",
    location: "MH-Nashik",
    milestone: "Phase 2",
    status: "Green",
    responsible: "State RD Dept",
  },
  {
    name: "Hostel Block A",
    location: "KA-Bengaluru",
    milestone: "Foundation",
    status: "Yellow",
    responsible: "Edu Infra Corp",
  },
  {
    name: "GIA – Library Upgrade",
    location: "GJ-Ahmedabad",
    milestone: "Sanctioned",
    status: "Red",
    responsible: "State Edu Dept",
  },
]

export default function ProjectsPage() {
  const [files, setFiles] = useState<FileList | null>(null)

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Project Monitoring • परियोजना निगरानी</h1>
        <p className="text-sm text-muted-foreground">Gantt, geo-tagged map, uploads, and accountability matrix.</p>
      </header>

      {/* Gantt placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Gantt Timelines • गैंट समयरेखा</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border p-4 text-sm text-muted-foreground">
            Placeholder for Gantt chart visualization of milestones.
          </div>
        </CardContent>
      </Card>

      {/* Map placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Map Visualization • मानचित्र</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full rounded-md border bg-muted" aria-label="Map placeholder" />
          <p className="mt-2 text-sm text-muted-foreground">Geo-tagged locations of projects.</p>
        </CardContent>
      </Card>

      {/* Uploads */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Uploads • प्रगति अपलोड</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm">Upload Photos/Reports • फ़ोटो/रिपोर्ट अपलोड</label>
            <Input type="file" multiple onChange={(e) => setFiles(e.target.files)} aria-label="Upload progress files" />
            {files && files.length > 0 && (
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
                {Array.from(files).map((f) => (
                  <li key={f.name}>{f.name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-end">
            <Button className="w-full">Submit • सबमिट</Button>
          </div>
        </CardContent>
      </Card>

      {/* Accountability matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Accountability Matrix • जवाबदेही मैट्रिक्स</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project • परियोजना</TableHead>
                  <TableHead>Location • स्थान</TableHead>
                  <TableHead>Milestone • चरण</TableHead>
                  <TableHead>Status • स्थिति</TableHead>
                  <TableHead>Responsible • उत्तरदायी</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {PROJECTS.map((p) => (
                  <TableRow key={p.name}>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>{p.location}</TableCell>
                    <TableCell>{p.milestone}</TableCell>
                    <TableCell>
                      <Badge
                        variant={p.status === "Green" ? "outline" : p.status === "Yellow" ? "secondary" : "destructive"}
                      >
                        {p.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{p.responsible}</TableCell>
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
