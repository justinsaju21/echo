"use client";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function WhoShouldApply() {
    return (
        <section className="py-24 bg-zinc-950 border-t border-zinc-900">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Selection Philosophy */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                    >
                        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="inline-block px-3 py-1 bg-blue-900/20 text-blue-400 rounded-full text-sm font-medium mb-6">
                            Selection Philosophy
                        </motion.div>
                        <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-3xl md:text-4xl font-bold text-white mb-6">
                            We are not selecting based only on experience.
                        </motion.h2>
                        <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-xl text-zinc-400 mb-8 leading-relaxed">
                            We are selecting <span className="text-white font-medium">builders</span>, <span className="text-white font-medium">problem solvers</span>, and <span className="text-white font-medium">long-term contributors</span>.
                        </motion.p>

                        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="space-y-4">
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="text-green-500 w-6 h-6" />
                                <span className="text-zinc-300">Consistent and committed</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="text-green-500 w-6 h-6" />
                                <span className="text-zinc-300">Takes ownership of tasks</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="text-green-500 w-6 h-6" />
                                <span className="text-zinc-300">Wants to build real systems</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Who Should Apply Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 md:p-12 bg-zinc-900 rounded-3xl border border-zinc-800 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500">
                            <CheckCircle2 className="w-40 h-40 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-6">Ideally, you are:</h3>
                        <ul className="space-y-4 mb-8 relative z-10">
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                <span className="text-zinc-300">A student who wants to build production-grade software.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                <span className="text-zinc-300">Someone who can take vague requirements and deliver a working feature.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                <span className="text-zinc-300">Willing to maintain code long after it is written.</span>
                            </li>
                        </ul>

                        <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                            <p className="text-sm text-zinc-400 text-center">
                                <span className="text-white block font-medium mb-1">No prior experience is mandatory.</span>
                                Ownership, learning ability, and commitment matter most.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
