import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
// actually, let's use normal links with the global scroll-margin-top we just added.

export default function LegalPage() {
    const sections = [
        { id: "copyright", title: "Copyright Policy" },
        { id: "privacy", title: "Privacy Policy" },
        { id: "terms", title: "Terms of Use" },
        { id: "disclaimer", title: "Recruitment Disclaimer" },
    ];

    return (
        <main className="bg-zinc-950 min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-7xl">

                <Reveal width="100%">
                    <div className="grid md:grid-cols-[250px_1fr] gap-12 lg:gap-24">

                        {/* Sidebar Navigation */}
                        <aside className="hidden md:block">
                            <div className="sticky top-32 space-y-8">
                                <div>
                                    <h3 className="font-bold text-white mb-4 px-3">Legal Center</h3>
                                    <nav className="space-y-1">
                                        {sections.map((section) => (
                                            <a
                                                key={section.id}
                                                href={`#${section.id}`}
                                                className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                            >
                                                {section.title}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <div className="px-3">
                                    <p className="text-xs text-zinc-500">
                                        Last updated: February 2026
                                    </p>
                                </div>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <div className="space-y-20">
                            <div className="border-b border-zinc-800 pb-10">
                                <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                                    Policies & <span className="text-blue-500">Terms</span>
                                </h1>
                                <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                                    Transparency is key to our operations. Below are the official policies governing the ECHO recruitment platform and digital ecosystem.
                                </p>
                            </div>

                            {/* Copyright */}
                            <section id="copyright" className="scroll-mt-32">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-blue-500">01.</span> Copyright Policy
                                </h2>
                                <div className="prose prose-invert prose-zinc max-w-none">
                                    <p className="text-zinc-400 leading-relaxed mb-4">
                                        &copy; 2026 ECHO – ECE Council for Hosting and Operations, Department of Electronics and Communication Engineering, SRM Institute of Science and Technology. All rights reserved.
                                    </p>
                                    <p className="text-zinc-400 leading-relaxed">
                                        All content on this website, including text, layout, design, graphics, and digital assets, is created for the official activities of ECHO. Unauthorized copying, reproduction, or redistribution in any form without permission is not permitted.
                                    </p>
                                </div>
                            </section>

                            {/* Privacy */}
                            <section id="privacy" className="scroll-mt-32 border-t border-zinc-900 pt-20">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-blue-500">02.</span> Privacy Policy
                                </h2>
                                <div className="prose prose-invert prose-zinc max-w-none space-y-4">
                                    <p className="text-zinc-400 leading-relaxed">
                                        ECHO – ECE Council for Hosting and Operations respects the privacy of all applicants and visitors to this website.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-zinc-400 marker:text-zinc-600">
                                        <li>Information submitted through the application form is collected only for recruitment, evaluation, communication, and internal organizational purposes.</li>
                                        <li>The information collected may include personal and academic details, domain preferences, experience, and portfolio links.</li>
                                        <li>All data is stored in secured and access-controlled systems and is used only by the authorized selection and administrative team of ECHO.</li>
                                        <li>The collected information will not be sold, publicly disclosed, or shared with external individuals or organizations.</li>
                                    </ul>
                                    <p className="text-zinc-400 leading-relaxed bg-blue-900/10 border border-blue-500/20 p-4 rounded-xl mt-4">
                                        By submitting the application form, the applicant consents to the use of the provided information for the selection process and internal communication.
                                    </p>
                                </div>
                            </section>

                            {/* Terms */}
                            <section id="terms" className="scroll-mt-32 border-t border-zinc-900 pt-20">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-blue-500">03.</span> Terms of Use
                                </h2>
                                <div className="prose prose-invert prose-zinc max-w-none space-y-4">
                                    <p className="text-zinc-400 leading-relaxed">
                                        This website serves as the official platform for information, recruitment, and activities related to ECHO – ECE Council for Hosting and Operations.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                                            <h4 className="text-white font-medium mb-2">Permitted Use</h4>
                                            <p className="text-sm text-zinc-500">By accessing this website, users agree to use the content only for legitimate informational and application purposes.</p>
                                        </div>
                                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                                            <h4 className="text-white font-medium mb-2">Prohibited Acts</h4>
                                            <p className="text-sm text-zinc-500">Users shall not attempt to disrupt the functionality of the website, manipulate submitted data, or misuse any part of the platform.</p>
                                        </div>
                                    </div>
                                    <p className="text-zinc-400 leading-relaxed mt-4">
                                        All structural decisions, recruitment processes, role assignments, and organizational changes are carried out in accordance with the internal governance of ECHO and the department. The content of the website may be updated or modified at any time as the council evolves.
                                    </p>
                                </div>
                            </section>

                            {/* Disclaimer */}
                            <section id="disclaimer" className="scroll-mt-32 border-t border-zinc-900 pt-20">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-blue-500">04.</span> Recruitment Disclaimer
                                </h2>
                                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                                    <p className="text-lg text-white font-medium mb-4">
                                        Submission of an application does not guarantee selection.
                                    </p>
                                    <p className="text-zinc-400 leading-relaxed mb-4">
                                        All positions in the Founding Council are assigned based on evaluation of the applicant’s domain, commitment, responsibility, and the requirements of the organization.
                                    </p>
                                    <p className="text-zinc-500 text-sm">
                                        Roles are not self-selected and are determined through the structured selection process. The decision of the selection panel is final.
                                    </p>
                                </div>
                            </section>

                        </div>
                    </div>
                </Reveal>
            </div>
        </main>
    );
}
