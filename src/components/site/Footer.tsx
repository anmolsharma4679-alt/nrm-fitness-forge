import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { business, navLinks, whatsappLink } from "@/data/site";
import { BtnLink } from "./Btn";

export function Footer() {
  const socials = [
    { href: business.social.instagram, Icon: Instagram, label: "Instagram" },
    { href: business.social.facebook, Icon: Facebook, label: "Facebook" },
    { href: business.social.youtube, Icon: Youtube, label: "YouTube" },
  ].filter((s) => Boolean(s.href));

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl uppercase">
            THE NRM <span className="text-primary">FITNESS</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Premium fitness and training in {business.city}. Established in{" "}
            {business.established}.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-10 w-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {business.social.instagramHandle}
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a className="hover:text-foreground" href={`tel:${business.phoneTel}`}>
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="hover:text-foreground"
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
              >
                WhatsApp enquiry
              </a>
            </li>
            <li>
              <a
                className="hover:text-foreground"
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                {business.addressLine},
                <br />
                {business.addressLine2},
                <br />
                {business.addressLocality}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Opening Hours
          </h3>
          {business.hoursConfirmed ? (
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {business.hours.map((h) => (
                <li key={h.days}>
                  <span className="block text-foreground">{h.days}</span>
                  {h.time}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-muted-foreground">{business.hoursFallback}</p>
          )}
          <BtnLink to="/membership" size="sm" className="mt-6">
            Join Now
          </BtnLink>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="container-x text-center text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
          © 2026 THE NRM FITNESS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
