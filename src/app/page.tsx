import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { Estimator } from "@/components/sections/Estimator";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/layout/Footer";
import { PersistentCta } from "@/components/layout/PersistentCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ProofStrip />
        <SelectedWork />
        <Services />
        <Skills />
        <Process />
        <Estimator />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <PersistentCta />
    </>
  );
}
