"use client";
import { motion } from "framer-motion";
import { Code2, Server, Globe, PenTool, BookOpen, Search, Radio, Database } from "lucide-react";

const domains = [
    {
        title: "Web Development",
        icon: <Globe className="w-6 h-6" />,
        description: "Frontend architecture, user interfaces, and component systems.",
    },
    {
        title: "Backend & Systems",
        icon: <Server className="w-6 h-6" />,
        description: "API design, database management, and server-side logic.",
    },
    {
        title: "DevOps & Hosting",
        icon: <Code2 className="w-6 h-6" />,
        description: "CI/CD pipelines, cloud infrastructure, and deployment automation.",
    },
    {
        title: "UI/UX Design",
        icon: <PenTool className="w-6 h-6" />,
        description: "User research, wireframing, prototyping, and visual design.",
    },
    {
        title: "Content & Docs",
        icon: <BookOpen className="w-6 h-6" />,
        description: "Technical documentation, project narratives, and knowledge bases.",
    },
    {
        title: "Research & Innovation",
        icon: <Search className="w-6 h-6" />,
        description: "Exploring new tech stacks, R&D, and experimental projects.",
    },
    {
        title: "Operations & Projects",
        icon: <Radio className="w-6 h-6" />,
        description: "Project management, agile workflows, and team coordination.",
    },
    {
        title: "Cybersecurity & NetSec",
        icon: <Database className="w-6 h-6" />,
        description: "Securing infrastructure, managing access, and network defense.",
    },
];

export function Domains() {
    return (
        <section id="domains" className="py-24 bg-zinc-950 border-t border-zinc-900">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technical Domains</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {domains.map((domain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                            className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800/80 transition-all group cursor-default"
                        >
                            <div className="mb-4 p-3 bg-black rounded-lg w-fit group-hover:text-blue-400 transition-colors text-zinc-400">
                                {domain.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{domain.title}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">{domain.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
