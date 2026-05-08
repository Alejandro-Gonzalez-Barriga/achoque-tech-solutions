import {
  Gauge,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const items = [
  {
    title: "Modern technologies",
    desc: "Next.js, TypeScript, cloud-native tooling, and a clean component architecture.",
    icon: Sparkles,
  },
  {
    title: "Fast delivery",
    desc: "Tight feedback loops, pragmatic scope, and senior-level execution.",
    icon: Gauge,
  },
  {
    title: "Scalable architecture",
    desc: "Maintainable systems designed to evolve without rewrites.",
    icon: Workflow,
  },
  {
    title: "Security-minded",
    desc: "Best practices for auth, data handling, and deployment from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Senior-level engineering",
    desc: "Clear communication, strong fundamentals, and reliable outcomes.",
    icon: GraduationCap,
  },
] as const;

export function HomeWhy() {
  return (
    <Section>
      <Reveal className="max-w-2xl">
        <Badge variant="soft">Why choose us</Badge>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
          Premium engineering without the agency overhead.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
          We focus on outcomes: speed-to-market, reliability, and a strong
          foundation that supports growth.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-12">
        <Card className="lg:col-span-7 p-8 overflow-hidden relative">
          <div className="absolute -inset-24 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 blur-2xl" />
          <div className="relative">
            <div className="text-sm font-semibold">Architecture-first delivery</div>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              We treat codebases like products: clear boundaries, reusable
              patterns, and performance baked in—so shipping new features stays
              fast as you scale.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Mini label="Performance" value="Core Web Vitals focused" />
              <Mini label="DX" value="Clean, typed, documented" />
              <Mini label="SEO" value="Metadata, sitemap, semantics" />
              <Mini label="Accessibility" value="Keyboard + screen-reader friendly" />
            </div>
          </div>
        </Card>

        <div className="lg:col-span-5 grid gap-5">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={idx * 0.03}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-blue-200" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">{it.title}</div>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold tracking-tight">{value}</div>
    </div>
  );
}

