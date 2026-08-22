import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrainerCard } from "@/components/site/TrainerCard";
import { trainers } from "@/data/site";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Expert Fitness Trainers in Jodhpur — THE NRM FITNESS" },
      {
        name: "description",
        content:
          "Meet the coaching team at THE NRM FITNESS in Jodhpur — strength, functional training, Zumba and personal training specialists.",
      },
      {
        property: "og:title",
        content: "Expert Fitness Trainers in Jodhpur — THE NRM FITNESS",
      },
      {
        property: "og:description",
        content: "Certified coaches guiding every member through safe, effective training.",
      },
    ],
  }),
  component: Trainers,
});

function Trainers() {
  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-x">
          <SectionHeading
            as="h1"
            eyebrow="The team"
            title="Coaches behind the results"
            sub="Trainer profiles are placeholders until the client supplies real names, credentials and photos."
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((t, i) => (
            <Reveal key={i} delay={i * 70}>
              <TrainerCard trainer={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
