"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts"

const timeline = [
  { month: "Apr", Sanctioned: 120, Released: 90, Utilized: 60 },
  { month: "May", Sanctioned: 140, Released: 110, Utilized: 95 },
  { month: "Jun", Sanctioned: 160, Released: 140, Utilized: 120 },
  { month: "Jul", Sanctioned: 180, Released: 150, Utilized: 140 },
]

const byState = [
  { state: "MH", Released: 30, Utilized: 25 },
  { state: "KA", Released: 28, Utilized: 24 },
  { state: "GJ", Released: 22, Utilized: 18 },
  { state: "UP", Released: 36, Utilized: 29 },
]

export default function FundFlowPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Fund Flow & Approvals • धन प्रवाह एवं अनुमोदन</h1>
        <p className="text-sm text-muted-foreground">
          Visualize sanctioned, released, and utilized funds with status indicators.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Releases Timeline • समयरेखा</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Sanctioned" stroke="var(--color-chart-1)" />
                <Line type="monotone" dataKey="Released" stroke="var(--color-chart-2)" />
                <Line type="monotone" dataKey="Utilized" stroke="var(--color-chart-3)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Status • स्थिति</CardTitle>
            <div className="flex gap-2">
              <Badge>Pending</Badge>
              <Badge variant="secondary">Approved</Badge>
              <Badge variant="outline">Released</Badge>
              <Badge variant="destructive">Utilized</Badge>
            </div>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byState}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="state" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Released" fill="var(--color-chart-2)" />
                <Bar dataKey="Utilized" fill="var(--color-chart-3)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>PFMS Integration • पीएफएमएस एकीकरण</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline">Export PDF</Button>
            <Button variant="outline">Export Excel</Button>
          </div>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Placeholder for PFMS API data retrieval and synchronization status.
        </CardContent>
      </Card>
    </div>
  )
}
