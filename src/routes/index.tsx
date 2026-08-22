import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, Target, Users, Whistle } from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";
import { BtnAnchor, BtnLink } from "@/components/site/Btn";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TrainerCard } from "@/components/site/TrainerCard";
import {
  business,
  plans,
  reviews,
  services,
  stats,
  transformations,
  whatsappLink,
  whyUs,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE NRM FITNESS — Premium Gym & Fitness Center in Jodhpur" },
      {
        name: "description",
        content:
          "THE NRM FITNESS in Jodhpur: gym training, personal training, CrossFit, Zumba, yoga, swimming and weight management with expert coaches.",
      },
      {
        property: "og:title",
        content: "THE NRM FITNESS — Premium Gym & Fitness Center in Jodhpur",
      },
      {
        property: "og:description",
        content:
          "Premium equipment, expert coaching and result-driven programs in Jodhpur, Rajasthan.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: business.name,
          description: business.description,
          telephone: business.phoneTel,
          email: business.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.addressLine,
            addressLocality: business.city,
            addressRegion: business.state,
            addressCountry: "IN",
          },
          hasMap: business.mapsUrl,
        }),
      },
    ],
  }),
  component: Index,
});

const icons = { dumbbell: Dumbbell, whistle: Whistle, target: Target, users: Users };

function Index() {
  return (
    <>
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Athlete training with weights at THE NRM FITNESS in Jodhpur"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />

        <div className="container-x relative py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">
              {business.city}, {business.state}
            </p>
            <h1 className="display-xl mt-5">
              Build the body.
              <br />
              <span className="text-primary">Build the discipline.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {business.tagline} {business.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <BtnLink to="/membership" size="lg">
                View Membership
              </BtnLink>
              <BtnAnchor
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
                size="lg"
              >
                Enquire on WhatsApp
              </BtnAnchor>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-x grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className="font-display text-3xl uppercase text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why NRM"
            title={
              <>
                More than a gym.
                <br />A training standard.
              </>
            }
            sub="Everything at NRM Fitness is built to help you train better, stay consistent and see real progress."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const Icon = icons[w.icon as keyof typeof icons] ?? Dumbbell;
              return (
                <Reveal
                  key={w.title}
                  delay={i * 90}
                  className="border border-border bg-card p-7 transition-colors duration-300 hover:border-primary/60"
                >
                  <Icon className="text-primary" size={26} />
                  <h3 className="mt-6 font-display text-xl uppercase">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {w.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-surface">
        <div className="container-x">
          <SectionHeading
            eyebrow="Programs"
            title="Train your way"
            sub="Seven programs under one roof — pick the one that matches your goal."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <BtnLink to="/services" variant="outline">
              All Programs <ArrowRight size={15} />
            </BtnLink>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Results"
            title="Transformations"
            sub="Placeholder transformations — real, consented member stories will replace these before launch."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {transformations.map((t, i) => (
              <Reveal
                key={t.name + i}
                delay={i * 80}
                className="border border-border bg-card"
              >
                <div className="grid grid-cols-2">
                  {[
                    { src: t.before, label: "Before" },
                    { src: t.after, label: "After" },
                  ].map((img) => (
                    <div key={img.label} className="relative aspect-3/4 overflow-hidden">
                      <img
                        src={img.src}
                        alt={`${img.label} placeholder image`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-background/80 px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-primary">
                        {img.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-6">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-primary">
                    {t.goal}
                  </p>
                  <h3 className="mt-3 font-display text-lg uppercase">{t.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.story}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-surface">
        <div className="container-x">
          <SectionHeading eyebrow="The team" title="Coaches who care" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainersPreview().map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <TrainerCard trainer={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Membership"
            title="Plans built around you"
            sub="Flexible plans for every goal and schedule. Prices shown are placeholders."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 70}
                className={
                  p.featured
                    ? "border border-primary bg-card p-7 shadow-lime"
                    : "border border-border bg-card p-7"
                }
              >
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-primary">
                  {p.name}
                </p>
                <p className="mt-4 font-display text-3xl uppercase">
                  {business.showPrices ? p.price : "Enquire"}
                </p>
                <p className="mt-1 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {business.showPrices ? p.period : "Membership details"}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f}>— {f}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <BtnLink to="/membership">Compare Plans</BtnLink>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-surface">
        <div className="container-x">
          <SectionHeading
            eyebrow={business.ratingSource}
            title={`${business.rating}★ from our members`}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 3).map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <ReviewCard review={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">Visit us</p>
            <h2 className="display-lg mt-4">Find NRM Fitness</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {business.addressLine}
              <br />
              {business.addressLocality}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BtnAnchor href={`tel:${business.phoneTel}`}>Call Now</BtnAnchor>
              <BtnAnchor
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
              >
                Get Directions
              </BtnAnchor>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Questions?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Send an enquiry
              </Link>
            </p>
          </Reveal>
          <Reveal className="border border-border">
            <iframe
              title="Map to THE NRM FITNESS in Jodhpur"
              src={business.mapsEmbedUrl}
              loading="lazy"
              className="h-80 w-full grayscale"
            />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

function trainersPreview() {
  return trainersData;
}

import { trainers as trainersData } from "@/data/site";
