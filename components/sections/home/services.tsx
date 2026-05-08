"use client";

import Link from "next/link";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Layers,
  Palette,
  Smartphone,
  Sparkles,
  Webhook,
} from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Custom Software Development",
    desc: "Senior-led product engineering for internal tools, SaaS, and platforms.",
    icon: Layers,
  },
  {
    title: "Web Development",
    desc: "Fast, accessible, SEO-optimized websites and web apps with modern UX.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile experiences built for performance and retention.",
    icon: Smartphone,
  },
  {
    title: "AI Integrations",
    desc: "LLM features, chat experiences, automations, and evaluation-driven rollout.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud Solutions",
    desc: "Secure deployments, scalable infrastructure, and cost-aware architecture.",
    icon: Cloud,
  },
  {
    title: "UI/UX Design",
    desc: "Premium interfaces, design systems, and conversion-focused flows.",
    icon: Palette,
  },
  {
    title: "API Development",
    desc: "Clean APIs, integrations, event-driven patterns, and robust auth.",
    icon: Webhook,
  },
  {
    title: "Digital Transformation",
    desc: "Modernize legacy workflows with pragmatic automation and data-driven delivery.",
    icon: Sparkles,
  },
] as const;

export function HomeServices() {
  return (
    <Section id="services">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Services built for momentum.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
            We combine product thinking with deep engineering to ship high-quality
            software that performs in the real world.
          </p>
        </Reveal>
        <Reveal>
          <Button asChild variant="outline">
            <Link href="/services">View all services</Link>
          </Button>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, idx) => (
          <Reveal key={s.title} delay={idx * 0.03}>
            <ServiceCard {...s} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ServiceCard({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: React.ElementType;
}) {
  return (
    <Card className="group relative overflow-hidden">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-gradient-to-r from-blue-500/14 via-indigo-500/10 to-violet-500/14 blur-2xl" />
      </div>
      <CardHeader className="relative">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Icon className="h-5 w-5 text-blue-200" />
          </div>
          <motion.div
            aria-hidden="true"
            className={cn(
              "h-10 w-10 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-xl",
              "opacity-0 group-hover:opacity-100 transition-opacity",
            )}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <p className="text-sm leading-6 text-muted-foreground">{desc}</p>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mt-4 text-xs text-muted-foreground">
          Designed for speed • Built for scale
        </div>
      </CardContent>
    </Card>
  );
}

