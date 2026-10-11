"use client";

import { useState, type FormEvent } from "react";

const topics = [
  "Product question",
  "Dealer enquiry",
  "Service and warranty",
  "Something else",
] as const;

/**
 * No backend yet: submitting opens the visitor's email app with the message
 * ready to send. Swap for a server action plus an email service when the
 * client is ready (and add a privacy notice for stored enquiries).
 */
export function ContactForm({ email }: { email: string }) {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();

    const subject = `Website enquiry: ${field("topic")}`;
    const body = [
      `Name: ${field("name")}`,
      `Email: ${field("email")}`,
      `Model (if any): ${field("model") || "not given"}`,
      "",
      field("message"),
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} className="glass grid gap-5 rounded-3xl p-6 md:p-8">
      <div className="grid gap-2">
        <label htmlFor="name" className="font-medium text-white">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="glass-field"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="font-medium text-white">
          Your email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="glass-field"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="topic" className="font-medium text-white">
          What is it about?
        </label>
        <select id="topic" name="topic" className="glass-field">
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="model" className="font-medium text-white">
          Model number <span className="font-normal text-[var(--ink-soft)]">(optional)</span>
        </label>
        <input id="model" name="model" type="text" className="glass-field" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="font-medium text-white">
          Your message
        </label>
        <textarea id="message" name="message" required className="glass-field" />
      </div>

      <button
        type="submit"
        className="glass glass-interactive glass-primary min-h-12 rounded-full px-6 text-base font-semibold text-white"
      >
        Write your email
      </button>

      <p aria-live="polite" className="text-sm text-[var(--ink-soft)]">
        {opened
          ? "Your email app should have opened with the message ready. If it did not, write to us directly at the address beside this form."
          : "This opens your email app with your message ready to send."}
      </p>
    </form>
  );
}
