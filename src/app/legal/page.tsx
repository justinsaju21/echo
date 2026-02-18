"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function LegalPage() {
    return (
        <main className="bg-black min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-16"
                >
                    <div className="border-b border-zinc-800 pb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Legal & Policies</h1>
                        <p className="text-zinc-400">Official policies governing the use of ECHO's digital platforms.</p>
                    </div>

                    {/* Copyright */}
                    <section id="copyright" className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Copyright Policy</h2>
                        <div className="text-zinc-400 space-y-4 leading-relaxed bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
                            <p>© 2026 ECHO – ECE Council for Hosting and Operations, Department of Electronics and Communication Engineering, SRM Institute of Science and Technology. All rights reserved.</p>
                            <p>All content on this website, including text, layout, design, graphics, and digital assets, is created for the official activities of ECHO. Unauthorized copying, reproduction, or redistribution in any form without permission is not permitted.</p>
                        </div>
                    </section>

                    {/* Privacy */}
                    <section id="privacy" className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
                        <div className="text-zinc-400 space-y-4 leading-relaxed bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
                            <p>ECHO – ECE Council for Hosting and Operations respects the privacy of all applicants and visitors to this website.</p>
                            <p>Information submitted through the application form is collected only for recruitment, evaluation, communication, and internal organizational purposes.</p>
                            <p>The information collected may include personal and academic details, domain preferences, experience, and portfolio links.</p>
                            <p>All data is stored in secured and access-controlled systems and is used only by the authorized selection and administrative team of ECHO.</p>
                            <p>The collected information will not be sold, publicly disclosed, or shared with external individuals or organizations.</p>
                            <p>By submitting the application form, the applicant consents to the use of the provided information for the selection process and internal communication.</p>
                        </div>
                    </section>

                    {/* Terms */}
                    <section id="terms" className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Terms of Use</h2>
                        <div className="text-zinc-400 space-y-4 leading-relaxed bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
                            <p>This website serves as the official platform for information, recruitment, and activities related to ECHO – ECE Council for Hosting and Operations.</p>
                            <p>By accessing this website, users agree to use the content only for legitimate informational and application purposes.</p>
                            <p>Users shall not attempt to disrupt the functionality of the website, manipulate submitted data, or misuse any part of the platform.</p>
                            <p>All structural decisions, recruitment processes, role assignments, and organizational changes are carried out in accordance with the internal governance of ECHO and the department.</p>
                            <p>The content of the website may be updated or modified at any time as the council evolves.</p>
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <section id="disclaimer" className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Recruitment Disclaimer</h2>
                        <div className="text-zinc-400 space-y-4 leading-relaxed bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
                            <p>Submission of an application does not guarantee selection.</p>
                            <p>All positions in the Founding Council are assigned based on evaluation of the applicant’s domain, commitment, responsibility, and the requirements of the organization.</p>
                            <p>Roles are not self-selected and are determined through the structured selection process.</p>
                            <p>The decision of the selection panel is final.</p>
                        </div>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}
