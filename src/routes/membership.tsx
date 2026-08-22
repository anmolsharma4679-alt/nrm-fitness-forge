import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { BtnAnchor } from "@/components/site/Btn";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, plans, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Gym Membership Plans in Jodhpur — THE NRM FITNESS" },
      {
        name: "description",
        content:
          "Membership options at THE NRM FITNESS Jodhpur — monthly, quarterly and yearly plans with gym access, classes and personal training.",
      },
      {
        property: "og:title",
        content: "Gym Membership Plans in Jodhpur — THE NRM FITNESS",
      },
      {
        property: "og:description",
        content: "Flexible plans with gym access, group classes and personal training.",
      },
    ],
  }),
  component: Membership,
});

function Membership() {
  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-x">
          <SectionHeading
            as="h1"
            eyebrow="Membership"
            title="Pick your plan"
            sub="Prices are placeholders and must be confirmed before launch. Message us on WhatsApp for current offers."
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 70}
              className={cn(
                "flex flex-col border bg-card p-7",
                p.featured ? "border-primary shadow-lime" : "border-border",
              )}
            >
              {p.featured ? (
                <span className="mb-4 w-fit bg-primary px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                  Most popular
                </span>
              ) : null}
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-primary">
                {p.name}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <p className="mt-5 font-display text-3xl uppercase">
                {business.showPrices ? p.price : "Enquire"}
              </p>
              <p className="mt-1 text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
                {business.showPrices ? p.period : "Get membership details"}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <BtnAnchor
                href={whatsappLink(
                  `Hi ${business.name}, I'm interested in the ${p.name} membership plan. Please share details.`,
                )}
                target="_blank"
                rel="noreferrer noopener"
                variant={p.featured ? "lime" : "outline"}
                className="mt-7 w-full"
              >
                Enquire Now
              </BtnAnchor>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
