import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

type Variant = "default" | "secondary" | "outline" | "ghost" | "link";
type Size = "default" | "sm" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  default:
    "bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:brightness-110",
  secondary:
    "bg-white/10 text-foreground hover:bg-white/14 border border-white/10",
  outline:
    "border border-white/12 bg-transparent text-foreground hover:bg-white/7",
  ghost: "bg-transparent text-foreground hover:bg-white/7",
  link: "bg-transparent text-foreground underline-offset-4 hover:underline",
};

const sizeClasses: Record<Size, string> = {
  default: "h-11 px-5",
  sm: "h-9 px-4 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-11 w-11",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
          "active:translate-y-[1px]",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

