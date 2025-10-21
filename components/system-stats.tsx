"use client"

import { useEffect, useState } from "react"

export function SystemStats({ started }: { started: boolean }) {
  const [cpu, setCpu] = useState(0)
  const [memory, setMemory] = useState(0)
  const [network, setNetwork] = useState(0)
  const [packets, setPackets] = useState(0)

  useEffect(() => {
    if (!started) return

    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 40) + 60)
      setMemory(Math.floor(Math.random() * 30) + 65)
      setNetwork(Math.floor(Math.random() * 50) + 40)
      setPackets((prev) => prev + Math.floor(Math.random() * 100) + 50)
    }, 1000)

    return () => clearInterval(interval)
  }, [started])

  return (
    <div className="space-y-4">
      {/* System Info */}
      <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4">
        <h3 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">System Status</h3>
        <div className="space-y-3 text-xs">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-muted-foreground">CPU Usage</span>
              <span className="text-foreground font-mono">{cpu}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all duration-500" style={{ width: `${cpu}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-muted-foreground">Memory</span>
              <span className="text-foreground font-mono">{memory}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-secondary transition-all duration-500" style={{ width: `${memory}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-muted-foreground">Network</span>
              <span className="text-foreground font-mono">{network}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all duration-500" style={{ width: `${network}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Target Info */}
      <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4">
        <h3 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Target Information</h3>
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between">
            <span className="text-muted-foreground">IP Address:</span>
            <span className="text-foreground">192.168.1.1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">OS:</span>
            <span className="text-foreground">Linux 5.15</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Open Ports:</span>
            <span className="text-foreground">4</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Vulnerabilities:</span>
            <span className="text-yellow-400">3 High</span>
          </div>
        </div>
      </div>

      {/* Network Activity */}
      <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4">
        <h3 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Network Activity</h3>
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Packets Sent:</span>
            <span className="text-foreground">{packets.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Protocol:</span>
            <span className="text-foreground">TCP/IP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Encryption:</span>
            <span className="text-primary">AES-256</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Status:</span>
            <span className="text-primary flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Connected
            </span>
          </div>
        </div>
      </div>

      {/* Exploit Status */}
      <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4">
        <h3 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Exploit Status</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-foreground">SQL Injection</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-foreground">Privilege Escalation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-foreground">Backdoor Deployment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-muted-foreground" />
            <span className="text-muted-foreground">Lateral Movement</span>
          </div>
        </div>
      </div>
    </div>
  )
}
