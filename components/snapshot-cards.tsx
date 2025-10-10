import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Live Fund Flow • सक्रिय धन प्रवाह", value: "₹ 430 Cr" },
  { label: "Approvals Pending • लंबित अनुमोदन", value: "128" },
  { label: "Projects In-Progress • प्रगति पर परियोजनाएँ", value: "342" },
  { label: "Utilization • उपयोग", value: "76%" },
]

export function SnapshotCards() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label}>
          <CardContent className="py-5">
            <div className="text-sm text-muted-foreground">{s.label}</div>
            <div className="mt-1 text-2xl font-semibold">{s.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
