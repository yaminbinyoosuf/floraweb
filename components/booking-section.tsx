"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LiquidButton, SectionHeading } from "@/components/ui";
import {
  BOOKING_EMAIL,
  WHATSAPP_LINK,
  bookingCategories,
  pricingTiers,
} from "@/lib/data";

type BookingFormState = {
  name: string;
  location: string;
  category: string;
  ticketCount: string;
  contactNumber: string;
  visitDate: string;
};

const initialState: BookingFormState = {
  name: "",
  location: "",
  category: bookingCategories[0],
  ticketCount: "",
  contactNumber: "",
  visitDate: "",
};

export function BookingSection() {
  const [form, setForm] = useState<BookingFormState>(initialState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Flora Fantasia Booking Request - ${form.name || "Guest"}`;
    const body = [
      "Booking Enquiry",
      "",
      `Name: ${form.name}`,
      `Location: ${form.location}`,
      `Category: ${form.category}`,
      `Ticket Count: ${form.ticketCount}`,
      `Contact Number: ${form.contactNumber}`,
      `Date of Visit: ${form.visitDate}`,
    ].join("\n");

    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="booking" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(89,208,255,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Booking"
          title="Choose your pass, send your request, and lock in the day."
          text="Use WhatsApp for instant confirmation or send a booking enquiry directly from the form below."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.article
              key={tier.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`premium-border rounded-[2rem] p-[1px] ${
                tier.featured
                  ? "bg-[linear-gradient(145deg,rgba(89,208,255,0.22),rgba(255,255,255,0.5))]"
                  : "bg-[linear-gradient(145deg,rgba(255,255,255,0.62),rgba(255,255,255,0.18))]"
              }`}
            >
              <div className="glass-panel h-full rounded-[2rem] p-8">
                <p className="eyebrow">{tier.label}</p>
                <div className="mt-8 flex items-end gap-3">
                  <span className="font-display text-6xl leading-none text-[var(--text-100)]">
                    {tier.price}
                  </span>
                  {tier.featured ? (
                    <span className="mb-2 rounded-full bg-[var(--ink-900)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white">
                      Most Popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-6 text-sm leading-7 text-[var(--text-300)]">{tier.note}</p>
                <LiquidButton href={WHATSAPP_LINK} className="mt-8 w-full">
                  Book instantly via WhatsApp
                </LiquidButton>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[var(--text-500)]">
                  Instant confirmation via WhatsApp
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-8 xl:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="glass-panel premium-border rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow">Book Your Seats Today!</p>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-100)] md:text-4xl">
              Make your holidays unforgettable with Flora Fantasia.
            </h3>
            <p className="mt-6 text-base leading-8 text-[var(--text-300)]">
              Whether you&apos;re planning a family outing, school trip, corporate
              event, or weekend escape, Flora Fantasia offers the perfect setting to
              create lasting memories in the heart of Malappuram.
            </p>
            <p className="mt-6 text-base leading-8 text-[var(--text-300)]">
              This form opens your mail app with all booking details pre-filled,
              matching the enquiry-style flow used on the current park website.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-panel premium-border rounded-[2rem] p-8 md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              <Field
                label="Location"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="City / Town"
              />
              <SelectField
                label="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
                options={bookingCategories}
              />
              <Field
                label="Ticket Count"
                name="ticketCount"
                value={form.ticketCount}
                onChange={handleChange}
                placeholder="Number of tickets"
              />
              <Field
                label="Contact Number"
                name="contactNumber"
                value={form.contactNumber}
                onChange={handleChange}
                placeholder="Phone number"
              />
              <Field
                label="Date of Visit"
                name="visitDate"
                type="date"
                value={form.visitDate}
                onChange={handleChange}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <LiquidButton className="min-w-[220px]">Send Booking Request</LiquidButton>
              <LiquidButton href={WHATSAPP_LINK} variant="secondary">
                Prefer WhatsApp
              </LiquidButton>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-500)]">
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-[1rem] border border-[rgba(16,24,32,0.08)] bg-white/88 px-4 py-3 text-[15px] text-[var(--text-100)] outline-none transition placeholder:text-[var(--text-500)] focus:border-[var(--water-500)]"
        required={type !== "date"}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-500)]">
        {label}
      </span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-[1rem] border border-[rgba(16,24,32,0.08)] bg-white/88 px-4 py-3 text-[15px] text-[var(--text-100)] outline-none transition focus:border-[var(--water-500)]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
