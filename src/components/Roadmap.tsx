"use client";
import { motion } from "framer-motion";

const milestones = [
    {
        title: "Council Formation",
        description: "Recruiting the founding 20. Establishing core governance and technical charters.",
        status: "current"
    },
    {
        title: "Infrastructure Zero",
        description: "Deploying the department's root servers, CI/CD pipelines, and internal auth systems.",
        status: "upcoming"
    },
    {
        title: "Alpha Deployments",
        description: "Launching the first batch of student-facing portals and the official department website.",
        status: "upcoming"
    },
    {
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

                <div className="relative border-l border-zinc-800 ml-6 space-y-12">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 group"
                        >
                            {/* Dot */}
                            <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border border-black ${milestone.status === 'current' ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]' : 'bg-zinc-800'}`} />

                            <div className="pb-4 border-zinc-800/50 last:border-0 pl-2">
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
