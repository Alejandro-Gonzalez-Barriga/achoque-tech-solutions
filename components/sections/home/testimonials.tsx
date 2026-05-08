import { Star } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "They brought senior-level clarity to every decision—architecture, UX, and delivery. We shipped faster than expected and the codebase is a joy to extend.",
    name: "Jordan M.",
    title: "Founder, B2B SaaS",
  },
  {
    quote:
      "The team nailed the balance between speed and quality. Weekly demos kept stakeholders aligned and the launch went smoothly with great performance metrics.",
    name: "Alyssa R.",
    title: "Product Lead, FinTech",
  },
  {
    quote:
      "Our AI feature rollout was handled responsibly—evaluation, guardrails, and a pragmatic UX. We avoided the hype and delivered real productivity gains.",
    name: "Miguel S.",
    title: "CTO, Services Marketplace",
  },
] as const;

export function HomeTestimonials() {
  return (
    <Section>
      <Reveal className="max-w-2xl">
        <Badge variant="soft">Testimonials</Badge>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
          Trusted by teams that care about quality.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
          Placeholder testimonials to demonstrate real-world social proof layout.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <Reveal key={t.name} delay={idx * 0.03}>
            <Card className="p-7 h-full">
              <div className="flex items-center gap-1 text-blue-200/90">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-foreground/90">
                “{t.quote}”
              </p>
              <div className="mt-6 text-sm font-semibold">{t.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{t.title}</div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

