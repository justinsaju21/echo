"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, ChevronRight, ChevronLeft, Check } from "lucide-react";
import clsx from "clsx";

// --- Schema Definition ---
const formSchema = z.object({
    // Section 1: Basic Details
    fullName: z.string().min(2, "Full Name is required"),
    regNo: z.string().min(5, "Registration Number is required"),
    deptYear: z.string().min(2, "Department & Year is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email is required"),

    // Section 2: Domain Selection
    domains: z.array(z.string()).min(1, "Select at least one domain"),

    // Section 3: Primary Domain
    primaryDomain: z.string().min(1, "Select your primary domain"),

    // Section 4: Experience Level
    experience: z.string().min(1, "Select your experience level"),

    // Section 5: Skills
    skills: z.string().min(3, "Please list your skills"),

    // Section 6: Work Links
    links: z.string().optional(),

    // Section 7: Commitment
    hours: z.string().min(1, "Select weekly commitment"),

    // Section 8: Long Answers
    reason: z.string().min(20, "Please elaborate (min 20 chars)"),
    projectExp: z.string().min(20, "Please describe a project (min 20 chars)"),

    // Section 9: Leadership
    leadershipInterest: z.string().min(1, "Please select an option"),
});

type FormValues = z.infer<typeof formSchema>;

const DOMAINS = [
    "Web Development (Frontend)",
    "Backend / Systems",
    "DevOps & Hosting",
    "UI/UX Design",
    "Content & Documentation",
    "Research & Innovation",
    "Operations & Project Coordination",
    "Cybersecurity & NetSec"
];

const EXPERIENCE_LEVELS = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Have worked on production systems"
];

const COMMITMENT_OPTIONS = [
    "2–4 hours",
    "5–8 hours",
    "8–12 hours",
    "12+ hours"
];

export function ApplicationForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { register, control, handleSubmit, watch, trigger, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            domains: [],
            links: "",
        },
        mode: "onChange"
    });

    const selectedDomains = watch("domains");

    const steps = [
        { id: 'basics', title: 'Basic Details' },
        { id: 'domains', title: 'Domains' },
        { id: 'details', title: 'Experience & Skills' },
        { id: 'questions', title: 'Questions' }
    ];

    // Helper to validate current step before proceeding
    const nextStep = async () => {
        let fieldsToValidate: (keyof FormValues)[] = [];

        if (currentStep === 0) fieldsToValidate = ['fullName', 'regNo', 'deptYear', 'phone', 'email'];
        if (currentStep === 1) fieldsToValidate = ['domains', 'primaryDomain'];
        if (currentStep === 2) fieldsToValidate = ['experience', 'skills', 'links', 'hours'];

        const isValid = await trigger(fieldsToValidate);
        if (isValid) setCurrentStep(prev => prev + 1);
    };

    const prevStep = () => setCurrentStep(prev => prev - 1);

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true);
        setError(null);
        try {
            const response = await fetch("/api/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to submit application");
            setIsSuccess(true);
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <section id="apply" className="py-24 bg-zinc-950 flex justify-center items-center min-h-[60vh]">
                <div className="bg-zinc-900/50 border border-green-500/30 p-10 rounded-3xl text-center max-w-lg mx-6 backdrop-blur-sm">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Apply for <span className="text-blue-500">Membership</span>
                    </h1>
                    <p className="text-zinc-400 text-lg">Your response has been recorded. Shortlisted applicants will be contacted for the next stage.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="apply" className="py-24 bg-black relative">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the Team</h2>
                    <div className="inline-block px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800">
                        <p className="text-zinc-400 text-sm">
                            Applicants are selected based on domain, commitment, and ownership.
                            <br className="hidden md:block" /> Roles in the Founding Council are assigned after the evaluation process.
                        </p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="flex justify-between mb-8 px-2">
                    {steps.map((step, idx) => (
                        <div key={step.id} className="flex flex-col items-center flex-1">
                            <div className={clsx(
                                "w-full h-1 mb-2 rounded-full transition-colors duration-300",
                                idx <= currentStep ? "bg-blue-600" : "bg-zinc-800"
                            )} />
                            <span className={clsx(
                                "text-xs font-medium uppercase tracking-wider transition-colors duration-300",
                                idx <= currentStep ? "text-blue-400" : "text-zinc-600"
                            )}>{step.title}</span>
                        </div>
                    ))}
                </div>

                <motion.div
                    className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-10 backdrop-blur-sm shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                        {/* STEP 1: BASIC DETAILS */}
                        {currentStep === 0 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm">1</span>
                                    Basic Details
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-400">Full Name</label>
                                        <input {...register("fullName")} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-700" placeholder="John Doe" />
                                        {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-400">Registration Number</label>
                                        <input {...register("regNo")} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-700" placeholder="RA..." />
                                        {errors.regNo && <p className="text-red-400 text-xs">{errors.regNo.message}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-400">Department & Year</label>
                                        <input {...register("deptYear")} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-700" placeholder="CSE - 2nd Year" />
                                        {errors.deptYear && <p className="text-red-400 text-xs">{errors.deptYear.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-400">Phone Number</label>
                                        <input {...register("phone")} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-700" placeholder="9876543210" />
                                        {errors.phone && <p className="text-red-400 text-xs">{errors.phone.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Email Address</label>
                                    <input {...register("email")} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-700" placeholder="john@example.com" />
                                    {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: DOMAIN SELECTION */}
                        {currentStep === 1 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm">2</span>
                                        Domain of Interest
                                    </h3>
                                    <p className="text-white/50 text-sm ml-10">Select the areas you want to work in. Roles will be assigned based on evaluation.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <Controller
                                        control={control}
                                        name="domains"
                                        render={({ field }) => (
                                            <>
                                                {DOMAINS.map((domain) => (
                                                    <div
                                                        key={domain}
                                                        onClick={() => {
                                                            const newValue = field.value.includes(domain)
                                                                ? field.value.filter(d => d !== domain)
                                                                : [...field.value, domain];
                                                            field.onChange(newValue);
                                                        }}
                                                        className={clsx(
                                                            "cursor-pointer p-4 rounded-xl border transition-all flex items-center justify-between group",
                                                            field.value.includes(domain)
                                                                ? "bg-blue-600/10 border-blue-500/50"
                                                                : "bg-zinc-950 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"
                                                        )}
                                                    >
                                                        <span className={clsx("font-medium", field.value.includes(domain) ? "text-blue-400" : "text-zinc-300")}>{domain}</span>
                                                        {field.value.includes(domain) && <Check size={18} className="text-blue-400" />}
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    />
                                </div>
                                {errors.domains && <p className="text-red-400 text-xs">{errors.domains.message}</p>}

                                {/* Primary Domain */}
                                <div className="pt-6 border-t border-white/5">
                                    <label className="text-sm font-medium text-zinc-400 block mb-3">Primary Domain (Most confident in)</label>
                                    <select {...register("primaryDomain")} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none appearance-none cursor-pointer">
                                        <option value="">Select your primary domain</option>
                                        {selectedDomains.length > 0 ? selectedDomains.map(d => (
                                            <option key={d} value={d}>{d}</option>
                                        )) : <option disabled>Select domains above first</option>}
                                    </select>
                                    {errors.primaryDomain && <p className="text-red-400 text-xs mt-1">{errors.primaryDomain.message}</p>}
                                </div>
                            </motion.div>
                        )}


                        {/* STEP 3: EXPERIENCE & SKILLS */}
                        {currentStep === 2 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm">3</span>
                                    Experience & Skills
                                </h3>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Experience Level</label>
                                    <select {...register("experience")} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none appearance-none cursor-pointer">
                                        <option value="">Select level...</option>
                                        {EXPERIENCE_LEVELS.map(level => (
                                            <option key={level} value={level}>{level}</option>
                                        ))}
                                    </select>
                                    {errors.experience && <p className="text-red-400 text-xs">{errors.experience.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Skills, Tools & Technologies</label>
                                    <textarea {...register("skills")} rows={3} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none resize-none placeholder:text-zinc-700" placeholder="e.g. React, Node.js, Figma, Python..." />
                                    {errors.skills && <p className="text-red-400 text-xs">{errors.skills.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Portfolio / Work Links (Optional)</label>
                                    <input {...register("links")} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-700" placeholder="GitHub, Behance, Drive, or personal site..." />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Weekly Commitment</label>
                                    <select {...register("hours")} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none appearance-none cursor-pointer">
                                        <option value="">How much time can you give?</option>
                                        {COMMITMENT_OPTIONS.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    {errors.hours && <p className="text-red-400 text-xs">{errors.hours.message}</p>}
                                </div>
                            </motion.div>
                        )}


                        {/* STEP 4: LONG ANSWERS */}
                        {currentStep === 3 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm">4</span>
                                    Long Answers
                                </h3>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Why do you want to be part of ECHO?</label>
                                    <textarea {...register("reason")} rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none resize-none placeholder:text-zinc-700" placeholder="Share your motivation..." />
                                    {errors.reason && <p className="text-red-400 text-xs">{errors.reason.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Describe something you have built, managed, or taken responsibility for.</label>
                                    <textarea {...register("projectExp")} rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none resize-none placeholder:text-zinc-700" placeholder="Tell us about a project or initiative..." />
                                    {errors.projectExp && <p className="text-red-400 text-xs">{errors.projectExp.message}</p>}
                                </div>

                                <div className="space-y-3 pt-4 border-t border-white/5">
                                    <label className="text-sm font-medium text-zinc-400 block">Are you interested in leading a domain in the future?</label>
                                    <div className="flex gap-6">
                                        {["Yes", "No", "Maybe"].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                                <input type="radio" value={opt} {...register("leadershipInterest")} className="hidden peer" />
                                                <div className="w-5 h-5 rounded-full border border-zinc-700 peer-checked:border-blue-500 peer-checked:bg-blue-500/20 flex items-center justify-center">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 opacity-0 peer-checked:opacity-100 transition-opacity" />
                                                </div>
                                                <span className="text-zinc-300 group-hover:text-white transition-colors">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.leadershipInterest && <p className="text-red-400 text-xs">{errors.leadershipInterest.message}</p>}
                                </div>
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between pt-8 border-t border-white/5">
                            {currentStep > 0 ? (
                                <button type="button" onClick={prevStep} className="px-6 py-2.5 text-zinc-400 hover:text-white font-medium flex items-center gap-2 transition-colors">
                                    <ChevronLeft size={18} /> Back
                                </button>
                            ) : <div />}

                            {currentStep < steps.length - 1 ? (
                                <button type="button" onClick={nextStep} className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors flex items-center gap-2">
                                    Next <ChevronRight size={18} />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit Application"}
                                </button>
                            )}
                        </div>

                        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
