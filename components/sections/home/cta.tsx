import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HomeCTA() {
  return (
    <Section>
      <Reveal>
        <Card className="relative overflow-hidden p-10 md:p-14">
          <div className="absolute -inset-24 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.18),rgba(167,139,250,0.16),rgba(99,102,241,0.14),rgba(59,130,246,0.18))] blur-2xl animate-gradient-pan [background-size:200%_200%]" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Let’s build something amazing together.
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                Tell us what you’re building. We’ll respond with a clear plan,
                timeline, and a senior-led approach to ship with confidence.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact#contact-form">
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">See capabilities</Link>
              </Button>
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

