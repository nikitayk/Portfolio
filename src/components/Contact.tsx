import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./SectionHeading";
import { site, socialLinks } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-elevated/70">
        <div className="mesh-bg relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
          <div className="grain-overlay absolute inset-0" aria-hidden />
          <div className="relative">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Let's work together."
                description="Open to software engineering internships and full-time roles. Email is the fastest way to reach me."
                align="center"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mx-auto flex max-w-xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <MagneticButton
                  href={`mailto:${site.email}`}
                  className="w-full border-accent/40 bg-accent px-6 py-3 text-base text-white sm:w-auto dark:text-[#0b0c0e]"
                >
                  {site.email}
                </MagneticButton>
                <MagneticButton
                  href={site.phoneHref}
                  className="w-full sm:w-auto"
                >
                  {site.phone}
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring text-sm text-muted underline-offset-4 transition hover:text-accent hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
