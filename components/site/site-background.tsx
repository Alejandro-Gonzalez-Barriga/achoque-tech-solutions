"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function SiteBackground({ className }: { className?: string }) {
  React.useEffect(() => {
    function onMove(e: PointerEvent) {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--x", `${x}%`);
      document.documentElement.style.setProperty("--y", `${y}%`);
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 -z-10 bg-premium", className)}
    >
      <div className="absolute inset-0 opacity-[0.35] [background-size:28px_28px] bg-grid-fade [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      <div className="absolute inset-x-0 top-[-180px] h-[360px] bg-gradient-to-r from-blue-500/0 via-blue-500/18 to-violet-500/0 blur-3xl animate-pulse-soft" />
    </div>
  );
}

