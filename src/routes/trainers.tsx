import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { coachingDisciplines, trainerProfilesAvailable } from "@/data/site";
import { BtnAnchor } from "@/components/site/Btn";
import { business, whatsappLink } from "@/data/site";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
            sub="Our coaches guide members through strength, functional training, group classes and personal training."
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {coachingDisciplines.map((d, i) => (
              <Reveal key={d.title} delay={i * 80} className="border border-border bg-card p-7">
                <h3 className="font-display text-xl uppercase">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </Reveal>
            ))}
          </div>

          {!trainerProfilesAvailable && (
            <Reveal delay={120} className="mt-10 border border-border bg-surface p-8 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center border border-border">
                <Users size={20} className="text-primary" />
              </span>
              <h2 className="mt-5 font-display text-2xl uppercase">
                Trainer profiles coming soon
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                We are preparing detailed coach profiles with real credentials and photos.
                Meanwhile, message us on WhatsApp and we'll connect you with the right coach for
                your goal.
              </p>
              <BtnAnchor
                href={whatsappLink(
                  `Hi ${business.name}, I would like to know more about your trainers and coaching.`,
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6"
              >
                Ask on WhatsApp
              </BtnAnchor>
            </Reveal>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
