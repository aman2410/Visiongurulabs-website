import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import {
  Hero, TrustBar, ClientsStrip, AboutBlock, ServicesGrid, ProcessTimeline, IndustriesGrid,
  WhyUs, CaseStudiesPreview, AISection, TeamGrid, InsightsGrid, TestimonialsCarousel, CtaBanner,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VisionGuru Labs — AI, Software & Digital Transformation Partners" },
      { name: "description", content: "VisionGuru Labs LLP helps businesses navigate AI, custom software, and digital transformation through senior strategy and engineering." },
      { property: "og:title", content: "VisionGuru Labs — Strategic Technology Partners" },
      { property: "og:description", content: "AI consulting, custom software, and digital transformation for startups, enterprises, and governments." },
      { property: "og:url", content: "https://www.visiongurulabs.com/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "VisionGuru Labs — Strategic Technology Partners" },
      { name: "twitter:description", content: "AI consulting, custom software, and digital transformation for startups, enterprises, and governments." },
    ],
    links: [{ rel: "canonical", href: "https://www.visiongurulabs.com/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "VisionGuru Labs LLP",
        description: "Software and AI consulting company.",
        url: "https://www.visiongurulabs.com",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <ClientsStrip />
      <TrustBar />
      <AboutBlock />
      <ServicesGrid />
      <ProcessTimeline />
      <IndustriesGrid />
      <WhyUs />
      <CaseStudiesPreview />
      <AISection />
      <TeamGrid />
      <InsightsGrid />
      <TestimonialsCarousel />
      <CtaBanner />
    </PageShell>
  );
}
