"use client"

export function TerminalHeader() {
  return (
    <div className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-primary/80" />
          </div>
          <span className="text-sm font-mono text-foreground">root@penetration-kit:~#</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="hidden sm:inline">SESSION: {new Date().toISOString().split("T")[0]}</span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            ACTIVE
          </span>
        </div>
      </div>
    </div>
  )
}
