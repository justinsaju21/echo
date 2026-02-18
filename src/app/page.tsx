import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { BecomeMember } from "@/components/BecomeMember";
import { Timeline } from "@/components/Timeline";
import { Domains } from "@/components/Domains";
import { Features } from "@/components/Features";
import { WhoShouldApply } from "@/components/WhoShouldApply";
import { FAQ } from "@/components/FAQ";
import { CallToAction } from "@/components/CallToAction";
import { SystemStatus } from "@/components/SystemStatus";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <SystemStatus />

      {/* Hero handles its own entrance mostly, but we can wrap it effectively for page transitions via template */}
      <Hero />

      <Reveal width="100%">
        <TechStack />
      </Reveal>

      <Reveal width="100%">
        <About />
      </Reveal>

      <Reveal width="100%">
        <BecomeMember />
      </Reveal>

      <Reveal width="100%">
        <Timeline />
      </Reveal>

      <Reveal width="100%">
        <Domains />
      </Reveal>

      <Reveal width="100%">
        <Features />
      </Reveal>

      <Reveal width="100%">
        <WhoShouldApply />
      </Reveal>

      <Reveal width="100%">
        <FAQ />
      </Reveal>

      <Reveal width="100%">
        <CallToAction />
      </Reveal>
    </main>
  );
}
