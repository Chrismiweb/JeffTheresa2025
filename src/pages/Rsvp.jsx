// src/pages/Rsvp.jsx
import React, { useState } from "react";

export default function Rsvp() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "",
    message: "",
    company: "", // honeypot (should stay empty)
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.guests === "") e.guests = "Tell us how many guests";
    else if (Number.isNaN(Number(form.guests))) e.guests = "Guests must be a number";
    else if (Number(form.guests) < 0 || Number(form.guests) > 20) e.guests = "0–20 please";
    if (form.company) e.spam = "Spam detected";
    return e;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setSending(true);

      // —— integrate your backend here ——
      // example: await fetch(import.meta.env.VITE_RSVP_ENDPOINT, { method:"POST", body: JSON.stringify(form) })
      await new Promise((r) => setTimeout(r, 900)); // demo delay
      setDone(true);
      setForm({ name: "", email: "", guests: "", message: "", company: "" });
    } catch {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="rsvp" className="relative min-h-[88vh] py-[100px] grid place-items-center overflow-hidden">
      {/* Background image */}
      <img
        src="/image/t and  3.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-3xl bg-white shadow-sm px-6 sm:px-10 py-10 sm:py-12 rounded-none sm:rounded">
        <div className="text-center mb-8">
          <div className="font-script text-2xl sm:text-3xl text-[#BD9458]">
            Will you attend?
          </div>
          <h1 className="mt-2 text-2xl sm:text-3xl tracking-wide">R.S.V.P</h1>
        </div>

        {done ? (
          <div className="text-center py-10">
            <p className="text-lg">Thank you! Your RSVP has been received.</p>
            <button
              className="mt-6 px-6 py-3 border border-gray-300 hover:bg-gray-50"
              onClick={() => setDone(false)}
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            {/* Honeypot (hidden from users) */}
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={onChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="space-y-5">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={onChange}
                error={errors.name}
              />
              <Field
                type="email"
                label="Email"
                name="email"
                value={form.email}
                onChange={onChange}
                error={errors.email}
              />
              <Field
                label="Guests"
                name="guests"
                value={form.guests}
                onChange={onChange}
                error={errors.guests}
                inputMode="numeric"
                placeholder="Number of guests"
              />
              <Textarea
                label="Message"
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
              />
            </div>

            {errors.submit && (
              <p className="text-red-600 text-sm mt-4">{errors.submit}</p>
            )}
            {errors.spam && (
              <p className="text-red-600 text-sm mt-4">{errors.spam}</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-7 inline-flex items-center bg-[#BD9458] cursor-pointer justify-center px-8 py-3 bg-accent text-white tracking-[0.25em] disabled:opacity-60"
            >
              {sending ? "SENDING…" : "SEND"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* — Reusable inputs — */

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  inputMode,
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="sr-only">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        placeholder={placeholder || label}
        className={`w-full border border-gray-200 focus:border-gray-400 outline-none px-4 py-3 placeholder-gray-400 ${
          error ? "ring-1 ring-red-400" : ""
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function Textarea({ label, name, value, onChange, rows = 4 }) {
  const id = `ta-${name}`;
  return (
    <div>
      <label htmlFor={id} className="sr-only">{label}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={label}
        className="w-full border border-gray-200 focus:border-gray-400 outline-none px-4 py-3 placeholder-gray-400"
      />
    </div>
  );
}
