import { MeshBackground } from "@/components/MeshBackground";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { KeyFeatures } from "@/components/KeyFeatures";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Menu Miser",
    "operatingSystem": "iOS",
    "applicationCategory": "LifestyleApplication",
    "offers": {
      "@type": "Offer",
      "price": "2.99",
      "priceCurrency": "USD"
    },
    "description": "AI-powered meal planning app that helps reduce food waste by generating recipes and meal plans based on your existing pantry.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
