"use client";
import { motion } from "framer-motion";

const milestones = [
    {
        quarter: "Q1 2024",
        title: "Council Formation",
        description: "Recruiting the founding 20. Establishing core governance and technical charters.",
        status: "current"
    },
    {
        quarter: "Q2 2024",
        title: "Infrastructure Zero",
        description: "Deploying the department's root servers, CI/CD pipelines, and internal auth systems.",
        status: "upcoming"
    },
    {
        quarter: "Q3 2024",
        title: "Alpha Deployments",
        description: "Launching the first batch of student-facing portals and the official department website.",
        status: "upcoming"
    },
    {
        quarter: "Q4 2024",
        title: "Ecosystem Expansion",
        description: "Opening API access to student developers and hosting the first internal hackathon.",
        status: "upcoming"
    }
];

export function Roadmap() {
    return (
        <section className="py-24 bg-zinc-950 border-t border-zinc-900">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Execution Roadmap</h2>
                    <p className="text-zinc-400">Our flight path for the next 12 months.</p>
                </div>

                <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 group"
                        >
                            {/* Dot */}
                            <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border border-black ${milestone.status === 'current' ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]' : 'bg-zinc-800'}`} />

                            {/* Quarter (Left on desktop) */}
                            <div className="md:col-span-1 md:text-right mb-1 md:mb-0">
                                <span className={`text-sm font-mono ${milestone.status === 'current' ? 'text-blue-400' : 'text-zinc-500'}`}>
                                    {milestone.quarter}
                                </span>
                            </div>

                            {/* Content (Right on desktop) */}
                            <div className="md:col-span-4 pb-12 md:pb-0 border-b md:border-b-0 border-zinc-800/50 last:border-0 pl-4 md:pl-8 md:border-l md:border-zinc-800 relative">
                                {/* Desktop Line Fix */}
                                <div className="hidden md:block absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border border-black bg-zinc-950 z-10" />
                                <div className={`hidden md:block absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border border-black ${milestone.status === 'current' ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]' : 'bg-zinc-800'} z-20`} />

                                <h3 className={`text-xl font-bold mb-2 ${milestone.status === 'current' ? 'text-white' : 'text-zinc-300'}`}>
                                    {milestone.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed max-w-xl">
                                    {milestone.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
