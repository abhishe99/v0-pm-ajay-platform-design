"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  AreaChart,
  Area,
} from "recharts"

const performance = [
  { state: "MH", Score: 84 },
  { state: "KA", Score: 78 },
  { state: "GJ", Score: 71 },
  { state: "UP", Score: 66 },
]

const delays = [
  { month: "Apr", Days: 4 },
  { month: "May", Days: 6 },
  { month: "Jun", Days: 3 },
  { month: "Jul", Days: 5 },
]

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Analytics & Reports • विश्लेषण और रिपोर्ट</h1>
        <p className="text-sm text-muted-foreground">
          Performance comparisons, delay analysis, predictive alerts, and downloads.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>State-wise Performance • प्रदर्शन</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="state" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Score" fill="var(--color-chart-1)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delay Analysis • विलंब विश्लेषण</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={delays}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Days" stroke="var(--color-chart-2)" fill="var(--color-chart-2)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Predictive Alerts • पूर्वानुमानित चेतावनी</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Placeholder for risk predictions of delay/cost overrun using historical trends.
        </CardContent>
      </Card>
    </div>
  )
}
