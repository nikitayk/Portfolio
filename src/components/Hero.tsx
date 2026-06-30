import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-24"
    >
      <div className="mesh-bg animate-mesh-drift absolute inset-0" aria-hidden />
      <div className="grain-overlay absolute inset-0 animate-grain" aria-hidden />

      <div className="section-pad relative mx-auto grid max-w-6xl gap-10 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-16">
        <div>
          <Reveal>
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-[clamp(2.5rem,7vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-balance">
              Systems that scan fast.
              <span className="block text-accent">Ship faster.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {site.valueProp}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                href="#experience"
                className="border-accent/40 bg-accent text-white hover:bg-accent/90 dark:text-[#0b0c0e]"
              >
                View experience
              </MagneticButton>
              <MagneticButton href={`mailto:${site.email}`}>
                Get in touch
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <a
                href={`mailto:${site.email}`}
                className="focus-ring transition hover:text-accent"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="focus-ring transition hover:text-accent"
              >
                {site.phone}
              </a>
              <span>{site.location}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-border bg-elevated shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
            <Image
              src={site.photo.src}
              alt={site.photo.alt}
              width={site.photo.width}
              height={site.photo.height}
              priority
              className="h-full w-full object-cover object-[center_12%] transition duration-700 group-hover:scale-[1.03]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-40"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent) 0%, transparent 45%, var(--color-copper) 100%)",
              }}
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-display text-lg font-semibold">{site.name}</p>
              <p className="text-sm text-muted">{site.role}</p>
            </div>
          </div>
          <div
            className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full border border-accent/20 bg-accent/10 blur-2xl lg:block"
            aria-hidden
          />
        </Reveal>
      </div>
    </section>
  );
}
