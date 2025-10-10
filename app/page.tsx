import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsTicker } from "@/components/news-ticker"
import { QuickLinks } from "@/components/quick-links"
import { SnapshotCards } from "@/components/snapshot-cards"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="bg-secondary border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="space-y-3">
              <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl">
                PM-AJAY Digital Coordination & Monitoring Platform
              </h1>
              <p className="text-muted-foreground">Efficient, Transparent, Accountable • कुशल, पारदर्शी, जवाबदेह</p>
              <div className="flex items-center gap-3 pt-2">
                <Button asChild>
                  <Link href="/login">Login / लॉगिन</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about">About the Scheme / योजना के बारे में</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border bg-card">
              <img
                src="/government-portal-dashboard-illustration.jpg"
                alt="Illustration of a government dashboard"
                className="h-full w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="mx-auto max-w-6xl px-4">
        <NewsTicker />
      </section>

      {/* Quick Links */}
      <section className="mx-auto max-w-6xl px-4">
        <QuickLinks />
      </section>

      {/* Snapshot Dashboard */}
      <section className="mx-auto max-w-6xl px-4">
        <Card>
          <CardHeader>
            <CardTitle>Snapshot Dashboard • त्वरित झलक</CardTitle>
          </CardHeader>
          <CardContent>
            <SnapshotCards />
          </CardContent>
        </Card>
      </section>

      {/* Stakeholder CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <Card>
          <CardContent className="flex flex-col items-start gap-4 py-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-medium">Stakeholder Access • हितधारक प्रवेश</h3>
              <p className="text-sm text-muted-foreground">Centre • State/UT • Executing Agency • Auditor</p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/login">Proceed to Login / लॉगिन करें</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Helpdesk / हेल्पडेस्क</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
