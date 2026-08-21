import ctaImage from "@/assets/cta-gym.jpg";
import { whatsappLink } from "@/data/site";
import { BtnAnchor, BtnLink } from "./Btn";
import { Reveal } from "./Reveal";

export function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={ctaImage}
        alt="Interior of THE NRM FITNESS gym floor in Jodhpur at night"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/80" />

      <div className="container-x relative section-pad text-center">
        <Reveal>
          <p className="eyebrow">Your next chapter</p>
          <h2 className="display-xl mt-5">
            Stop waiting.
            <br />
            <span className="text-primary">Start training.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Your strongest version is built one workout at a time.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BtnLink to="/membership" size="lg">
              Join NRM Fitness
            </BtnLink>
            <BtnAnchor
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer noopener"
              variant="outline"
              size="lg"
            >
              WhatsApp Us
            </BtnAnchor>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
