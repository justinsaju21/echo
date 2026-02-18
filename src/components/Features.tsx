"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const projects = [
    "Department digital platforms",
    "Project and data management systems",
    "Faculty and lab web infrastructure",
    "Hosting and deployment pipelines",
    "Internal automation tools",
    "Structured documentation systems"
];

const gains = [
    "Experience working on production platforms",
    "Direct involvement in departmental operations",
    "Real development and deployment workflow",
    "Core system leadership opportunities",
    "A defining institutional role",
    "Mentorship and technical career guidance"
];

export function Features() {
    return (
        <section className="py-24 bg-black border-t border-zinc-900">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* What You Will Build */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">What You Will Build</h2>
                        <div className="space-y-4">
                            {projects.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all"
                                >
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-zinc-300 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* What You Gain */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">What You Gain</h2>
                        <div className="space-y-4">
                            {gains.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800 bg-gradient-to-r from-blue-900/10 to-transparent hover:from-blue-900/20 hover:border-zinc-700 transition-all"
                                >
                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-white font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
