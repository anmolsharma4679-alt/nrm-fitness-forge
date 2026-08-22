import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Btn, BtnAnchor } from "@/components/site/Btn";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  business,
  contactMethods,
  enquiryMessage,
  fitnessGoals,
  programOptions,
  whatsappLink,
} from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Trial Enquiry — THE NRM FITNESS Jodhpur" },
      {
        name: "description",
        content:
          "Contact THE NRM FITNESS in Jodhpur by WhatsApp or phone. Send an enquiry about membership, personal training or a gym visit.",
      },
      {
        property: "og:title",
        content: "Contact & Free Trial Enquiry — THE NRM FITNESS Jodhpur",
      },
      {
        property: "og:description",
        content: "Send a WhatsApp enquiry or call us to book your gym visit in Jodhpur.",
      },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "mt-2 h-12 w-full border border-input bg-surface px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
const labelClass =
  "block text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    goal: fitnessGoals[0] as string,
    program: programOptions[0] as string,
    contactMethod: contactMethods[0] as string,
    message: "",
  });

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(enquiryMessage(form)), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-x">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Start your enquiry"
            sub="Fill the form and it opens WhatsApp with your details pre-filled — or simply call us."
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="border border-border bg-card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    placeholder="Your full name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone")(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="goal">
                    Fitness goal
                  </label>
                  <select
                    id="goal"
                    value={form.goal}
                    onChange={(e) => set("goal")(e.target.value)}
                    className={fieldClass}
                  >
                    {fitnessGoals.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="program">
                    Program
                  </label>
                  <select
                    id="program"
                    value={form.program}
                    onChange={(e) => set("program")(e.target.value)}
                    className={fieldClass}
                  >
                    {programOptions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="method">
                    Preferred contact
                  </label>
                  <select
                    id="method"
                    value={form.contactMethod}
                    onChange={(e) => set("contactMethod")(e.target.value)}
                    className={fieldClass}
                  >
                    {contactMethods.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                    placeholder="Tell us about your goals or ask a question"
                    className="mt-2 w-full border border-input bg-surface p-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>
              <Btn type="submit" size="lg" className="mt-7 w-full sm:w-auto">
                Send on WhatsApp
              </Btn>
            </form>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div className="border border-border bg-card p-6">
              <h2 className="font-display text-xl uppercase">Reach us</h2>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Phone size={17} className="mt-0.5 shrink-0 text-primary" />
                  <a href={`tel:${business.phoneTel}`} className="hover:text-foreground">
                    {business.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={17} className="mt-0.5 shrink-0 text-primary" />
                  <a href={`mailto:${business.email}`} className="hover:text-foreground">
                    {business.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    {business.addressLine}
                    <br />
                    {business.addressLocality}
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <BtnAnchor
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  size="sm"
                >
                  WhatsApp
                </BtnAnchor>
                <BtnAnchor
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="outline"
                  size="sm"
                >
                  Directions
                </BtnAnchor>
              </div>
            </div>

            <div className="border border-border bg-card p-6">
              <h2 className="font-display text-xl uppercase">Opening hours</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {business.hours.map((h) => (
                  <li key={h.days}>
                    <span className="block text-foreground">{h.days}</span>
                    {h.time}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border">
              <iframe
                title="Map to THE NRM FITNESS in Jodhpur"
                src={business.mapsEmbedUrl}
                loading="lazy"
                className="h-64 w-full grayscale"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
