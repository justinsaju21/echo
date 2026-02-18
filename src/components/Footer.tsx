"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const POLICY_CONTENT = {
    copyright: {
        title: "Copyright Policy",
        content: `© 2026 ECHO – ECE Council for Hosting and Operations, Department of Electronics and Communication Engineering, SRM Institute of Science and Technology. All rights reserved.

All content on this website, including text, layout, design, graphics, and digital assets, is created for the official activities of ECHO. Unauthorized copying, reproduction, or redistribution in any form without permission is not permitted.`
    },
    privacy: {
        title: "Privacy Policy",
        content: `ECHO – ECE Council for Hosting and Operations respects the privacy of all applicants and visitors to this website.

Information submitted through the application form is collected only for recruitment, evaluation, communication, and internal organizational purposes.

The information collected may include personal and academic details, domain preferences, experience, and portfolio links.

All data is stored in secured and access-controlled systems and is used only by the authorized selection and administrative team of ECHO.

The collected information will not be sold, publicly disclosed, or shared with external individuals or organizations.

By submitting the application form, the applicant consents to the use of the provided information for the selection process and internal communication.`
    },
    terms: {
        title: "Terms of Use",
        content: `This website serves as the official platform for information, recruitment, and activities related to ECHO – ECE Council for Hosting and Operations.

By accessing this website, users agree to use the content only for legitimate informational and application purposes.

Users shall not attempt to disrupt the functionality of the website, manipulate submitted data, or misuse any part of the platform.

All structural decisions, recruitment processes, role assignments, and organizational changes are carried out in accordance with the internal governance of ECHO and the department.

The content of the website may be updated or modified at any time as the council evolves.`
    },
    disclaimer: {
        title: "Recruitment Disclaimer",
        content: `Submission of an application does not guarantee selection.

All positions in the Founding Council are assigned based on evaluation of the applicant’s domain, commitment, responsibility, and the requirements of the organization.

Roles are not self-selected and are determined through the structured selection process.

The decision of the selection panel is final.`
    }
};

export function Footer() {
    const [openModal, setOpenModal] = useState<keyof typeof POLICY_CONTENT | null>(null);

    return (
        <footer className="py-12 bg-black border-t border-zinc-900 text-center relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-black tracking-tighter text-white mb-2 uppercase">Echo</h2>
                <p className="text-zinc-500 text-sm font-medium mb-8">
                    Powering the digital backbone of ECE.
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-xs text-zinc-600 mb-8 max-w-2xl mx-auto">
                    {Object.entries(POLICY_CONTENT).map(([key, data]) => (
                        <button
                            key={key}
                            onClick={() => setOpenModal(key as keyof typeof POLICY_CONTENT)}
                            className="hover:text-blue-500 transition-colors uppercase tracking-wider"
                        >
                            {data.title}
                        </button>
                    ))}
                </div>

                <div className="text-zinc-700 text-[10px] space-y-2">
                    <p>
                        ECHO – ECE Council for Hosting and Operations is a student-driven technical body functioning for the development, deployment, and maintenance of digital systems and platforms for the Department of Electronics and Communication Engineering.
                    </p>
                    <p>
                        This platform is designed, developed, and maintained by the ECHO Technical Team as part of the department’s digital infrastructure initiative.
                    </p>
                    <p className="pt-4 opacity-50">
                        &copy; 2026 ECHO – ECE Council for Hosting and Operations. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {openModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setOpenModal(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
                                <h3 className="text-xl font-bold text-white">{POLICY_CONTENT[openModal].title}</h3>
                                <button onClick={() => setOpenModal(null)} className="text-zinc-500 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="p-6 overflow-y-auto custom-scrollbar text-left">
                                <div className="text-zinc-300 space-y-4 whitespace-pre-wrap leading-relaxed text-sm">
                                    {POLICY_CONTENT[openModal].content}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}
