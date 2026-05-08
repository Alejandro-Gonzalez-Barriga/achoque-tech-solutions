import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, web and mobile apps, AI integrations, cloud solutions, UI/UX design, APIs, and digital transformation.",
};

const services = [
  {
    title: "Custom Software Development",
    summary:
      "Build internal tools, SaaS platforms, and systems that scale—without sacrificing speed or maintainability.",
    benefits: [
      "Senior-led architecture decisions",
      "Reusable component and API patterns",
      "Performance + security baked in",
    ],
    process: ["Discovery workshop", "Architecture + scope", "Iterative delivery", "Launch + hardening"],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    deliverables: ["Roadmap + milestones", "Production-ready codebase", "CI/CD + environments", "Documentation"],
  },
  {
    title: "Web Development",
    summary:
      "Premium websites and web apps that feel fast, look modern, and convert—optimized for SEO and accessibility.",
    benefits: ["Core Web Vitals focus", "Design-system consistency", "Conversion-first UX"],
    process: ["Wireframes + UX", "Design + motion", "Build + QA", "Deploy + monitor"],
    technologies: ["Next.js", "Tailwind", "Framer Motion", "shadcn/ui"],
    deliverables: ["Responsive UI", "SEO + metadata", "Analytics-ready structure", "Reusable components"],
  },
  {
    title: "Mobile App Development",
    summary:
      "Mobile experiences designed for adoption, retention, and long-term maintainability.",
    benefits: ["Cross-platform velocity", "Offline-first where needed", "App-store readiness"],
    process: ["UX flows", "MVP build", "Release + telemetry", "Iterate"],
    technologies: ["React", "TypeScript", "APIs", "Firebase/AWS"],
    deliverables: ["Mobile app", "Backend integrations", "Release checklist", "Monitoring plan"],
  },
  {
    title: "AI Integrations",
    summary:
      "Practical LLM features with guardrails: chat, search, extraction, summarization, and automation.",
    benefits: ["Evaluation-driven rollout", "Human-in-the-loop UX", "Cost + latency management"],
    process: ["Use-case selection", "Prototype", "Eval + hardening", "Production rollout"],
    technologies: ["OpenAI", "Vector search", "Next.js", "Node.js", "AWS"],
    deliverables: ["AI feature spec", "Prompt + eval suite", "Guardrails", "Production integration"],
  },
  {
    title: "Cloud Solutions",
    summary:
      "Secure deployments, scalable infrastructure, and sensible cost control for production systems.",
    benefits: ["Repeatable environments", "Observability baseline", "Security best practices"],
    process: ["Infra review", "IaC + CI/CD", "Deploy", "Operate + optimize"],
    technologies: ["AWS", "Docker", "PostgreSQL", "GitHub Actions"],
    deliverables: ["Environments", "Deploy pipelines", "Runbooks", "Monitoring & alerts"],
  },
  {
    title: "UI/UX Design",
    summary:
      "High-end interface design and systems that keep teams consistent as they ship faster.",
    benefits: ["Premium visuals", "Accessibility-first patterns", "Consistency and scale"],
    process: ["UX mapping", "Design system", "Prototypes", "Handoff + build support"],
    technologies: ["Figma", "Tailwind", "shadcn/ui", "Framer Motion"],
    deliverables: ["Design system", "UI screens", "Prototype flows", "Handoff artifacts"],
  },
  {
    title: "API Development",
    summary:
      "Clean, secure APIs and integrations—built to evolve without breaking clients.",
    benefits: ["Typed contracts", "Security-minded auth", "Operational reliability"],
    process: ["API spec", "Implementation", "Testing", "Deployment"],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "AWS"],
    deliverables: ["API spec", "Service implementation", "Auth + RBAC", "Docs"],
  },
  {
    title: "Digital Transformation",
    summary:
      "Modernize workflows with automation and data-driven visibility—without boiling the ocean.",
    benefits: ["Pragmatic modernization", "Measurable wins", "Reduced operational load"],
    process: ["Audit + opportunities", "Quick wins", "Platform build", "Continuous improvement"],
    technologies: ["Next.js", "Integrations", "Cloud", "AI where useful"],
    deliverables: ["Modernized workflows", "Dashboards", "Automation", "Playbooks"],
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Capabilities built to ship."
        subtitle="From premium web experiences to scalable backends and practical AI integrations—Achoque Tech Solutions delivers senior-led engineering that moves your business forward."
      />

      <Section>
        <div className="flex flex-col gap-5">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  What we deliver
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                  Each engagement is tailored, but the output is consistent: a
                  clean architecture, premium UX, and production-ready systems.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal>
            <Card className="p-6 md:p-8">
              <Accordion type="multiple" className="w-full">
                {services.map((s) => (
                  <AccordionItem key={s.title} value={s.title}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="text-sm font-semibold">{s.title}</div>
                        <div className="mt-2 text-sm text-muted-foreground">
                          {s.summary}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-4 pt-3 md:grid-cols-2">
                        <Block title="Benefits" items={s.benefits} />
                        <Block title="Deliverables" items={s.deliverables} />
                        <Block title="Process" items={s.process} />
                        <Block title="Technologies" chips items={s.technologies} />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <Card className="p-8 md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold">Not sure where to start?</div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-base">
                  We can scope your project in a short discovery call and follow up
                  with a clear plan, timeline, and an estimate.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/contact#contact-form">
                  Request a proposal <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}

function Block({
  title,
  items,
  chips,
}: {
  title: string;
  items: readonly string[];
  chips?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-xs font-semibold">{title}</div>
      {chips ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      ) : (
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
          {items.map((t) => (
            <li key={t}>• {t}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

