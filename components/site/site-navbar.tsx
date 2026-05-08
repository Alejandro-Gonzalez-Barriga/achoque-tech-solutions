"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "text-sm transition",
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </Link>
  );
}

export function SiteNavbar() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 60], [0, -2]);
  const borderColor = useTransform(
    scrollY,
    [0, 120],
    ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.16)"],
  );
  const bgColor = useTransform(
    scrollY,
    [0, 120],
    ["rgba(2, 6, 23, 0.12)", "rgba(2, 6, 23, 0.35)"],
  );

  const [open, setOpen] = React.useState(false);

  return (
    <motion.header
      style={{ y }}
      className="sticky top-0 z-50 w-full"
      aria-label="Primary"
    >
      <motion.div
        style={{ backgroundColor: bgColor, borderColor }}
        className="border-b backdrop-blur-xl"
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-violet-500/30 border border-white/10 shadow-glow">
              <Sparkles className="h-4 w-4 text-blue-200" />
            </span>
            <span className="font-semibold tracking-tight">
              {siteConfig.shortName}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild variant="outline" size="sm">
              <Link href="/contact">Book a call</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/contact#contact-form">Get a proposal</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-sm">
                <SheetHeader>
                  <SheetTitle>{siteConfig.name}</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                  <div className="mt-4 grid gap-3">
                    <Button asChild variant="outline">
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        Book a call
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link
                        href="/contact#contact-form"
                        onClick={() => setOpen(false)}
                      >
                        Get a proposal
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}

