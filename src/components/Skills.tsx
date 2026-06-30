"use client";

import { skillGroups } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          eyebrow="Stack"
          title="Tools and foundations I reach for."
          description="Grouped by how I actually use them — not a flat tag cloud."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-border bg-elevated/60 p-6 backdrop-blur-sm transition hover:border-accent/25">
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-copper">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
