export function TrainerCard({
  trainer,
}: {
  trainer: {
    name: string;
    role: string;
    experience: string;
    specialty: string;
    bio: string;
    image: string;
    alt: string;
  };
}) {
  return (
    <article className="group overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60">
      <div className="relative aspect-3/4 overflow-hidden bg-surface">
        <img
          src={trainer.image}
          alt={trainer.alt}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-primary px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-primary-foreground">
          {trainer.specialty}
        </span>
      </div>
      <div className="p-6">
        <h3 className="display-md">{trainer.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{trainer.role}</p>
        <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary">
          {trainer.experience}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {trainer.bio}
        </p>
      </div>
    </article>
  );
}
