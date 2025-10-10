"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Secure Access • सुरक्षित प्रवेश</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login • लॉगिन</TabsTrigger>
              <TabsTrigger value="register">Register • पंजीकरण</TabsTrigger>
            </TabsList>

            {/* Login */}
            <TabsContent value="login" className="space-y-4">
              <div className="grid gap-3">
                <Label>Username • उपयोगकर्ता नाम</Label>
                <Input placeholder="Enter username" />
              </div>
              <div className="grid gap-3">
                <Label>Password • पासवर्ड</Label>
                <Input type="password" placeholder="Enter password" />
              </div>
              <div className="grid gap-3">
                <Label>2FA Code • द्वि-कारक कोड</Label>
                <Input placeholder="One-time code" />
              </div>
              <Button className="w-full">Sign In • साइन इन</Button>
              <div className="text-center text-sm">
                <Link className="text-primary underline" href="/contact">
                  Forgot Password? • पासवर्ड भूल गए?
                </Link>
              </div>
            </TabsContent>

            {/* Register */}
            <TabsContent value="register" className="space-y-4">
              <div className="grid gap-3">
                <Label>Role • भूमिका</Label>
                <Input placeholder="Centre / State/UT / Agency / Auditor" />
              </div>
              <div className="grid gap-3">
                <Label>Official Email • आधिकारिक ईमेल</Label>
                <Input type="email" placeholder="name@gov.in" />
              </div>
              <div className="grid gap-3">
                <Label>Password • पासवर्ड</Label>
                <Input type="password" placeholder="Create password" />
              </div>
              <Button className="w-full">Register • पंजीकृत करें</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="justify-center text-xs text-muted-foreground">
          NIC/GOI-standard security compliance • एनआईसी/जीओआई मानक सुरक्षा अनुपालन
        </CardFooter>
      </Card>
    </div>
  )
}
