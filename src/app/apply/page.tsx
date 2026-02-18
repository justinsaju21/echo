import { ApplicationForm } from "@/components/ApplicationForm";
import { Reveal } from "@/components/ui/Reveal";

export default function ApplyPage() {
    return (
        <main className="min-h-screen bg-black pt-20">
            <Reveal width="100%">
                <ApplicationForm />
            </Reveal>
        </main>
    );
}
