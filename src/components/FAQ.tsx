"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Do I need prior experience?",
        answer: "We look for builders who have a basic grasp of programming and a hunger to learn. You don't need to be an expert—we will mentor you on system architecture, deployment, and best practices. If you love building and solving problems, you belong here."
    },
    {
        question: "What is the time commitment?",
        answer: "Expect 5-10 hours per week. This is manageable alongside your studies. We work in technical sprints, so the workload is predictable and respects your exam schedule."
    },
    {
        question: "Is this a club?",
        answer: "Primarily, ECHO is the technical council of the department. We function like a small software consultancy—we don't just host workshops, we build and maintain the systems that run ECE."
    },
    {
        question: "Can first-year students apply?",
        answer: "Absolutely. We value skill and drive over seniority. If you have the passion to build, we want you on the team regardless of your year."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-black">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/50 transition-colors"
                            >
                                <span className="text-lg font-medium text-zinc-200">{faq.question}</span>
                                {openIndex === index ?
                                    <Minus className="text-blue-500" size={20} /> :
                                    <Plus className="text-zinc-500" size={20} />
                                }
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="p-6 pt-4 text-zinc-400 leading-relaxed border-t border-zinc-900/50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
