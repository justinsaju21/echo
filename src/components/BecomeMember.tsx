"use client";

import { motion } from "framer-motion";
import { Server, Zap, Code, Shield, Terminal, ZapIcon } from "lucide-react";

const perks = [
    {
        title: "Hands-on Production",
        description: "Learn by shipping to real users, not just local repos.",
        icon: <Code className="w-5 h-5" />,
    },
    {
        title: "Infra Privileges",
        description: "Direct access to our servers and staging environments.",
        icon: <Server className="w-5 h-5" />,
    },
    {
        title: "Technical Autonomy",
        description: "Deicde the stack, own the architecture, run the system.",
        icon: <Terminal className="w-5 h-5" />,
    },
];

export function BecomeMember() {
    return (
        <section id="membership" className="py-24 bg-black border-t border-zinc-900">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Impactful Headline */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 uppercase tracking-wider">
                            <ZapIcon size={12} className="fill-current" /> Membership
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
                            Build for the<br />
                            <span className="text-blue-500">Real World.</span>
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
                            Stop building for yourself. Start building the digital backbone of the department alongside a team of elite developers.
                        </p>
                    </motion.div>

                    {/* Right Side: Sleek Grid */}
                    <div className="grid gap-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {perks.map((perk, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-all group"
                                >
                                    <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                                        {perk.icon}
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">{perk.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-snug">{perk.description}</p>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="p-6 rounded-2xl bg-blue-600 border border-blue-500 flex flex-col justify-end group cursor-pointer"
                            >
                                <h3 className="text-white font-bold text-lg mb-1">Join Echo</h3>
                                <p className="text-blue-100 text-sm">Apply for our current intake.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Footer: Philosophy - Clean and Airy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-12 border-t border-zinc-900 grid md:grid-cols-3 gap-8"
                >
                    <div className="flex gap-4">
                        <Shield className="w-5 h-5 text-zinc-600 shrink-0" />
                        <div>
                            <h4 className="text-zinc-300 font-medium text-sm mb-1">Ownership First</h4>
                            <p className="text-zinc-500 text-xs">We don't just write code; we own the uptime.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Zap className="w-5 h-5 text-zinc-600 shrink-0" />
                        <div>
                            <h4 className="text-zinc-300 font-medium text-sm mb-1">Agile Sprints</h4>
                            <p className="text-zinc-500 text-xs">Work in technical pulses that deliver real value.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Code className="w-5 h-5 text-zinc-600 shrink-0" />
                        <div>
                            <h4 className="text-zinc-300 font-medium text-sm mb-1">Production Quality</h4>
                            <p className="text-zinc-500 text-xs">Documentation and testing aren't optional.</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
