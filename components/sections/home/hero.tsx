"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const bullets = [
  "Senior-level engineering",
  "AI + automation, pragmatically applied",
  "Scalable architecture and clean delivery",
] as const;

export function HomeHero() {
  return (
    <section className="pt-16 md:pt-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="soft" className="mb-5">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                Software Development • Technology Consulting • AI Integrations
              </Badge>
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                Build{" "}
                <span className="text-gradient-accent">
                  scalable software solutions
                </span>{" "}
                for modern businesses.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground md:text-lg">
                Achoque Tech Solutions partners with founders and teams to design,
                build, and ship premium web, mobile, cloud, and AI-enabled
                products—fast, secure, and production-ready.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact#contact-form">
                    Get a proposal <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">Explore services</Link>
                </Button>
              </div>

              <ul className="mt-8 grid gap-3 text-sm text-muted-foreground">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/6 border border-white/10">
                      <Check className="h-4 w-4 text-blue-300" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-r from-blue-500/15 via-indigo-500/10 to-violet-500/15 blur-2xl" />
              <div className="relative rounded-[28px] border border-white/12 bg-black/35 p-6 shadow-glow backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-2">delivery.ts</span>
                  </div>
                  <Badge variant="outline" className="hidden sm:inline-flex">
                    Production-ready
                  </Badge>
                </div>

                <div className="mt-6 grid gap-4">
                  <CodeLine i={1}>
                    <Token type="keyword">const</Token>{" "}
                    <Token type="variable">roadmap</Token>{" "}
                    <Token type="operator">=</Token>{" "}
                    <Token type="punctuation">[</Token>
                    <Token type="string">{"'Discovery'"}</Token>
                    <Token type="punctuation">,</Token>{" "}
                    <Token type="string">{"'Build'"}</Token>
                    <Token type="punctuation">,</Token>{" "}
                    <Token type="string">{"'Launch'"}</Token>
                    <Token type="punctuation">];</Token>
                  </CodeLine>
                  <CodeLine i={2}>
                    <Token type="keyword">const</Token>{" "}
                    <Token type="variable">stack</Token>{" "}
                    <Token type="operator">=</Token>{" "}
                    <Token type="punctuation">[</Token>
                    <Token type="string">{"'Next.js'"}</Token>
                    <Token type="punctuation">,</Token>{" "}
                    <Token type="string">{"'TypeScript'"}</Token>
                    <Token type="punctuation">,</Token>{" "}
                    <Token type="string">{"'AWS'"}</Token>
                    <Token type="punctuation">,</Token>{" "}
                    <Token type="string">{"'OpenAI'"}</Token>
                    <Token type="punctuation">];</Token>
                  </CodeLine>
                  <CodeLine i={3}>
                    <Token type="keyword">export</Token>{" "}
                    <Token type="keyword">function</Token>{" "}
                    <Token type="function">ship</Token>
                    <Token type="punctuation">(</Token>
                    <Token type="variable">value</Token>
                    <Token type="punctuation">)</Token>{" "}
                    <Token type="punctuation">{"{"}</Token>{" "}
                    <Token type="keyword">return</Token>{" "}
                    <Token type="variable">value</Token>{" "}
                    <Token type="operator">*</Token>{" "}
                    <Token type="variable">velocity</Token>
                    <Token type="punctuation">;</Token>{" "}
                    <Token type="punctuation">{"}"}</Token>
                  </CodeLine>
                  <CodeLine i={4} muted>
                    <Token type="comment">
                      {"// measurable outcomes, not just code"}
                    </Token>
                  </CodeLine>
                  <div className="grid gap-3 pt-2 sm:grid-cols-2">
                    <Metric label="Lead time" value="2–6 weeks" />
                    <Metric label="Quality" value="Senior-led" />
                    <Metric label="Architecture" value="Scalable" />
                    <Metric label="Security" value="Best practices" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeLine({
  i,
  children,
  muted,
}: {
  i: number;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div className={cn("flex gap-4 font-mono text-xs", muted && "opacity-80")}>
      <span className="w-6 text-right text-muted-foreground">{i}</span>
      <span className="min-w-0 flex-1 break-words text-foreground/90">
        {children}
      </span>
    </div>
  );
}

function Token({
  type,
  children,
}: {
  type: "keyword" | "variable" | "operator" | "punctuation" | "string" | "function" | "comment";
  children: React.ReactNode;
}) {
  const classes = {
    keyword: "text-blue-300",
    variable: "text-slate-100",
    operator: "text-indigo-200",
    punctuation: "text-slate-400",
    string: "text-emerald-300",
    function: "text-cyan-300",
    comment: "text-slate-500 italic",
  } satisfies Record<typeof type, string>;

  return <span className={classes[type]}>{children}</span>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold tracking-tight">{value}</div>
    </div>
  );
}
