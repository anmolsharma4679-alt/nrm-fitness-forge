import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Dumbbell,
  Instagram,
  MessageCircle,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";
import galInterior from "@/assets/gal-interior.jpg";
import { BtnAnchor, BtnLink } from "@/components/site/Btn";
import { CtaSection } from "@/components/site/CtaSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import {
  business,
  coachingDisciplines,
  fullAddress,
  plans,
  pricingIsDemo,
  services,
  stats,
  whatsappLink,
  whyUs,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE NRM FITNESS | Gym & Fitness Center in Jodhpur" },
      {
        name: "description",
        content:
          "THE NRM FITNESS in Keshavnagar, Pal Road, Jodhpur offers gym training, personal training, CrossFit, Zumba, Yoga, swimming and fitness programs.",
      },
      {
        property: "og:title",
        content: "THE NRM FITNESS | Gym & Fitness Center in Jodhpur",
      },
      {
        property: "og:description",
        content:
          "Gym training, personal training, CrossFit, Zumba, Yoga and swimming at Ashoka Plaza, Pal Road, Keshavnagar, Jodhpur.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: business.name,
          description: business.longDescription,
          telephone: business.phoneTel,
          foundingDate: business.established,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${business.addressLine}, ${business.addressLine2}`,
            addressLocality: business.city,
            addressRegion: business.state,
            postalCode: business.postalCode,
            addressCountry: "IN",
          },
          sameAs: [business.social.instagram],
          hasMap: business.mapsUrl,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: business.rating,
            ratingCount: business.ratingCount.replace(/\D/g, ""),
            bestRating: "5",
          },
          knowsAbout: services.map((s) => s.title),
          areaServed: `${business.city}, ${business.state}`,
        }),
      },
    ],
  }),
  component: Index,
});

const icons = { dumbbell: Dumbbell, whistle: Award, target: Target, users: Users };

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
              {business.city}, {business.state} · Since {business.established}
            </p>
            <h1 className="display-xl mt-5">
              Build the body.
              <br />
              <span className="text-primary">Build the discipline.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {business.tagline}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {business.description}
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
              <p className="font-display text-2xl uppercase text-primary sm:text-4xl">
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
            sub={business.description}
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

      {/* Transformations — no results are claimed until real, consented member stories exist */}
      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="border border-border">
            <img
              src={galInterior}
              alt="Training floor with racks and mirrors at THE NRM FITNESS"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Member journeys</p>
            <h2 className="display-lg mt-4">
              Transformations
              <br />
              <span className="text-primary">coming soon</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We only publish member progress with permission. Real journeys from THE NRM
              FITNESS members will be featured here as they are shared with us — no stock
              stories, no exaggerated claims.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Want to start yours? Book a visit and train with structure, guidance and
              consistency.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnLink to="/membership">Start Training</BtnLink>
              <BtnAnchor
                href={business.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
              >
                <Instagram size={15} /> {business.social.instagramHandle}
              </BtnAnchor>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-surface">
        <div className="container-x">
          <SectionHeading
            eyebrow="Coaching"
            title="Guided every session"
            sub="Our coaching support covers strength, personal training and group fitness. Individual trainer profiles are coming soon."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {coachingDisciplines.map((d, i) => (
              <Reveal
                key={d.title}
                delay={i * 80}
                className="border border-border bg-card p-7 transition-colors duration-300 hover:border-primary/60"
              >
                <Sparkles className="text-primary" size={24} />
                <h3 className="mt-6 font-display text-xl uppercase">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d.text}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <BtnLink to="/trainers" variant="outline">
              Meet the Team <ArrowRight size={15} />
            </BtnLink>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Membership"
            title="Membership plans"
            sub={
              pricingIsDemo
                ? "Indicative plan structure — message us on WhatsApp for current membership details and offers."
                : "Flexible plans for every goal and schedule."
            }
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
          <Reveal className="mt-10 flex flex-wrap gap-3">
            <BtnLink to="/membership">Get Membership Details</BtnLink>
            <BtnAnchor
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer noopener"
              variant="outline"
            >
              Enquire on WhatsApp
            </BtnAnchor>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-surface">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl border border-border bg-card p-8 text-center sm:p-12">
            <div className="flex justify-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="mt-6 font-display text-4xl uppercase text-primary sm:text-5xl">
              {business.rating}★
            </p>
            <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {business.ratingSource} · {business.ratingCount} ratings
            </p>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Rated by members of THE NRM FITNESS in {business.city}. Read what people say
              on our Google listing.
            </p>
            {business.reviewsUrl ? (
              <BtnAnchor
                href={business.reviewsUrl}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
                className="mt-8"
              >
                Read More Reviews <ArrowRight size={15} />
              </BtnAnchor>
            ) : null}
          </Reveal>
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
              {business.addressLine2}
              <br />
              {business.addressLocality}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {business.hoursConfirmed
                ? business.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")
                : business.hoursFallback}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BtnAnchor href={`tel:${business.phoneTel}`}>Call Now</BtnAnchor>
              <BtnAnchor
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                variant="dark"
              >
                <MessageCircle size={15} /> WhatsApp
              </BtnAnchor>
              <BtnAnchor
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
              >
                Get Directions
              </BtnAnchor>
              <BtnAnchor
                href={business.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                variant="ghost"
              >
                <Instagram size={15} /> {business.social.instagramHandle}
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
              title={`Map to ${business.name} — ${fullAddress}`}
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
