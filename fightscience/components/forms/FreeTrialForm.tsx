"use client";

import { FormEvent } from "react";
import { SITE } from "@/lib/constants";

const inputClass =
  "w-full border border-border-soft bg-bg px-4 py-3 text-text outline-none transition-colors placeholder:text-text-muted focus:border-accent";

export function FreeTrialForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone")}`,
      `Interested in: ${form.get("program")}`,
      `Experience level: ${form.get("experience")}`,
      "",
      "Message:",
      form.get("message"),
    ].join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "Free Trial Request",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border-soft bg-card p-6 md:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-head text-sm tracking-wide text-accent">
            Name
          </span>
          <input className={inputClass} name="name" required type="text" />
        </label>
        <label className="block">
          <span className="mb-2 block font-head text-sm tracking-wide text-accent">
            Email
          </span>
          <input className={inputClass} name="email" required type="email" />
        </label>
        <label className="block">
          <span className="mb-2 block font-head text-sm tracking-wide text-accent">
            Phone
          </span>
          <input className={inputClass} name="phone" type="tel" />
        </label>
        <label className="block">
          <span className="mb-2 block font-head text-sm tracking-wide text-accent">
            Program
          </span>
          <select className={inputClass} name="program" defaultValue="Not sure yet">
            <option>MMA Striking</option>
            <option>Brazilian Jiu-Jitsu</option>
            <option>Women&apos;s BJJ</option>
            <option>Fighter-Fit</option>
            <option>Kids Classes</option>
            <option>MMA Team Training</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block font-head text-sm tracking-wide text-accent">
            Experience Level
          </span>
          <select className={inputClass} name="experience" defaultValue="Beginner">
            <option>Beginner</option>
            <option>Some training</option>
            <option>Experienced</option>
            <option>Returning after time away</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block font-head text-sm tracking-wide text-accent">
            What are you looking for?
          </span>
          <textarea
            className={`${inputClass} min-h-32 resize-y`}
            name="message"
            placeholder="Fitness, self-defense, kids classes, competition, confidence, or just getting started..."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-block border-2 border-accent bg-accent px-9 py-4 font-head text-[1.05rem] font-bold uppercase tracking-[2px] text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent-hover"
      >
        Send Free Trial Request
      </button>
    </form>
  );
}
