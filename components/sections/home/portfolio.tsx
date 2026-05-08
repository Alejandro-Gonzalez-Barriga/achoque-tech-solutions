import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const cases = [
  {
    title: "OpsPulse — Logistics Visibility Platform",
    industry: "Logistics",
    challenge:
      "Fragmented data across vendors made ETA accuracy unreliable and support costs high.",
    solution:
      "Unified event ingestion + a real-time dashboard with alerting, role-based access, and audit trails.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    impact: ["34% fewer support tickets", "2× faster incident response", "99.9% uptime target"],
  },
  {
    title: "FinPilot — AI Document Automation",
    industry: "FinTech",
    challenge:
      "Manual review of financial documents slowed onboarding and increased compliance risk.",
    solution:
      "LLM-assisted extraction with human-in-the-loop review, evaluations, and a secure processing pipeline.",
    tech: ["OpenAI", "Next.js", "TypeScript", "AWS", "MongoDB"],
    impact: ["65% faster onboarding", "Audit-ready workflow", "Lower operational load"],
  },
  {
    title: "ClinicFlow — Mobile Scheduling + CRM",
    industry: "Healthcare",
    challenge:
      "No-show rates and fragmented communications reduced appointment utilization.",
    solution:
      "A mobile-first scheduling experience with automated reminders, segmentation, and analytics.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind", "API Integrations"],
    impact: ["18% fewer no-shows", "Higher patient satisfaction", "Better cohort insights"],
  },
] as const;

export function HomePortfolio() {
  const [a, b, c] = cases;
  return (
    <Section>
      <Reveal className="max-w-2xl">
        <Badge variant="soft">Portfolio</Badge>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
          Case studies that feel like real shipping.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
          Fictional—but modeled after how successful teams build: tight scope,
          measurable impact, and a clean technical foundation.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <CaseCard c={a} featured />
        </Reveal>
        <div className="lg:col-span-5 grid gap-5">
          <Reveal>
            <CaseCard c={b} />
          </Reveal>
          <Reveal delay={0.05}>
            <CaseCard c={c} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function CaseCard({
  c,
  featured,
}: {
  c: (typeof cases)[number];
  featured?: boolean;
}) {
  return (
    <Card className="relative overflow-hidden p-7">
      <div className="absolute -inset-24 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 blur-2xl" />
      <div className="relative">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="text-xs text-muted-foreground">{c.industry}</div>
            <div className="mt-2 text-base font-semibold tracking-tight md:text-lg">
              {c.title}
            </div>
          </div>
          <HoverCard openDelay={180}>
            <HoverCardTrigger asChild>
              <button className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-muted-foreground hover:text-foreground">
                Details <ArrowUpRight className="h-4 w-4" />
              </button>
            </HoverCardTrigger>
            <HoverCardContent align="end">
              <div className="text-xs text-muted-foreground">Technologies</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {c.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold">Challenge</div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {c.challenge}
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold">Solution</div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {c.solution}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs font-semibold">Business impact</div>
          <div className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
            {c.impact.map((i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-black/10 px-3 py-2">
                {i}
              </div>
            ))}
          </div>
        </div>

        {featured ? (
          <div className="mt-6 text-xs text-muted-foreground">
            Featured build • Delivered with senior-led milestones
          </div>
        ) : null}
      </div>
    </Card>
  );
}

