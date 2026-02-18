"use client";
import { motion } from "framer-motion";
import { Code2, Database, Server, Cpu, Globe, Terminal, Shield, Workflow } from "lucide-react";

const stack = [
    { name: "Next.js", icon: <Globe className="w-6 h-6" /> },
    { name: "TypeScript", icon: <Code2 className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Terminal className="w-6 h-6" /> },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
    { name: "Docker", icon: <Server className="w-6 h-6" /> },
    { name: "AWS", icon: <Cpu className="w-6 h-6" /> },
    { name: "GitHub Actions", icon: <Workflow className="w-6 h-6" /> },
    { name: "Auth.js", icon: <Shield className="w-6 h-6" /> },
];

export function TechStack() {
    return (
        <section id="stack" className="py-12 bg-black border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm text-zinc-500 uppercase tracking-widest">Powered by modern infrastructure</p>
            </div>

            <div className="flex relative items-center">
                <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...stack, ...stack, ...stack, ...stack].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-zinc-400 font-medium text-lg hover:text-blue-400 hover:scale-110 transition-all cursor-default">
                            <span className="text-blue-500/50">{item.icon}</span>
                            {item.name}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
