"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "./ui/Button";

const SERVICE_OPTS = [
  "Marketing",
  "SharePoint Setup",
  "Salesforce Build-Outs",
  "IT Services",
  "Staffing Support",
  "Operational Support",
  "Business Process Services",
  "Consulting Services",
  "Licensure Services",
  "Multiple Services",
  "Not Sure Yet",
];

const ORG_TYPES = [
  "Mental Health Clinic",
  "Substance Use Treatment",
  "Outpatient Program",
  "Residential Treatment",
  "Recovery Organization",
  "Community Behavioral Health",
  "Integrated Care",
  "Other",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1-3 months",
  "3-6 months",
  "Just exploring",
];

const BUDGETS = [
  "Under $5k",
  "$5k-$15k",
  "$15k-$50k",
  "$50k+",
  "Not sure yet",
];

const CONTACT_METHODS = ["Email", "Phone", "Either"];

interface FormData {
  firstName: string;
  lastName: string;
  organization: string;
  role: string;
  email: string;
  phone: string;
  website: string;
  orgType: string;
  services: string[];
  timeline: string;
  budget: string;
  message: string;
  contactMethod: string;
  consent: boolean;
}

function InputField({
  label,
  required,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-navy-midnight">
        {label}
        {required && <span className="text-orange ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2.5 text-base text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-navy-midnight">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2.5 text-base text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-orange"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    organization: "",
    role: "",
    email: "",
    phone: "",
    website: "",
    orgType: "",
    services: [],
    timeline: "",
    budget: "",
    message: "",
    contactMethod: "",
    consent: false,
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof FormData) => (value: string | boolean | string[]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleService = (s: string) => {
    set("services")(
      form.services.includes(s)
        ? form.services.filter((x) => x !== s)
        : [...form.services, s]
    );
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl shadow-card p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <Check className="w-8 h-8 text-green-600" aria-hidden="true" />
        </div>
        <h3 className="font-display font-extrabold text-2xl text-navy-midnight">
          Thank you, we received your message.
        </h3>
        <p className="mt-4 text-lg text-gray-600 max-w-sm mx-auto">
          A member of the Creative Works team will review your needs and reach
          out within one business day.
        </p>
        <div className="mt-8">
          <Button href="/" arrow>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl shadow-card p-8 grid gap-5"
    >
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="First name"
          required
          value={form.firstName}
          onChange={set("firstName")}
        />
        <InputField
          label="Last name"
          required
          value={form.lastName}
          onChange={set("lastName")}
        />
      </div>

      {/* Org row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Organization name"
          required
          value={form.organization}
          onChange={set("organization")}
        />
        <InputField
          label="Role / title"
          value={form.role}
          onChange={set("role")}
        />
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Email"
          type="email"
          required
          value={form.email}
          onChange={set("email")}
        />
        <InputField
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={set("phone")}
        />
      </div>

      {/* Website and org type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Website"
          type="url"
          placeholder="https://"
          value={form.website}
          onChange={set("website")}
        />
        <SelectField
          label="Organization type"
          options={ORG_TYPES}
          placeholder="Select one"
          value={form.orgType}
          onChange={set("orgType")}
        />
      </div>

      {/* Services */}
      <div>
        <label className="text-sm font-semibold text-navy-midnight block mb-3">
          Services you&apos;re interested in
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {SERVICE_OPTS.map((o) => {
            const on = form.services.includes(o);
            return (
              <button
                type="button"
                key={o}
                onClick={() => toggleService(o)}
                className={`flex items-center gap-2.5 px-4 py-3 text-left rounded-md border text-sm font-semibold transition-all ${
                  on
                    ? "bg-orange/8 border-orange text-navy-midnight"
                    : "bg-white border-gray-300 text-navy-midnight hover:border-gray-400"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border ${
                    on ? "bg-orange border-orange" : "bg-white border-gray-300"
                  }`}
                >
                  {on && <Check className="w-3 h-3 text-white" aria-hidden="true" />}
                </span>
                {o}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline and budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SelectField
          label="Timeline"
          options={TIMELINES}
          placeholder="Select one"
          value={form.timeline}
          onChange={set("timeline")}
        />
        <SelectField
          label="Budget range (optional)"
          options={BUDGETS}
          placeholder="Select one"
          value={form.budget}
          onChange={set("budget")}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-navy-midnight">
          How can we help? <span className="text-orange">*</span>
        </label>
        <textarea
          rows={5}
          required
          placeholder="Tell us a little about your organization and what you're looking for."
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2.5 text-base text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-orange resize-y"
        />
      </div>

      {/* Contact method */}
      <SelectField
        label="Preferred contact method"
        options={CONTACT_METHODS}
        placeholder="Select one"
        value={form.contactMethod}
        onChange={set("contactMethod")}
      />

      {/* Consent */}
      <label className="flex gap-3 items-start cursor-pointer text-sm text-gray-600">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => set("consent")(e.target.checked)}
          className="w-5 h-5 mt-0.5 accent-orange flex-shrink-0"
        />
        <span>
          I agree to be contacted by Creative Works about my inquiry. We respect
          your privacy and never share your information.
        </span>
      </label>

      <div>
        <Button
          type="submit"
          arrow
          size="lg"
          disabled={!form.consent || submitting}
        >
          {submitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
