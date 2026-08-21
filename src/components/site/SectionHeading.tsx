import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  as: As = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <As className="display-lg">{title}</As>
      {sub ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
