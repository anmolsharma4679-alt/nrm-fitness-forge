import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const btn = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60",
  {
    variants: {
      variant: {
        lime: "bg-primary text-primary-foreground hover:shadow-lime hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-border-strong text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5",
        ghost: "text-foreground/80 hover:text-primary",
        dark: "bg-card text-foreground border border-border hover:border-primary/60 hover:-translate-y-0.5",
      },
      size: {
        md: "h-12 px-6 text-[0.72rem] rounded-sm",
        lg: "h-14 px-8 text-[0.78rem] rounded-sm",
        sm: "h-10 px-4 text-[0.68rem] rounded-sm",
      },
    },
    defaultVariants: { variant: "lime", size: "md" },
  },
);

type Common = VariantProps<typeof btn> & { className?: string; children: ReactNode };

export function BtnLink({
  variant,
  size,
  className,
  children,
  ...rest
}: Common & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(btn({ variant, size }), className)} {...rest}>
      {children}
    </Link>
  );
}

export function BtnAnchor({
  variant,
  size,
  className,
  children,
  ...rest
}: Common & ComponentProps<"a">) {
  return (
    <a className={cn(btn({ variant, size }), className)} {...rest}>
      {children}
    </a>
  );
}

export function Btn({
  variant,
  size,
  className,
  children,
  ...rest
}: Common & ComponentProps<"button">) {
  return (
    <button className={cn(btn({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}
