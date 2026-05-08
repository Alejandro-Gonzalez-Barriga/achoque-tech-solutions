import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "Align on goals, constraints, users, and success metrics. Reduce risk early.",
  },
  {
    n: "02",
    title: "Strategy",
    desc: "Define architecture, scope, milestones, and a delivery plan that matches your runway.",
  },
  {
    n: "03",
    title: "Development",
    desc: "Build in tight iterations with weekly demos, clean code, and strong testing habits.",
  },
  {
    n: "04",
    title: "Deployment",
    desc: "Ship with CI/CD, observability, and performance budgets for a smooth launch.",
  },
  {
    n: "05",
    title: "Support",
    desc: "Stabilize, iterate, and extend—so your product keeps improving post-launch.",
  },
] as const;

export function HomeProcess() {
  return (
    <Section>
      <Reveal className="max-w-2xl">
        <Badge variant="soft">Process</Badge>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
          A delivery system that stays predictable.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
          Clear communication, milestones you can trust, and a tight loop between
          product and engineering.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, idx) => (
          <Reveal key={s.n} delay={idx * 0.03}>
            <Card className="p-6 h-full">
              <div className="text-xs font-semibold text-blue-200/90">
                {s.n}
              </div>
              <div className="mt-3 text-sm font-semibold">{s.title}</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {s.desc}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

