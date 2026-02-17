"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Terminal } from "@/components/Terminal";

export function Hero() {
    return (
        <section className="relative min-h-[110vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Grid & Mask */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] -z-20" />

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50" />

            <div className="container mx-auto px-6 text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-blue-300 font-medium mb-6 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        ECE Council for Hosting and Operations
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.8]">
                        <motion.span
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                            className="inline-block"
                        >
                            {"ECHO".split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: 0 }}
                                    animate={{ y: [-15, 0, -15] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.2
                                    }}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="max-w-xl mx-auto text-lg md:text-2xl text-zinc-400 mb-8 font-light leading-relaxed"
                    >
                        Powering the <span className="text-white font-medium">digital backbone</span> of the department.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="max-w-md mx-auto text-sm text-zinc-500 mb-10"
                    >
                        We design, build, deploy, and maintain the platforms that run ECE.
                        <br />
                        <span className="text-zinc-300 font-medium">A working technical council.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="flex flex-col items-center gap-12"
                    >
                        <Link
                            href="/apply"
                            className="group px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2"
                        >
                            Apply for Membership <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <div className="w-full max-w-2xl px-4">
                            <Terminal />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}
