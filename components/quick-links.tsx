import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Landmark, School } from "lucide-react"

export function QuickLinks() {
  const links = [
    {
      href: "/agencies?component=Adarsh%20Gram",
      title: "Adarsh Gram • आदर्श ग्राम",
      Icon: Landmark,
      desc: "Village development component",
    },
    { href: "/agencies?component=GIA", title: "GIA • अनुदान सहायता", Icon: Building2, desc: "Grant-in-aid workflows" },
    { href: "/agencies?component=Hostel", title: "Hostel • छात्रावास", Icon: School, desc: "Hostel infrastructure" },
  ]
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {links.map(({ href, title, Icon, desc }) => (
        <Link key={href} href={href}>
          <Card className="h-full transition hover:shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" aria-hidden="true" />
                <CardTitle className="text-base">{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
