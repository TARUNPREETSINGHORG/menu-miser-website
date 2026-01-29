import { MeshBackground } from "@/components/MeshBackground";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { KeyFeatures } from "@/components/KeyFeatures";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <MeshBackground />
      <div className="relative">
        <Hero />
        <ProblemSolution />
        <KeyFeatures />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </div>
    </>
  );
}
