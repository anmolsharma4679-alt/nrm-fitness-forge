import { Star } from "lucide-react";

export function ReviewCard({
  review,
}: {
  review: { text: string; name: string; stars: number };
}) {
  return (
    <figure className="flex h-full flex-col justify-between border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/50">
      <div className="flex gap-1" aria-label={`${review.stars} out of 5 stars`}>
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} size={15} className="fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="mt-5 text-sm leading-relaxed text-foreground/90">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {review.name}
      </figcaption>
    </figure>
  );
}
