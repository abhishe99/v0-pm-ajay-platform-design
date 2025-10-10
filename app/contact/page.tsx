import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Contact & Helpdesk • संपर्क एवं हेल्पडेस्क</h1>
        <p className="text-sm text-muted-foreground">Get support, submit grievances, and find regional contacts.</p>
      </header>

      {/* Contact form */}
      <Card>
        <CardHeader>
          <CardTitle>Submit Query / Grievance • प्रश्न / शिकायत</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <Input placeholder="Full Name • पूरा नाम" />
          <Input placeholder="Email • ईमेल" type="email" />
          <Input placeholder="Phone • फोन" />
          <Input placeholder="State/UT • राज्य/केंद्रशासित प्रदेश" />
          <div className="md:col-span-2">
            <Textarea rows={6} placeholder="Message • संदेश" />
          </div>
          <div className="md:col-span-2">
            <Button>Submit • सबमिट</Button>
          </div>
        </CardContent>
      </Card>

      {/* Helpdesk */}
      <Card>
        <CardHeader>
          <CardTitle>Helpdesk • हेल्पडेस्क</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 text-sm">
          <p>Toll-free • टोल-फ्री: 1800-123-456</p>
          <p>Email • ईमेल: helpdesk@pm-ajay.gov.in</p>
          <p>Regional Offices • क्षेत्रीय कार्यालय: Mumbai, Bengaluru, Ahmedabad, Lucknow</p>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>FAQ • अक्सर पूछे जाने वाले प्रश्न</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="f1">
              <AccordionTrigger>How to register as an official?</AccordionTrigger>
              <AccordionContent>Use Register tab on Login page and verify via official email.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="f2">
              <AccordionTrigger>Where to view fund releases?</AccordionTrigger>
              <AccordionContent>Visit Fund Flow & Approvals page for timelines and breakdowns.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
