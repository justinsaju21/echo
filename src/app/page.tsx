import { Navbar } from "@/components/Navbar";
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
import { Footer } from "@/components/Footer";
import { SystemStatus } from "@/components/SystemStatus";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <SystemStatus />
      <Hero />
      <TechStack />
      <About />
      <BecomeMember />
      <Timeline />
      <Domains />
      <Features />
      <WhoShouldApply />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}
