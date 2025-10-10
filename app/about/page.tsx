import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <header className="space-y-2">
        <h1 className="text-balance text-3xl font-semibold">About PM-AJAY • योजना के बारे में</h1>
        <p className="text-muted-foreground">
          An overview of the scheme, objectives, components, and coordination flow. • योजना, उद्देश्यों, घटकों और समन्वय
          प्रक्रिया का विवरण।
        </p>
      </header>

      {/* Introduction */}
      <section className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Introduction • परिचय</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              PM-AJAY enhances coordination between Centre, States/UTs, and implementing agencies to deliver efficient,
              transparent, and accountable outcomes.
            </p>
            <p className="text-muted-foreground">
              यह प्लेटफ़ॉर्म केंद्र, राज्यों/केंद्रशासित प्रदेशों और एजेंसियों के बीच समन्वय को बेहतर बनाता है ताकि कुशल, पारदर्शी और जवाबदेह
              परिणाम सुनिश्चित किए जा सकें।
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Objectives • उद्देश्य</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc pl-5">
              <li>Unified monitoring dashboard • एकीकृत निगरानी पटल</li>
              <li>Real-time fund flow • वास्तविक समय धन प्रवाह</li>
              <li>Project tracking & accountability • परियोजना ट्रैकिंग और जवाबदेही</li>
              <li>Data-driven policy insights • डाटा आधारित नीतिगत अंतर्दृष्टि</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Components */}
      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Adarsh Gram • आदर्श ग्राम</CardTitle>
          </CardHeader>
          <CardContent>Village-level development initiatives with standardized milestones.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>GIA • अनुदान सहायता</CardTitle>
          </CardHeader>
          <CardContent>Grant-in-aid processes with transparent approvals and utilization.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hostel • छात्रावास</CardTitle>
          </CardHeader>
          <CardContent>Infrastructure development for hostels with quality and safety norms.</CardContent>
        </Card>
      </section>

      {/* Infographic / Flowchart */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Coordination Flow • समन्वय प्रवाह</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/centre-state-agencies-flowchart.jpg"
              alt="Flowchart showing Centre, State, and Agencies interaction"
              className="w-full rounded-md border"
            />
            <p className="mt-2 text-sm text-muted-foreground">
              Visual representation of information and fund movement across stakeholders.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Policy Notes • नीतिगत टिप्पणी</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Standardized reporting formats and timelines ensure comparability across states.</p>
            <p>Data validations and audit trails guarantee accountability.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
