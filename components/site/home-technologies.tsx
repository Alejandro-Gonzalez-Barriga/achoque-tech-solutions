"use client";

import {
  Bot,
  Code2,
  Database,
  Globe,
  Layers,
  Palette,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { IconContainer, RadarEffect } from "@/components/ui/radar-effect";
import { Section } from "@/components/site/section";

const technologies = [
  {
    name: "Next.js",
    icon: Globe,
    position: "left-[10%] top-[18%] md:left-[12%] md:top-[16%]",
  },
  {
    name: "React",
    icon: Layers,
    position: "left-1/2 top-[11%] md:top-[9%]",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    position: "left-[90%] top-[18%] md:left-[88%] md:top-[16%]",
  },
  {
    name: "TypeScript",
    icon: Code2,
    position: "left-[24%] top-[45%] md:left-[25%] md:top-[42%]",
  },
  {
    name: "n8n Automation",
    icon: Workflow,
    position: "left-[76%] top-[45%] md:left-[75%] md:top-[42%]",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    position: "left-[10%] bottom-[20%] md:left-[12%] md:bottom-[18%]",
  },
  {
    name: "AI Agents",
    icon: Bot,
    position: "left-[90%] bottom-[20%] md:left-[88%] md:bottom-[18%]",
  },
] as const;

export function HomeTechnologies() {
  return (
    <Section className="relative overflow-hidden">
      <div className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="soft">Technologies</Badge>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Modern stacks, chosen for reliability.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
            We combine proven product frameworks, typed systems, automation, and
            AI-native tooling to build software that can scale cleanly.
          </p>
        </div>

        <div className="relative mx-auto mt-12 h-[440px] max-w-6xl overflow-hidden border-b border-blue-300/10 md:mt-16 md:h-[560px]">
          <RadarEffect />

          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.name}
                className={`absolute z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-center ${technology.position}`}
              >
                <IconContainer className="h-14 w-14 min-w-0 rounded-2xl bg-blue-500/10 px-0 md:h-16 md:w-16">
                  <Icon className="h-6 w-6 text-blue-200 md:h-7 md:w-7" />
                </IconContainer>
                <span className="max-w-32 text-sm font-semibold leading-5 text-muted-foreground md:max-w-none md:text-base">
                  {technology.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
