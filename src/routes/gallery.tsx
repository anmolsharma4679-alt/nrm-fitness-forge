import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/CtaSection";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gym Gallery — THE NRM FITNESS, Jodhpur" },
      {
        name: "description",
        content:
          "See inside THE NRM FITNESS in Jodhpur: training floor, equipment, group classes, swimming and coaching sessions.",
      },
      { property: "og:title", content: "Gym Gallery — THE NRM FITNESS, Jodhpur" },
      {
        property: "og:description",
        content: "A look inside our training floor, studios and pool in Jodhpur.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-x">
          <SectionHeading
            as="h1"
            eyebrow="Gallery"
            title="Inside the gym"
            sub="Filter by area to explore the training floor, equipment, classes and pool."
          />
          <div className="mt-12">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
