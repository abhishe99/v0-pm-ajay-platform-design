import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CommunicationPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Communication & Collaboration • संचार एवं सहयोग</h1>
        <p className="text-sm text-muted-foreground">Messages, circulars, FAQs, reminders, and a download center.</p>
      </header>

      {/* Messaging center */}
      <Card>
        <CardHeader>
          <CardTitle>Message Center • संदेश केंद्र</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <Input placeholder="Search conversations • वार्तालाप खोजें" />
            <div className="h-56 overflow-auto rounded-md border p-3 text-sm">
              <div className="mb-2 font-medium">Centre ⇄ State (KA)</div>
              <p className="text-muted-foreground">Requesting status update on Hostel Block A.</p>
              <hr className="my-3" />
              <div className="mb-2 font-medium">Centre ⇄ Agency (MH)</div>
              <p className="text-muted-foreground">Please upload milestone documents by 15th.</p>
            </div>
          </div>
          <div className="space-y-3">
            <Textarea rows={8} placeholder="Type message • संदेश लिखें" />
            <div className="flex gap-2">
              <Button>Send • भेजें</Button>
              <Button variant="outline">Attach • संलग्न करें</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Circulars / FAQs / Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Circulars • परिपत्र | FAQs • प्रश्नोत्तर | Guidelines • दिशानिर्देश</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="c1">
              <AccordionTrigger>Reporting Formats (v1.2)</AccordionTrigger>
              <AccordionContent>Download the latest reporting templates from the Download Center.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="c2">
              <AccordionTrigger>FAQ: PFMS Reconciliation</AccordionTrigger>
              <AccordionContent>Ensure all sanctions are mapped to agency CANS for visibility.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Download Center */}
      <Card>
        <CardHeader>
          <CardTitle>Download Center • डाउनलोड</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          <Button variant="outline">Reporting Template (Excel)</Button>
          <Button variant="outline">Sanction Order Format (PDF)</Button>
          <Button variant="outline">Agency Onboarding Kit (PDF)</Button>
        </CardContent>
      </Card>
    </div>
  )
}
