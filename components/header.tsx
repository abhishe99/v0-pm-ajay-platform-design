"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home • गृह" },
  { href: "/about", label: "About • के बारे में" },
  { href: "/agencies", label: "Agencies • एजेंसियाँ" },
  { href: "/fund-flow", label: "Fund Flow • धन प्रवाह" },
  { href: "/projects", label: "Projects • परियोजनाएँ" },
  { href: "/analytics", label: "Analytics • विश्लेषण" },
  { href: "/contact", label: "Contact • संपर्क" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/pm-ajay-logo.jpg" alt="PM-AJAY logo" className="h-8 w-8" />
          <span className="text-sm font-semibold leading-tight">
            PM-AJAY
            <span className="block text-xs text-muted-foreground">
              Govt. Coordination Platform • सरकारी समन्वय पोर्टल
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-foreground hover:underline">
              {n.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/login">Login • लॉगिन</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu • मेन्यू
          </Button>
        </div>
      </div>
      <div id="mobile-nav" className={cn("md:hidden border-t", open ? "block" : "hidden")}>
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Button asChild size="sm" onClick={() => setOpen(false)}>
              <Link href="/login">Login • लॉगिन</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
