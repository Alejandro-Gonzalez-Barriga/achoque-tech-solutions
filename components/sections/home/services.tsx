"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Code2,
  Lightbulb,
  Palette,
  Sparkles,
  Webhook,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { cn } from "@/lib/utils";

type Service = {
  id: number;
  title: string;
  desc: string;
  outcome: string;
  icon: React.ElementType;
  relatedIds: number[];
  energy: number;
};

const services: Service[] = [
  {
    id: 1,
    title: "AI Integrations",
    desc: "Production LLM features, agent workflows, retrieval, evaluation, and guardrails.",
    outcome: "Ship AI that is useful, measurable, and maintainable.",
    icon: Bot,
    relatedIds: [2, 4, 5],
    energy: 96,
  },
  {
    id: 2,
    title: "Workflow Automation",
    desc: "Automations that remove manual steps across operations, sales, support, and data flows.",
    outcome: "Turn repeated work into reliable systems.",
    icon: Workflow,
    relatedIds: [1, 4, 5],
    energy: 90,
  },
  {
    id: 3,
    title: "Full-Stack Dev",
    desc: "Modern web apps, SaaS products, dashboards, and internal tools built end to end.",
    outcome: "Move from idea to production-ready software.",
    icon: Code2,
    relatedIds: [5, 6, 4],
    energy: 94,
  },
  {
    id: 4,
    title: "Tech Consulting",
    desc: "Architecture, roadmap, vendor, security, and delivery guidance for high-leverage decisions.",
    outcome: "Make better technical choices before they get expensive.",
    icon: Lightbulb,
    relatedIds: [1, 2, 3],
    energy: 86,
  },
  {
    id: 5,
    title: "API Systems",
    desc: "Typed APIs, integrations, webhooks, auth, background jobs, and service boundaries.",
    outcome: "Connect products and workflows without brittle glue.",
    icon: Webhook,
    relatedIds: [1, 2, 3],
    energy: 88,
  },
  {
    id: 6,
    title: "UI/UX Design",
    desc: "Premium interfaces, design systems, prototypes, and conversion-focused product flows.",
    outcome: "Give complex software a clear, polished experience.",
    icon: Palette,
    relatedIds: [3, 4],
    energy: 84,
  },
];

export function HomeServices() {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = React.useState(0);
  const [autoRotate, setAutoRotate] = React.useState(true);
  const [radius, setRadius] = React.useState(210);
  const [centralLabel, setCentralLabel] = React.useState<string | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const orbitRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      setIsMobile(mobile);
      setRadius(mobile ? 120 : width < 1024 ? 165 : 215);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  React.useEffect(() => {
    if (!autoRotate) return;

    const interval = window.setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.22) % 360).toFixed(3)));
    }, 50);

    return () => window.clearInterval(interval);
  }, [autoRotate]);

  const activeService = services.find((service) => service.id === expandedId) ?? null;

  const centerViewOnNode = (serviceId: number) => {
    const nodeIndex = services.findIndex((service) => service.id === serviceId);
    const targetAngle = (nodeIndex / services.length) * 360;
    const activeAngle = isMobile ? 270 : 270;
    setRotationAngle(activeAngle - targetAngle);
  };

  const toggleService = (serviceId: number) => {
    setExpandedId((current) => {
      const next = current === serviceId ? null : serviceId;
      setAutoRotate(next === null);
      setCentralLabel(next ? services.find((service) => service.id === next)?.title ?? null : null);
      if (next !== null) centerViewOnNode(serviceId);
      return next;
    });
  };

  const isRelatedToActive = (serviceId: number) => {
    if (expandedId === null) return false;
    const current = services.find((service) => service.id === expandedId);
    return current?.relatedIds.includes(serviceId) ?? false;
  };

  return (
    <Section id="services" className="overflow-hidden">
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

      <Reveal>
        <div
          ref={orbitRef}
          className="relative mt-10 min-h-[620px] overflow-hidden rounded-[28px] border border-white/10 bg-black/15 px-4 py-8 shadow-glow backdrop-blur-sm sm:min-h-[680px] sm:px-6 lg:min-h-[720px]"
          onClick={() => {
            setExpandedId(null);
            setCentralLabel(null);
            setAutoRotate(true);
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(59,130,246,0.16),transparent_42%),radial-gradient(circle_at_50%_58%,rgba(99,102,241,0.12),transparent_38%)]" />
          <div className="absolute inset-0 opacity-[0.25] [background-size:28px_28px] bg-grid-fade [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />

          <div className="relative mx-auto flex min-h-[560px] max-w-5xl items-center justify-center sm:min-h-[610px] lg:min-h-[650px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 rounded-full border border-white/10"
              style={{
                width: radius * 2,
                height: radius * 2,
                transform: "translate(-50%, -50%)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 rounded-full border border-blue-300/10"
              style={{
                width: radius * 2 + 78,
                height: radius * 2 + 78,
                transform: "translate(-50%, -50%)",
              }}
            />

            <CentralHub activeService={activeService} centralLabel={centralLabel} />

            {services.map((service, index) => {
              const position = calculateNodePosition(
                index,
                services.length,
                rotationAngle,
                radius,
              );
              const isExpanded = expandedId === service.id;
              const isRelated = isRelatedToActive(service.id);

              return (
                <ServiceNode
                  key={service.id}
                  service={service}
                  position={position}
                  isExpanded={isExpanded}
                  isRelated={isRelated}
                  isMobile={isMobile}
                  onToggle={() => toggleService(service.id)}
                  onRelatedClick={toggleService}
                />
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function calculateNodePosition(
  index: number,
  total: number,
  rotationAngle: number,
  radius: number,
) {
  const angle = ((index / total) * 360 + rotationAngle) % 360;
  const radian = (angle * Math.PI) / 180;
  const x = Number((radius * Math.cos(radian)).toFixed(3));
  const y = Number((radius * Math.sin(radian)).toFixed(3));
  const depth = (1 + Math.sin(radian)) / 2;

  return {
    x,
    y,
    angle: Number(angle.toFixed(3)),
    zIndex: Math.round(80 + 70 * depth),
    opacity: Number(Math.max(0.48, Math.min(1, 0.52 + 0.48 * depth)).toFixed(3)),
  };
}

function CentralHub({
  activeService,
  centralLabel,
}: {
  activeService: Service | null;
  centralLabel: string | null;
}) {
  const Icon = activeService?.icon ?? Sparkles;

  return (
    <div className="absolute left-1/2 top-1/2 z-40 w-[min(78vw,21rem)] -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-premium shadow-glow sm:h-28 sm:w-28">
        <div className="absolute inset-[-10px] rounded-full border border-blue-300/20 animate-ping" />
        <div className="absolute inset-[-22px] rounded-full border border-white/10" />
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 backdrop-blur-xl sm:h-16 sm:w-16">
          <Icon className="h-7 w-7 text-blue-100" />
        </div>
      </div>

      {activeService ? (
        <div className="glass mt-6 rounded-2xl px-5 py-4 shadow-[0_20px_70px_rgba(2,6,23,0.32)]">
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-blue-200/80">
            <Sparkles className="h-3.5 w-3.5" />
            Selected capability
          </div>
          <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
            {centralLabel}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {activeService.outcome}
          </p>
        </div>
      ) : null}
    </div>
  );
}

function ServiceNode({
  service,
  position,
  isExpanded,
  isRelated,
  isMobile,
  onToggle,
  onRelatedClick,
}: {
  service: Service;
  position: ReturnType<typeof calculateNodePosition>;
  isExpanded: boolean;
  isRelated: boolean;
  isMobile: boolean;
  onToggle: () => void;
  onRelatedClick: (serviceId: number) => void;
}) {
  const Icon = service.icon;
  const relatedServices = services.filter((item) => service.relatedIds.includes(item.id));
  const hideOrbitNode = isExpanded && isMobile;

  return (
    <div
      className="absolute left-1/2 top-1/2 cursor-pointer transition-all duration-700"
      style={{
        transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
        zIndex: isExpanded ? 180 : position.zIndex,
        opacity: isExpanded ? 1 : position.opacity,
      }}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute left-1/2 top-1/2 rounded-full transition-opacity duration-300",
          hideOrbitNode && "hidden",
          isExpanded || isRelated ? "opacity-100 animate-pulse" : "opacity-0",
        )}
        style={{
          width: service.energy * 0.48 + 34,
          height: service.energy * 0.48 + 34,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(96,165,250,0.26) 0%, rgba(99,102,241,0.12) 38%, transparent 72%)",
        }}
      />

      <button
        type="button"
        aria-expanded={isExpanded}
        className={cn(
          "relative flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 sm:h-14 sm:w-14",
          hideOrbitNode && "hidden",
          isExpanded
            ? "scale-110 border-blue-200/70 bg-blue-400/20 text-blue-50 shadow-glow"
            : isRelated
              ? "border-blue-200/50 bg-blue-400/15 text-blue-100"
              : "border-white/15 bg-white/[0.06] text-blue-100 hover:border-blue-200/40 hover:bg-white/10",
        )}
      >
        <Icon className="h-5 w-5" />
      </button>

      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-14 w-24 -translate-x-1/2 text-center text-[10px] font-semibold leading-3 text-muted-foreground/80 drop-shadow transition-all duration-300 sm:top-16 sm:w-36 sm:text-xs sm:leading-4",
          hideOrbitNode && "hidden",
          isExpanded && "text-white",
          isRelated && "text-blue-100",
        )}
      >
        {service.title}
      </div>

      {isExpanded ? (
        <div
          className="glass bg-premium absolute left-1/2 top-[-5rem] w-[calc(100vw-3rem)] -translate-x-1/2 rounded-2xl shadow-[0_24px_90px_rgba(2,6,23,0.75)] sm:top-24 sm:w-80 md:w-96"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="absolute -top-16 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl border border-blue-200/70 bg-blue-400/20 text-blue-50 shadow-glow sm:hidden">
            <Icon className="h-5 w-5" />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-background/90" />
          <CardContent className="relative p-6">
            <div className="absolute -top-4 left-1/2 h-4 w-px -translate-x-1/2 bg-gradient-to-b from-blue-200/60 to-transparent" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-blue-200/70">
                  Service
                </div>
                <h3 className="mt-1 text-base font-semibold tracking-tight">
                  {service.title}
                </h3>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/7">
                <Icon className="h-5 w-5 text-blue-100" />
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.desc}</p>

            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Delivery fit</span>
                <span className="font-mono text-blue-100">{service.energy}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"
                  style={{ width: `${service.energy}%` }}
                />
              </div>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Connected work
              </div>
              <div className="flex flex-wrap gap-2">
                {relatedServices.map((related) => (
                  <Button
                    key={related.id}
                    type="button"
                    variant="outline"
                    className="h-auto min-h-8 flex-wrap justify-start gap-2 whitespace-normal px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
                    onClick={(event) => {
                      event.stopPropagation();
                      onRelatedClick(related.id);
                    }}
                  >
                    {related.title}
                    <ArrowRight className="h-3 w-3 shrink-0" />
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </div>
      ) : null}
    </div>
  );
}
