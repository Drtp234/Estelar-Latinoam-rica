"use client"

import { useEffect, useState } from "react"

interface TerminalLine {
  text: string
  type: "normal" | "success" | "warning" | "error" | "info"
  delay: number
}

const terminalSequence: TerminalLine[] = [
  { text: "> Initializing penetration framework...", type: "info", delay: 500 },
  { text: "> Loading exploit modules... [OK]", type: "success", delay: 800 },
  { text: "> Establishing secure tunnel... [OK]", type: "success", delay: 1200 },
  { text: "", type: "normal", delay: 1400 },
  { text: "> Starting network reconnaissance...", type: "info", delay: 1600 },
  { text: "> Scanning target: 192.168.1.1", type: "normal", delay: 2000 },
  { text: "  [*] Port 22/tcp   open   ssh", type: "normal", delay: 2300 },
  { text: "  [*] Port 80/tcp   open   http", type: "normal", delay: 2500 },
  { text: "  [*] Port 443/tcp  open   https", type: "normal", delay: 2700 },
  { text: "  [*] Port 3306/tcp open   mysql", type: "warning", delay: 2900 },
  { text: "", type: "normal", delay: 3100 },
  { text: "> Analyzing vulnerabilities...", type: "info", delay: 3300 },
  { text: "  [!] CVE-2024-3094 detected", type: "warning", delay: 3800 },
  { text: "  [!] Weak SSL configuration found", type: "warning", delay: 4100 },
  { text: "  [!] Default credentials detected", type: "warning", delay: 4400 },
  { text: "", type: "normal", delay: 4600 },
  { text: "> Attempting authentication bypass...", type: "info", delay: 4800 },
  { text: "  [*] Testing SQL injection vectors...", type: "normal", delay: 5300 },
  { text: "  [*] Payload: ' OR '1'='1' --", type: "normal", delay: 5800 },
  { text: "  [+] Authentication bypassed!", type: "success", delay: 6500 },
  { text: "", type: "normal", delay: 6700 },
  { text: "> Escalating privileges...", type: "info", delay: 6900 },
  { text: "  [*] Exploiting kernel vulnerability...", type: "normal", delay: 7400 },
  { text: "  [+] Root access obtained!", type: "success", delay: 8200 },
  { text: "", type: "normal", delay: 8400 },
  { text: "> Extracting sensitive data...", type: "info", delay: 8600 },
  { text: "  [*] /etc/passwd", type: "normal", delay: 9000 },
  { text: "  [*] /etc/shadow", type: "normal", delay: 9200 },
  { text: "  [*] /var/www/config/database.php", type: "normal", delay: 9400 },
  { text: "  [*] /home/admin/.ssh/id_rsa", type: "normal", delay: 9600 },
  { text: "  [+] 2,847 files extracted", type: "success", delay: 10200 },
  { text: "", type: "normal", delay: 10400 },
  { text: "> Installing backdoor...", type: "info", delay: 10600 },
  { text: "  [*] Deploying persistent access module...", type: "normal", delay: 11100 },
  { text: "  [+] Backdoor installed at port 4444", type: "success", delay: 11800 },
  { text: "", type: "normal", delay: 12000 },
  { text: "> Clearing traces...", type: "info", delay: 12200 },
  { text: "  [*] Wiping system logs...", type: "normal", delay: 12600 },
  { text: "  [*] Removing command history...", type: "normal", delay: 12900 },
  { text: "  [+] All traces removed", type: "success", delay: 13400 },
  { text: "", type: "normal", delay: 13600 },
  { text: "═══════════════════════════════════════", type: "success", delay: 13800 },
  { text: "  PENETRATION COMPLETE", type: "success", delay: 14000 },
  { text: "  System compromised successfully", type: "success", delay: 14200 },
  { text: "  Full access maintained", type: "success", delay: 14400 },
  { text: "═══════════════════════════════════════", type: "success", delay: 14600 },
]

export function TerminalOutput({ started }: { started: boolean }) {
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!started) return

    if (currentIndex < terminalSequence.length) {
      const currentLine = terminalSequence[currentIndex]
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, currentLine])
        setCurrentIndex((prev) => prev + 1)
      }, currentLine.delay)

      return () => clearTimeout(timer)
    }
  }, [started, currentIndex])

  const getLineColor = (type: TerminalLine["type"]) => {
    switch (type) {
      case "success":
        return "text-primary"
      case "warning":
        return "text-yellow-400"
      case "error":
        return "text-red-400"
      case "info":
        return "text-secondary"
      default:
        return "text-foreground/80"
    }
  }

  return (
    <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4 h-[calc(100vh-12rem)] overflow-y-auto font-mono text-sm">
      {!started && (
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>Initializing</span>
          <span className="cursor-blink">_</span>
        </div>
      )}

      {lines.map((line, index) => (
        <div key={index} className={`${getLineColor(line.type)} leading-relaxed`}>
          {line.text || "\u00A0"}
        </div>
      ))}

      {started && currentIndex < terminalSequence.length && <span className="cursor-blink text-primary">█</span>}
    </div>
  )
}
