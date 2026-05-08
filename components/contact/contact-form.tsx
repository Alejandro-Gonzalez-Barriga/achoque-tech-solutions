"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";

type State = "idle" | "loading" | "success";

export function ContactForm() {
  const [state, setState] = React.useState<State>("idle");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  }

  const disabled = state !== "idle";

  return (
    <Card className="p-7 md:p-9">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-base font-semibold tracking-tight">
            Tell us about your project
          </div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            We’ll respond with next steps and a clear plan. This is a placeholder
            form (no backend wired yet).
          </p>
        </div>
        <div className="hidden md:flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Mail className="h-5 w-5 text-blue-200" />
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-7 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            required
            disabled={disabled}
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <Input
            required
            type="email"
            disabled={disabled}
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
        </div>
        <Input
          disabled={disabled}
          placeholder="Company (optional)"
          value={form.company}
          onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
        />
        <Textarea
          required
          disabled={disabled}
          placeholder="What are you building? Timeline, scope, and goals..."
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-muted-foreground">
            Prefer email?{" "}
            <span className="text-foreground/90">hello@achoquetechsolutions.com</span>
          </div>
          <Button type="submit" size="lg" disabled={disabled}>
            {state === "loading" ? (
              <>
                <Spinner className="mr-2" /> Sending
              </>
            ) : state === "success" ? (
              "Sent — we’ll be in touch"
            ) : (
              <>
                Send message <Send className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        {state === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-muted-foreground"
          >
            Thanks! This demo form doesn’t send emails yet—wire it to your
            preferred provider (Resend, SendGrid, SES) when ready.
          </motion.div>
        ) : null}
      </form>
    </Card>
  );
}

