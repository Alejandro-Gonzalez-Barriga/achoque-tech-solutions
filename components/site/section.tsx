import * as React from "react";

import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  id,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

