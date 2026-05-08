import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/20">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-lg font-semibold tracking-tight">
              {siteConfig.name}
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Premium engineering for teams that move fast. We design, build, and
              ship scalable software—web, mobile, cloud, and AI—without the
              agency bloat.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-sm font-semibold">Company</div>
            <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <Link className="hover:text-foreground" href="/services">
                Services
              </Link>
              <Link className="hover:text-foreground" href="/about">
                About
              </Link>
              <Link className="hover:text-foreground" href="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="text-sm font-semibold">Get in touch</div>
            <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <a className="hover:text-foreground" href={`mailto:${siteConfig.links.email}`}>
                {siteConfig.links.email}
              </a>
              <a
                className="inline-flex items-center gap-1 hover:text-foreground"
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-foreground" href="/contact">
              Privacy
            </Link>
            <Link className="hover:text-foreground" href="/contact">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

