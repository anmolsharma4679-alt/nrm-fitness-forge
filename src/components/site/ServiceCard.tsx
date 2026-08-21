import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/contact"
      className="group relative block overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60"
    >
      <div className="relative aspect-4/5 overflow-hidden">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-107"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="display-md transition-colors group-hover:text-primary">
          {service.title}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
          {service.text}
        </p>
        <span className="mt-4 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Explore
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
