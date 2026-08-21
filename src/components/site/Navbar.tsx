import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business, navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { BtnLink } from "./Btn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-background/70 to-transparent",
      )}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl uppercase leading-none tracking-wide sm:text-2xl">
            NRM
          </span>
          <span className="font-display text-xl uppercase leading-none tracking-wide text-primary transition-opacity group-hover:opacity-80 sm:text-2xl">
            FITNESS
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <BtnLink to="/membership" size="sm" className="hidden sm:inline-flex">
            Join Now
          </BtnLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-18 z-40 flex flex-col bg-background transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav className="container-x flex flex-1 flex-col justify-center gap-1 pb-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="border-b border-border py-4 font-display text-3xl uppercase text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <BtnLink to="/membership" size="lg" className="mt-8 w-full">
            Join Now
          </BtnLink>
          <a
            href={`tel:${business.phoneTel}`}
            className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            {business.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
