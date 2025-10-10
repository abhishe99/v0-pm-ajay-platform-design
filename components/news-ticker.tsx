"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

const ITEMS = [
  "Release Order dated 10 Oct published.",
  "New reporting templates (v1.2) available.",
  "PFMS synchronization scheduled maintenance this weekend.",
  "Q2 performance review meeting on 25 Oct.",
]

export function NewsTicker() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // no-op placeholder for future enhancements
  }, [])

  return (
    <Card>
      <div
        ref={containerRef}
        className="relative flex overflow-x-auto whitespace-nowrap p-3 text-sm"
        aria-live="polite"
        role="status"
      >
        {ITEMS.map((t, i) => (
          <span key={i} className="mr-6">
            • {t}
          </span>
        ))}
      </div>
    </Card>
  )
}
