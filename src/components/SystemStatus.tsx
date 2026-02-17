"use client";

export function SystemStatus() {
    return (
        <div className="fixed bottom-4 left-4 z-50 hidden md:flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-zinc-400">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            All Systems Operational
        </div>
    );
}
