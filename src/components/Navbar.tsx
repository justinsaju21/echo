"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper for conditional classes
function cn(...inputs: (string | boolean | undefined | null | { [key: string]: boolean })[]) {
    return inputs
        .filter(Boolean)
        .map((input) => {
            if (typeof input === "object" && input !== null) {
                return Object.entries(input)
                    .filter(([_, value]) => value)
                    .map(([key]) => key)
                    .join(" ");
            }
            return input;
        })
        .join(" ");
}

import { Magnetic } from "@/components/ui/Magnetic";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "pointer-events-auto transition-all duration-300 ease-in-out relative",
                    "mt-4 md:mt-6 rounded-2xl border flex flex-col",
                    scrolled
                        ? "bg-zinc-950/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50 py-3"
                        : "bg-zinc-900/40 backdrop-blur-md border-white/5 py-4",
                    "w-[96%] max-w-7xl"
                )}
            >
                <div className="flex items-center justify-between px-6">
                    {/* Logo with Magnetic effect */}
                    <Magnetic>
                        <Link href="/" className="font-bold text-2xl tracking-tight text-white hover:opacity-80 transition-opacity shrink-0 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> ECHO
                        </Link>
                    </Magnetic>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400 items-center">
                        {["About", "Membership", "Domains", "FAQ"].map((item) => (
                            <Link key={item} href={`/#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <Magnetic>
                            <Link href="/apply" className="px-5 py-2 bg-white text-black rounded-xl font-semibold hover:bg-zinc-200 transition-colors whitespace-nowrap text-xs tracking-wide uppercase">
                                Apply Now
                            </Link>
                        </Magnetic>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-400 hover:text-white p-2">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="flex flex-col p-4 gap-2 text-sm font-medium text-zinc-400 border-t border-white/5 mt-2">
                                {["About", "Membership", "Domains", "FAQ"].map((item) => (
                                    <Link
                                        key={item}
                                        href={`/#${item.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-white hover:bg-white/5 p-3 rounded-xl transition-all"
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <Link
                                    href="/apply"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-white text-black p-3 rounded-xl font-bold text-center mt-2 hover:bg-zinc-200 transition-colors"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div >
    );
}
