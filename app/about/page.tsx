import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, HeartHandshake, Layers, ShieldCheck, Sparkles } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our mission, vision, values, and engineering philosophy—how Achoque Tech Solutions delivers premium software with speed and quality.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Engineering with taste, delivered with discipline."
        subtitle="Achoque Tech Solutions builds modern software that’s fast, secure, and maintainable. We combine product thinking, senior-level engineering, and premium UX to help teams ship confidently."
      />

      <Section>
        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Card className="p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -inset-24 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 blur-2xl" />
              <div className="relative">
                <Badge variant="soft">Mission</Badge>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  Help modern businesses move faster with better software.
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground md:text-base">
                  We partner with teams to ship production-ready systems that feel
                  premium, perform reliably, and scale without constant rework.
                  That means thoughtful architecture, clean delivery, and clear
                  communication.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <Pill icon={Sparkles} title="Craft" desc="Premium UX + engineering fundamentals." />
                  <Pill icon={Layers} title="Systems" desc="Maintainable, scalable architecture." />
                  <Pill icon={ShieldCheck} title="Trust" desc="Security and reliability by default." />
                  <Pill icon={HeartHandshake} title="Partnership" desc="We act like an extension of your team." />
                </div>
              </div>
            </Card>
          </Reveal>

          <div className="lg:col-span-5 grid gap-5">
            <Reveal>
              <Card className="p-7">
                <Badge variant="soft">Vision</Badge>
                <div className="mt-4 text-base font-semibold tracking-tight">
                  Make senior-quality software accessible.
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  We believe great products shouldn’t require massive teams or
                  expensive overhead—just strong fundamentals, modern tools, and
                  consistent execution.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.04}>
              <Card className="p-7">
                <Badge variant="soft">Engineering philosophy</Badge>
                <div className="mt-4 text-base font-semibold tracking-tight">
                  Build for clarity. Optimize for change.
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Typed boundaries, reusable components, clean APIs, and
                  performance budgets—so your codebase stays fast as it grows.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Modern practices, real-world delivery.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
            We don’t ship “just code.” We ship maintainable systems with a
            process that reduces risk and keeps stakeholders aligned.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Practice
            icon={Code2}
            title="Clean architecture"
            desc="Reusable components, typed contracts, and boundaries that keep complexity under control."
          />
          <Practice
            icon={Sparkles}
            title="Premium UX"
            desc="High-end design, subtle motion, and conversion-focused flows that respect users."
          />
          <Practice
            icon={ShieldCheck}
            title="Secure by default"
            desc="Auth, data handling, and deployment practices aligned with modern security standards."
          />
          <Practice
            icon={Layers}
            title="Performance budgets"
            desc="Core Web Vitals, bundle discipline, and rendering choices that keep experiences fast."
          />
          <Practice
            icon={HeartHandshake}
            title="Transparent communication"
            desc="Weekly demos, clear milestones, and trade-offs explained in plain language."
          />
          <Practice
            icon={Sparkles}
            title="AI, pragmatically"
            desc="Integrate LLMs where they create ROI—guardrailed, evaluated, and production-safe."
          />
        </div>
      </Section>

      <Section>
        <Reveal>
          <Card className="p-8 md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold">Ready to collaborate?</div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-base">
                  Share what you’re building and we’ll follow up with next steps
                  and a clear path to delivery.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/contact#contact-form">
                  Contact us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}

function Pill({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Icon className="h-5 w-5 text-blue-200" />
        </span>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
    </div>
  );
}

function Practice({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <Reveal>
      <Card className="p-7 h-full">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Icon className="h-5 w-5 text-blue-200" />
          </span>
          <div className="text-sm font-semibold">{title}</div>
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
      </Card>
    </Reveal>
  );
}

