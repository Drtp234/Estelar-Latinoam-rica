"use client"

import { useEffect, useState } from "react"
import { TerminalHeader } from "@/components/terminal-header"
import { TerminalOutput } from "@/components/terminal-output"
import { MatrixBackground } from "@/components/matrix-background"
import { SystemStats } from "@/components/system-stats"

export default function Home() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    // Auto-start after 1 second
    const timer = setTimeout(() => {
      setStarted(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <MatrixBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <TerminalHeader />

        <div className="flex-1 flex flex-col lg:flex-row gap-4 p-4">
          <div className="flex-1">
            <TerminalOutput started={started} />
          </div>

          <div className="lg:w-80">
            <SystemStats started={started} />
          </div>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="scan-line absolute left-0 w-full h-0.5 bg-primary/30 pointer-events-none z-20" />
    </main>
  )
}
