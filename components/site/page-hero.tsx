import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="pt-14 md:pt-20">
      <div className="container">
        <Reveal className="max-w-3xl">
          <Badge variant="soft">{eyebrow}</Badge>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-sm leading-6 text-muted-foreground md:text-base">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

