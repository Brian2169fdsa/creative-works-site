"use client";

import { useState } from "react";
import Button from "./ui/Button";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center gap-3 text-white">
        <span className="text-lg font-semibold">Thank you for subscribing!</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex gap-3 flex-wrap"
    >
      <input
        type="email"
        placeholder="you@organization.org"
        aria-label="Email address"
        required
        className="flex-1 min-w-[220px] border border-white/30 bg-white/10 text-white placeholder-white/50 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange"
      />
      <Button type="submit" arrow size="lg">
        Subscribe
      </Button>
    </form>
  );
}
