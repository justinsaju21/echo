import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";
import { z } from "zod";

const formSchema = z.object({
    fullName: z.string().min(2),
    regNo: z.string().min(5),
    deptYear: z.string().min(2),
    phone: z.string().min(10),
    email: z.string().email(),
    domains: z.array(z.string()).min(1),
    primaryDomain: z.string().min(1),
    experience: z.string().min(1),
    skills: z.string().min(1),
    links: z.string().optional(),
    hours: z.string().min(1),
    reason: z.string().min(10),
    projectExp: z.string().min(10),
    leadershipInterest: z.string().min(1),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate
        const validation = formSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({ error: "Invalid data", details: validation.error }, { status: 400 });
        }

        await appendToSheet(validation.data);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
