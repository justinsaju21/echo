"use client";
import { motion } from "framer-motion";
import { Target, Zap, Shield } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-32 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* What is ECHO */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="w-12 h-1 bg-blue-600 mb-8" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Built for <br /> <span className="text-zinc-500">Continuity.</span>
                        </h2>
                        <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                            ECHO is the official student technical council responsible for:
                        </p>
                        <ul className="space-y-3 text-zinc-300 mb-8">
                            {[
                                "Department websites and web platforms",
                                "Hosting and deployment infrastructure",
                                "Internal digital systems",
                                "Long-term platform maintenance"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {item}
                                </motion.li>
                            ))}
                        </ul>
                        <p className="text-zinc-400 border-l-2 border-zinc-800 pl-4">
                            Every project under ECHO is built for real users, real operations, and long-term continuity.
                        </p>
                    </motion.div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ y: -5 }}
                                className="p-6 bg-zinc-900 border border-white/5 rounded-2xl"
                            >
                                <Target className="w-8 h-8 text-white mb-4" />
                                <h4 className="text-white font-medium mb-2">Student Driven</h4>
                                <p className="text-sm text-zinc-500">Managed entirely by students for the department.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ y: -5 }}
                                className="p-6 bg-zinc-900 border border-white/5 rounded-2xl mt-8"
                            >
                                <Zap className="w-8 h-8 text-white mb-4" />
                                <h4 className="text-white font-medium mb-2">Production Ready</h4>
                                <p className="text-sm text-zinc-500">Systems that handle real traffic and data.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                whileHover={{ y: -5 }}
                                className="col-span-2 p-6 bg-zinc-900 border border-white/5 rounded-2xl"
                            >
                                <Shield className="w-8 h-8 text-white mb-4" />
                                <h4 className="text-white font-medium mb-2">Future Proof</h4>
                                <p className="text-sm text-zinc-500">Techstacks chosen for scalability and longevity.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Why ECHO Exists (Centered) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-32"
                >
                    <h3 className="text-2xl font-semibold text-white mb-4">Why ECHO Exists</h3>
                    <p className="text-xl text-zinc-400 leading-relaxed font-light">
                        "Departments run on digital systems. Those systems must be reliable, scalable, and continuously maintained.
                        <span className="text-white font-normal block mt-4">ECHO ensures the digital ecosystem of ECE is student-driven, professionally built, and future-ready."</span>
                    </p>
                </motion.div>

                {/* What Makes ECHO Different */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-16">
                    <div className="md:flex justify-between items-start gap-12">
                        <div className="flex-1 mb-8 md:mb-0">
                            <h3 className="text-3xl font-bold text-white mb-4">Not just a Club. <br />A Council.</h3>
                            <p className="text-zinc-400 mb-6">
                                Members of ECHO do not attend sessions to "learn". They learn by shipping code.
                            </p>
                            <div className="inline-block px-4 py-2 bg-blue-900/20 text-blue-300 rounded-lg text-sm font-medium">
                                Builder's Council
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center shrink-0">1</div>
                                <div>
                                    <h4 className="text-white font-medium">Work on live platforms</h4>
                                    <p className="text-sm text-zinc-500 mt-1">Direct access to deployment pipelines.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center shrink-0">2</div>
                                <div>
                                    <h4 className="text-white font-medium">Make technical decisions</h4>
                                    <p className="text-sm text-zinc-500 mt-1">Choose the stack, design the DB, own the architecture.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center shrink-0">3</div>
                                <div>
                                    <h4 className="text-white font-medium">Take ownership</h4>
                                    <p className="text-sm text-zinc-500 mt-1">You are responsible for the uptime and security.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
