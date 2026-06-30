import { Section, SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { site } from "@/lib/data";

export function About() {
  return (
    <Section id="about" className="border-t border-border">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A software engineer focused on systems that ship."
          />
        </Reveal>

        <div className="space-y-5">
          {site.bio.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={i * 0.06}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
