"use client";
import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="py-12 bg-black border-t border-zinc-900 text-center relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-black tracking-tighter text-white mb-2 uppercase">Echo</h2>
                <p className="text-zinc-500 text-sm font-medium mb-8">
                    Powering the digital backbone of ECE.
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-xs text-zinc-600 mb-8 max-w-2xl mx-auto">
                    <Link href="/legal#copyright" className="hover:text-blue-500 transition-colors uppercase tracking-wider">
                        Copyright Policy
                    </Link>
                    <Link href="/legal#privacy" className="hover:text-blue-500 transition-colors uppercase tracking-wider">
                        Privacy Policy
                    </Link>
                    <Link href="/legal#terms" className="hover:text-blue-500 transition-colors uppercase tracking-wider">
                        Terms of Use
                    </Link>
                    <Link href="/legal#disclaimer" className="hover:text-blue-500 transition-colors uppercase tracking-wider">
                        Recruitment Disclaimer
                    </Link>
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
        </footer>
    );
}
