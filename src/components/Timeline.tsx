"use client";

import { motion } from "framer-motion";
import { ClipboardList, Code, Users, Star } from "lucide-react";

const steps = [
    {
        title: "Application",
        description: "Submit your technical profile and project history.",
        icon: <ClipboardList className="w-5 h-5" />,
        date: "Phase 01"
    },
    {
        title: "Technical Task",
        description: "A 48-hour challenge to build a specific feature/component.",
        icon: <Code className="w-5 h-5" />,
        date: "Phase 02"
    },
    {
        title: "The Pitch",
        description: "A deep-dive discussion about your task and technical approach.",
        icon: <Users className="w-5 h-5" />,
        date: "Phase 03"
    },
    {
        title: "Onboarding",
        description: "Final selection and integration into the core technical team.",
        icon: <Star className="w-5 h-5" />,
        date: "Phase 04"
    }
];

export function Timeline() {
    return (
        <section id="process" className="py-24 bg-black border-t border-zinc-900">
            <div className="container mx-auto px-6 max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selection Process</h2>
                    <p className="text-zinc-500">How we find our next generation of builders.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Connector Line (Desktop) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-zinc-800 -z-10 group-hover:bg-blue-500/30 transition-colors" />
                            )}

                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-6 group-hover:text-blue-500 group-hover:border-blue-500 group-hover:bg-blue-500/5 transition-all duration-300">
                                    {step.icon}
                                </div>

                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-500 mb-2 font-bold">
                                    {step.date}
                                </span>
                                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                                <p className="text-zinc-500 text-xs text-center leading-relaxed px-4">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 text-center">
                    <p className="text-sm text-zinc-400 italic">
                        Values we look for: <span className="text-zinc-200">Ownership, Technical Hunger, and Consistency.</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
