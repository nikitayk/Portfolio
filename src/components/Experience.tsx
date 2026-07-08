import { experience } from "@/lib/data";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";

function formatPeriod(period: string) {
  if (period === "Ongoing") return period;
  const [year, month] = period.split("-");
  if (!month) return period;
  const label = new Date(Number(year), Number(month) - 1).toLocaleString(
    "en-US",
    { month: "long", year: "numeric" }
  );
  return label;
}

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Built, shipped, and tested — end to end."
          description="Projects shipped end to end, leadership on the ground, and the competitions that shaped how I work."
        />
      </Reveal>

      <div className="relative">
        <div
          className="absolute bottom-0 left-[0.65rem] top-0 w-px bg-border sm:left-4"
          aria-hidden
        />

        <ol className="space-y-10">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <li className="relative pl-10 sm:pl-12">
                <span
                  className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-surface"
                  aria-hidden
                />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">
                      {item.org}
                      {item.type ? (
                        <span className="text-muted/70"> · {item.type}</span>
                      ) : null}
                    </p>
                  </div>
                  <time
                    dateTime={item.period}
                    className="shrink-0 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent"
                  >
                    {formatPeriod(item.period)}
                  </time>
                </div>

                {item.stack ? (
                  <p className="mt-3 text-xs uppercase tracking-wide text-copper">
                    {item.stack.join(" · ")}
                  </p>
                ) : null}

                <ul className="mt-4 space-y-2.5">
                  {item.highlights.map((point) => (
                    <li
                      key={point.slice(0, 40)}
                      className="flex gap-2 text-sm leading-relaxed text-muted sm:text-base"
                    >
                      <span className="text-accent" aria-hidden>
                        →
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {item.liveUrl || item.githubUrl ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.liveUrl ? (
                      <MagneticButton
                        href={item.liveUrl}
                        external
                        className="border-accent/30 bg-accent/10 px-4 py-2 text-xs text-accent"
                      >
                        {item.kind === "project" ? "Live demo" : "View profile"}
                      </MagneticButton>
                    ) : null}
                    {item.githubUrl ? (
                      <MagneticButton
                        href={item.githubUrl}
                        external
                        className="px-4 py-2 text-xs"
                      >
                        GitHub
                      </MagneticButton>
                    ) : null}
                  </div>
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
