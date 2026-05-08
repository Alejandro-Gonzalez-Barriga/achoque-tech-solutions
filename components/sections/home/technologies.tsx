import {
  Box,
  Braces,
  Cloud,
  Cpu,
  Database,
  Flame,
  Layers,
  Package,
  Sparkles,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const tech = [
  { name: "React", icon: Sparkles },
  { name: "Next.js", icon: Layers },
  { name: "TypeScript", icon: Braces },
  { name: "Node.js", icon: Package },
  { name: "AWS", icon: Cloud },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Box },
  { name: "OpenAI", icon: Cpu },
  { name: "Firebase", icon: Flame },
  { name: "Tailwind", icon: Sparkles },
] as const;

export function HomeTechnologies() {
  return (
    <Section>
      <Reveal className="max-w-2xl">
        <Badge variant="soft">Technologies</Badge>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
          Modern stacks, chosen for reliability.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
          We build with proven tools and a clean architecture so your product is
          fast today—and maintainable tomorrow.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tech.map((t, idx) => {
          const Icon = t.icon;
          return (
            <Reveal key={t.name} delay={idx * 0.02}>
              <Card className="p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-blue-200" />
                  </span>
                  <div className="text-sm font-semibold">{t.name}</div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

