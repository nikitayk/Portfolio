import { certifications, education } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <Section id="education" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title="Foundation in electronics, AI, and computer science."
        />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.05}>
              <article
                className={`rounded-2xl border p-5 sm:p-6 ${
                  item.primary
                    ? "border-accent/25 bg-accent/5"
                    : "border-border bg-elevated/50"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold sm:text-xl">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{item.school}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-medium">{item.period}</p>
                    <p className="text-muted">{item.detail}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <aside className="rounded-2xl border border-border bg-elevated/60 p-6">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-copper">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="border-b border-border pb-3 text-sm leading-relaxed text-muted last:border-0 last:pb-0"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
