import * as React from "react";

import { cn } from "@/lib/utils";

type Variant = "default" | "soft" | "outline";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "bg-white/10 text-foreground border border-white/12",
        variant === "soft" &&
          "bg-gradient-to-r from-blue-500/12 via-indigo-500/10 to-violet-500/12 text-foreground border border-white/10",
        variant === "outline" && "border border-white/14 text-foreground",
        className,
      )}
      {...props}
    />
  );
}

