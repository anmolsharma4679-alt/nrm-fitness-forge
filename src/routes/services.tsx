import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Gym, CrossFit, Zumba & Yoga Programs — THE NRM FITNESS" },
      {
        name: "description",
        content:
          "Explore our programs in Jodhpur: gym training, personal training, CrossFit, Zumba, yoga, weight management and swimming.",
      },
      {
        property: "og:title",
        content: "Gym, CrossFit, Zumba & Yoga Programs — THE NRM FITNESS",
      },
      {
        property: "og:description",
        content: "Seven fitness programs under one roof in Jodhpur, Rajasthan.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-x">
          <SectionHeading
            as="h1"
            eyebrow="Programs"
            title="Every way to train"
            sub="From strength and conditioning to group classes and swimming — choose the program that fits your goal."
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
