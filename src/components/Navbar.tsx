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
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500">
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "pointer-events-auto transition-all duration-500 ease-in-out relative overflow-hidden",
                    scrolled
                        ? "mt-4 w-[98%] max-w-[1400px] rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl px-2"
                        : "w-full bg-transparent border-transparent px-6 md:px-12"
                )}
            >
                <div className="flex items-center justify-between py-5 max-w-7xl mx-auto">
                    {/* Logo with Magnetic effect */}
                    <Magnetic>
                        <Link href="/" className="font-bold text-2xl tracking-tight text-white hover:opacity-80 transition-opacity shrink-0">
                            ECHO
                        </Link>
                    </Magnetic>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-10 text-sm font-medium text-zinc-400 items-center">
                        <Link href="#about" className="hover:text-white transition-colors whitespace-nowrap">About</Link>
                        <Link href="#membership" className="hover:text-white transition-colors whitespace-nowrap">Membership</Link>
                        <Link href="#domains" className="hover:text-white transition-colors whitespace-nowrap">Domains</Link>
                        <Link href="#faq" className="hover:text-white transition-colors whitespace-nowrap">FAQ</Link>
                        <Magnetic>
                            <Link href="/apply" className="px-6 py-2.5 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors whitespace-nowrap">
                                Apply to Join
                            </Link>
                        </Magnetic>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-400 hover:text-white ml-auto">
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
                            className="md:hidden relative border-t border-white/10 bg-black"
                        >
                            <div className="flex flex-col p-6 gap-6 text-sm font-medium text-zinc-400">
                                <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-white block">About</Link>
                                <Link href="#membership" onClick={() => setIsOpen(false)} className="hover:text-white block">Membership</Link>
                                <Link href="#domains" onClick={() => setIsOpen(false)} className="hover:text-white block">Domains</Link>
                                <Link href="#faq" onClick={() => setIsOpen(false)} className="hover:text-white block">FAQ</Link>
                                <Link href="/apply" onClick={() => setIsOpen(false)} className="text-white block font-semibold">Apply to Join</Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
