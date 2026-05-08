import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Link2, Mail } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Achoque Tech Solutions to discuss your project, request a proposal, or book a discovery call.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk—then ship."
        subtitle="Whether you’re exploring an MVP, modernizing a system, or adding AI capabilities, we’ll help you scope it quickly and deliver with senior-level execution."
      />

      <Section className="pt-10 md:pt-14">
        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div id="contact-form">
              <ContactForm />
            </div>
          </Reveal>

          <div className="lg:col-span-5 grid gap-5">
            <Reveal>
              <Card className="p-7 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-base font-semibold tracking-tight">
                      Book a discovery call
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      A Calendly-style booking block (placeholder). Link this to
                      your scheduling tool when ready.
                    </p>
                  </div>
                  <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-blue-200" />
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-sm font-semibold">Availability</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Typically within 2–3 business days.
                  </p>
                  <div className="mt-5">
                    <Button asChild className="w-full">
                      <Link href="/contact">Open booking (placeholder)</Link>
                    </Button>
                    <div className="mt-3 text-xs text-muted-foreground">
                      Swap this button for your Calendly link.
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.04}>
              <Card className="p-7 md:p-8">
                <div className="text-base font-semibold tracking-tight">
                  Direct channels
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Prefer async? Reach out here.
                </p>
                <div className="mt-6 grid gap-3">
                  <a
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm hover:bg-white/[0.05]"
                    href={`mailto:${siteConfig.links.email}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Mail className="h-5 w-5 text-blue-200" />
                      </span>
                      {siteConfig.links.email}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                  <a
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm hover:bg-white/[0.05]"
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Link2 className="h-5 w-5 text-blue-200" />
                      </span>
                      LinkedIn
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

