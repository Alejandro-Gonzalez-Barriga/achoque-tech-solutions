"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type CircleProps = {
  size: number | string;
  className?: string;
};

export function Circle({ size, className }: CircleProps) {
  return (
    <div
      aria-hidden="true"
      className={twMerge(
        "absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10",
        className,
      )}
      style={{ height: size, width: size }}
    />
  );
}

export function Radar({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={twMerge(
        "absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <motion.div
        className="absolute bottom-0 left-1/2 h-[min(46vw,510px)] w-px origin-bottom bg-gradient-to-t from-blue-500/0 via-blue-500/80 to-blue-500/0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-[min(46vw,510px)] w-[min(46vw,510px)] origin-bottom bg-[conic-gradient(from_270deg_at_0%_100%,rgba(59,130,246,0.18),rgba(59,130,246,0.015),transparent_32deg)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
      />
    </div>
  );
}

export function IconContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={twMerge(
        "glass relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-foreground shadow-[0_18px_60px_rgba(2,6,23,0.28)] md:h-16 md:w-16",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function RadarEffect({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={twMerge(
        "pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden",
        className,
      )}
    >
      <Circle size="clamp(160px, 18vw, 220px)" className="border-blue-300/15" />
      <Circle size="clamp(260px, 30vw, 360px)" className="border-white/10" />
      <Circle size="clamp(360px, 42vw, 500px)" className="border-blue-300/15" />
      <Circle size="clamp(460px, 54vw, 640px)" className="border-white/10" />
      <Circle size="clamp(560px, 66vw, 780px)" className="border-blue-300/15" />
      <Circle size="clamp(660px, 78vw, 920px)" className="border-white/10" />
      <div className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl" />
      <Radar />
    </div>
  );
}
