"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/ui";
import { BOOKING_EMAIL, WHATSAPP_LINK, bookingCategories, pricingTiers } from "@/lib/data";
import { smoothEase } from "@/lib/motion";

type BookingFormState = {
  name: string; location: string; category: string;
  ticketCount: string; contactNumber: string; visitDate: string;
};

const initialState: BookingFormState = {
  name: "", location: "", category: bookingCategories[0],
  ticketCount: "", contactNumber: "", visitDate: "",
};

export function BookingSection() {
  const [form, setForm] = useState<BookingFormState>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(c => ({ ...c, [name]: value }));
  };

  const buildWhatsAppLink = () => {
    const msg = [
      "Hi Flora Fantasia! I would like to book tickets:",
      "",
      `Name: ${form.name || "Guest"}`,
      `Location: ${form.location || "Not shared"}`,
      `Date of Visit: ${form.visitDate || "Not selected"}`,
      `Category: ${form.category}`,
      `Number of Tickets: ${form.ticketCount || "Not selected"}`,
      `Contact Number: ${form.contactNumber || "Not shared"}`,
      "",
      "Please confirm my booking.",
    ].join("\n");
    return `https://wa.me/919745239003?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
  };

  const handleEmailBooking = () => {
    const subject = `Flora Fantasia Booking Request - ${form.name || "Guest"}`;
    const body = ["Booking Enquiry", "", `Name: ${form.name}`, `Location: ${form.location}`, `Category: ${form.category}`, `Ticket Count: ${form.ticketCount}`, `Contact: ${form.contactNumber}`, `Date: ${form.visitDate}`].join("\n");
    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="booking"
      className="section-padding relative overflow-hidden noise booking-mesh"
    >
      <div className="shell relative">
        <SectionHeading
          eyebrow="Tickets"
          title="Choose your adventure, then send your booking request."
          text="Pick your date, choose your pass, and confirm instantly on WhatsApp. Open every day from 11am to 6pm."
          eyebrowColor="blue"
        />

        {/* Pricing cards */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.article
              key={tier.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: smoothEase }}
              className="relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1.5 noise md:p-10"
              style={{
                background: tier.featured ? "rgba(212,120,10,0.08)" : "rgba(255,255,255,0.04)",
                border: tier.featured ? "1px solid rgba(212,120,10,0.4)" : "1px solid rgba(255,255,255,0.08)",
                boxShadow: tier.featured ? "0 0 60px rgba(212,120,10,0.15), 0 40px 80px rgba(0,0,0,0.4)" : "0 24px 60px rgba(0,0,0,0.3)",
              }}
            >
              {tier.featured && (
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,120,10,0.8),transparent)]" />
              )}

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p
                    className="uppercase"
                    style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", color: "#D4780A", fontFamily: "var(--font-sans)" }}
                  >
                    {tier.label}
                  </p>
                  {tier.featured && (
                    <span
                      className="rounded-full px-3 py-1.5 text-white"
                      style={{
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        background: "#D4780A",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mt-6 flex items-end gap-2">
                  <span
                    className="font-display font-black text-gradient-orange"
                    style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className="mb-1.5 text-white/30 uppercase"
                    style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", fontFamily: "var(--font-sans)" }}
                  >
                    / person
                  </span>
                </div>

                <p
                  className="mt-5 text-white/55"
                  style={{ fontSize: "0.9rem", lineHeight: "1.8", fontFamily: "var(--font-sans)" }}
                >
                  {tier.note}
                </p>

                {/* WhatsApp button */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-white transition-all duration-200 hover:brightness-110"
                  style={{
                    background: "#D4780A",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    fontFamily: "var(--font-sans)",
                    boxShadow: "0 4px 18px rgba(212,120,10,0.35)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" opacity={0.9}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book via WhatsApp
                </a>
                <p
                  className="mt-3 text-center text-white/30 uppercase"
                  style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.22em", fontFamily: "var(--font-sans)" }}
                >
                  Instant confirmation
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Booking form */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: smoothEase }}
          className="mt-8 grid gap-6 xl:grid-cols-[1fr_1.4fr]"
        >
          {/* Info card */}
          <div
            className="rounded-2xl p-8 noise md:p-10"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: "rgba(212,120,10,0.15)",
                border: "1px solid rgba(212,120,10,0.35)",
                color: "#F5A623",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4780A] animate-pulse" />
              Instant WhatsApp Confirmation
            </span>

            <h3
              className="mt-6 font-display font-black text-white text-balance"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Make your holidays unforgettable with Flora Fantasia.
            </h3>
            <p
              className="mt-5 text-white/55"
              style={{ fontSize: "0.97rem", lineHeight: "1.92", fontFamily: "var(--font-sans)" }}
            >
              Fill in the form and your booking details will be sent directly to our team via WhatsApp.
            </p>
            <p
              className="mt-4 text-white/40"
              style={{ fontSize: "0.9rem", lineHeight: "1.8", fontFamily: "var(--font-sans)" }}
            >
              We confirm every request fast so you can plan with confidence. Open daily 11 AM – 6 PM.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 noise md:p-10"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name"           name="name"          value={form.name}          onChange={handleChange} placeholder="Your name" />
              <Field label="Location"       name="location"      value={form.location}      onChange={handleChange} placeholder="City / Town" />
              <SelectField label="Category" name="category"      value={form.category}      onChange={handleChange} options={bookingCategories} />
              <Field label="Ticket Count"   name="ticketCount"   value={form.ticketCount}   onChange={handleChange} placeholder="Number of tickets" type="number" />
              <Field label="Contact Number" name="contactNumber" value={form.contactNumber} onChange={handleChange} placeholder="Phone number" type="tel" />
              <Field label="Date of Visit"  name="visitDate"     value={form.visitDate}     onChange={handleChange} type="date" />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="submit"
                className="flex items-center gap-2.5 rounded-full px-8 py-3.5 text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
                style={{
                  background: "#D4780A",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  fontFamily: "var(--font-sans)",
                  boxShadow: "0 6px 24px rgba(212,120,10,0.4)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Confirm on WhatsApp
              </button>
              <button
                type="button"
                onClick={handleEmailBooking}
                className="rounded-full px-8 py-3.5 text-white/70 transition-all duration-200 hover:text-white hover:bg-white/08"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Send by Email
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text" }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; type?: string;
}) {
  return (
    <label className="block">
      <span
        className="mb-2.5 block uppercase text-white/35"
        style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", fontFamily: "var(--font-sans)" }}
      >
        {label}
      </span>
      <input
        type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
        className="w-full rounded-xl px-4 py-3.5 text-white outline-none transition"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          fontSize: "0.94rem",
          fontFamily: "var(--font-sans)",
        }}
        onFocus={e => { e.target.style.borderColor = "rgba(27,184,232,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(27,184,232,0.10)"; }}
        onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.10)"; e.target.style.boxShadow = "none"; }}
      />
    </label>
  );
}

function SelectField({ label, name, value, onChange, options }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span
        className="mb-2.5 block uppercase text-white/35"
        style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", fontFamily: "var(--font-sans)" }}
      >
        {label}
      </span>
      <select
        name={name} value={value} onChange={onChange}
        className="w-full rounded-xl px-4 py-3.5 text-white outline-none transition"
        style={{
          background: "#0F2430",
          border: "1px solid rgba(255,255,255,0.10)",
          fontSize: "0.94rem",
          fontFamily: "var(--font-sans)",
        }}
        onFocus={e => { e.target.style.borderColor = "rgba(27,184,232,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(27,184,232,0.10)"; }}
        onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.10)"; e.target.style.boxShadow = "none"; }}
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
