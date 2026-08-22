import { createFileRoute } from "@tanstack/react-router";
import galInterior from "@/assets/gal-interior.jpg";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, stats, whyUs } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About THE NRM FITNESS — Gym in Jodhpur" },
      {
        name: "description",
        content:
          "Learn about THE NRM FITNESS in Jodhpur: our training philosophy, facilities and the coaching approach behind every program.",
      },
      { property: "og:title", content: "About THE NRM FITNESS — Gym in Jodhpur" },
      {
        property: "og:description",
        content: "Our training philosophy, facilities and coaching approach in Jodhpur.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-x">
          <SectionHeading
            as="h1"
            eyebrow="About us"
            title="A fitness center built on discipline"
            sub={business.description}
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="border border-border">
            <img
              src={galInterior}
              alt="Training floor with racks and mirrors at THE NRM FITNESS"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-md">Our story</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              THE NRM FITNESS was created to give {business.city} a training space that
              takes fitness seriously — modern equipment, structured programming and
              coaches who stay involved in your progress.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Whether you are lifting for the first time or preparing for a specific goal,
              you get a plan, guidance on form and a community that keeps you showing up.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl uppercase text-primary">{s.value}</p>
                  <p className="mt-1 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-surface">
        <div className="container-x">
          <SectionHeading eyebrow="Our promise" title="What you can expect" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 80}
                className="border border-border bg-card p-7"
              >
                <h3 className="font-display text-xl uppercase">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {w.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
