"use client";

import { useState } from "react";
import { ProjectCategory, projects } from "@/lib/data";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "Security",
  "Real-Time Systems",
];

export function Projects() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <Section id="projects" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title="Two production systems I designed and shipped end to end."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={`focus-ring rounded-full border px-4 py-1.5 text-sm transition ${
                active === filter
                  ? "border-accent/40 bg-accent/15 text-accent"
                  : "border-border text-muted hover:text-ink"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-12">
        {visible.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * 0.08}
            className={
              project.featured
                ? "lg:col-span-7 lg:row-span-2"
                : "lg:col-span-5"
            }
          >
            <article className="group flex h-full flex-col rounded-[1.75rem] border border-border bg-elevated/70 p-6 backdrop-blur-sm transition duration-300 hover:border-accent/30 hover:shadow-[0_24px_60px_-40px_rgba(20,184,166,0.35)] sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.18em] text-copper">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                </div>
                <time
                  dateTime={project.date}
                  className="shrink-0 text-xs text-muted"
                >
                  {project.date}
                </time>
              </div>

              <p className="mb-5 font-display text-lg leading-snug text-balance sm:text-xl">
                {project.tagline}
              </p>

              <ul className="mb-6 space-y-3 text-sm leading-relaxed text-muted">
                {project.highlights.map((item) => (
                  <li key={item.slice(0, 30)} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs uppercase tracking-wide text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <MagneticButton
                  href={project.liveUrl}
                  external
                  className="border-accent/40 bg-accent/10 text-accent"
                >
                  Live demo
                </MagneticButton>
                <MagneticButton href={project.githubUrl} external>
                  View on GitHub
                </MagneticButton>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
