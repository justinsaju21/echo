"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
    { text: "echo \"Initializing ECHO Council...\"", cmd: true },
    { text: "Loading modules...", cmd: false },
    { text: "   > cloud_infrastructure... [OK]", cmd: false },
    { text: "   > devops_pipeline... [OK]", cmd: false },
    { text: "   > student_leadership... [OK]", cmd: false },
    { text: "npm install selection-process", cmd: true },
    { text: "Searching for builders...", cmd: false },
    { text: "Found: You?", cmd: false, highlight: true }
];

export function Terminal() {
    const [visibleLines, setVisibleLines] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleLines(prev => {
                if (prev < lines.length) return prev + 1;
                clearInterval(interval);
                return prev;
            });
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="w-full max-w-lg mx-auto bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-2xl font-mono text-xs md:text-sm text-left relative z-20 group hover:border-zinc-700 transition-colors"
        >
            {/* Window Controls */}
            <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-auto text-zinc-600 text-xs">term-1</div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2 h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/20 pointer-events-none" />

                {lines.slice(0, visibleLines).map((line, i) => (
                    <div key={i} className={`${line.highlight ? 'text-blue-400' : 'text-zinc-400'}`}>
                        {line.cmd && <span className="text-green-500 mr-2">$</span>}
                        {line.text}
                    </div>
                ))}

                <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-zinc-500 inline-block align-middle ml-1"
                />
            </div>
        </motion.div>
    );
}
