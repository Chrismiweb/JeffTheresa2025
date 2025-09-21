// src/pages/Rsvp.jsx
import React, { useState } from "react";

export default function Rsvp() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email:"",
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

      const endpoint = import.meta.env.VITE_RSVP_ENDPOINT;
      if (!endpoint) {
        throw new Error("Missing VITE_RSVP_ENDPOINT");
      }

      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        guests: Number(form.guests),
        message: form.message.trim(),
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
         redirect: "manual",
      });
      const isRedirect = res.type === "opaqueredirect" || (res.status >= 300 && res.status < 400);
      const ok = res.ok || isRedirect;
      // Try to read JSON either way
      let data = null;
      try {
        const ct = res.headers.get("content-type") || "";
        if (ct.includes("application/json")) data = await res.json();
      } catch { /* ignore parse errors */ }

      if (!ok) {
        const serverErrors = data?.errors || {};
        const message = data?.message || `Failed to submit (HTTP ${res.status})`;
        setErrors((prev) => ({ ...prev, ...serverErrors, submit: message }));
        return;
      }

      setDone(true);
      setForm({ name: "", email: "", guests: "", message: "", company: "" });
      setErrors({});
    } catch (err) {
      setErrors({ submit: err.message || "Something went wrong. Please try again." });
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


// // src/pages/Rsvp.jsx
// import React, { useState } from "react";

// export default function Rsvp() {
//   const [sending, setSending] = useState(false);
//   const [done, setDone] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     guests: "",
//     message: "",
//     company: "", // honeypot (should stay empty)
//   });

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setForm((s) => ({ ...s, [name]: value }));
//   };

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = "Please enter your name";
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
//       e.email = "Enter a valid email";
//     if (form.guests === "") e.guests = "Tell us how many guests";
//     else if (Number.isNaN(Number(form.guests))) e.guests = "Guests must be a number";
//     else if (Number(form.guests) < 0 || Number(form.guests) > 20) e.guests = "0–20 please";
//     if (form.company) e.spam = "Spam detected";
//     return e;
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault(); // block native navigation
//     const v = validate();
//     setErrors(v);
//     if (Object.keys(v).length) return;

//     try {
//       setSending(true);

//       const endpoint = (import.meta.env.VITE_RSVP_ENDPOINT || "").trim();
//       if (!endpoint) throw new Error("Missing VITE_RSVP_ENDPOINT");

//       const payload = {
//         name: form.name.trim(),
//         email: form.email.trim(),
//         guests: Number(form.guests),
//         message: form.message.trim(),
//       };

//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(payload),
//         // IMPORTANT: prevent the noisy GET redirect like /submit-form/[object Object]
//         redirect: "manual",
//       });

//       // If the provider returns a redirect, fetch reports `opaqueredirect` (status 0)
//       const isRedirect = res.type === "opaqueredirect" || (res.status >= 300 && res.status < 400);
//       const ok = res.ok || isRedirect;

//       // Only try to parse JSON when the server actually returns JSON
//       let data = null;
//       try {
//         const ct = res.headers.get("content-type") || "";
//         if (ct.includes("application/json")) data = await res.json();
//       } catch { /* ignore parse errors */ }

//       if (!ok) {
//         const serverErrors = data?.errors || {};
//         const message = data?.message || `Failed to submit (HTTP ${res.status})`;
//         setErrors((prev) => ({ ...prev, ...serverErrors, submit: message }));
//         return;
//       }

//       setDone(true);
//       setForm({ name: "", email: "", guests: "", message: "", company: "" });
//       setErrors({});
//     } catch (err) {
//       setErrors({ submit: err?.message || "Something went wrong. Please try again." });
//     } finally {
//       setSending(false);
//     }
//   };

//   const BG = "/image/t-and-3.png"; // avoid spaces in filenames

//   return (
//     <div id="rsvp" className="relative min-h-[88vh] py-[100px] grid place-items-center overflow-hidden">
//       {/* Background image */}
//       <img src={BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
//       <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

//       {/* Card */}
//       <div className="relative z-10 w-full max-w-3xl bg-white shadow-sm px-6 sm:px-10 py-10 sm:py-12 rounded-none sm:rounded">
//         <div className="text-center mb-8">
//           <div className="font-script text-2xl sm:text-3xl text-[#BD9458]">Will you attend?</div>
//           <h1 className="mt-2 text-2xl sm:text-3xl tracking-wide">R.S.V.P</h1>
//         </div>

//         {done ? (
//           <div className="text-center py-10">
//             <p className="text-lg">Thank you! Your RSVP has been received.</p>
//             <button
//               className="mt-6 px-6 py-3 border border-gray-300 hover:bg-gray-50 transition-colors"
//               onClick={() => setDone(false)}
//             >
//               Submit another response
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={onSubmit} noValidate /* no action attribute */>
//             {/* Honeypot */}
//             <input
//               type="text"
//               name="company"
//               value={form.company}
//               onChange={onChange}
//               tabIndex={-1}
//               autoComplete="off"
//               className="hidden"
//             />

//             <div className="space-y-5">
//               <Field label="Name"   name="name"   value={form.name}   onChange={onChange} error={errors.name} />
//               <Field type="email" label="Email"  name="email"  value={form.email}  onChange={onChange} error={errors.email} autoComplete="email" />
//               <Field label="Guests" name="guests" value={form.guests} onChange={onChange} error={errors.guests} inputMode="numeric" pattern="[0-9]*" placeholder="Number of guests" />
//               <Textarea label="Message" name="message" value={form.message} onChange={onChange} rows={5} />
//             </div>

//             {errors.submit && <p className="text-red-600 text-sm mt-4">{errors.submit}</p>}
//             {errors.spam   && <p className="text-red-600 text-sm mt-4">{errors.spam}</p>}

//             <button
//               type="submit"
//               disabled={sending}
//               className="mt-7 inline-flex items-center justify-center px-8 py-3 text-white tracking-[0.25em]
//                          bg-[#BD9458] hover:bg-[#8b6123] transition-colors duration-200 ease-out
//                          disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BD9458]"
//             >
//               {sending ? "SENDING…" : "SEND"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// /* — Reusable inputs — */
// function Field({ label, name, value, onChange, error, type = "text", placeholder, inputMode, pattern, autoComplete }) {
//   const id = `field-${name}`;
//   return (
//     <div>
//       <label htmlFor={id} className="sr-only">{label}</label>
//       <input
//         id={id}
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         inputMode={inputMode}
//         pattern={pattern}
//         autoComplete={autoComplete}
//         placeholder={placeholder || label}
//         aria-invalid={!!error}
//         className={`w-full border border-gray-200 focus:border-gray-400 outline-none px-4 py-3 placeholder-gray-400 ${error ? "ring-1 ring-red-400" : ""}`}
//       />
//       {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
//     </div>
//   );
// }

// function Textarea({ label, name, value, onChange, rows = 4 }) {
//   const id = `ta-${name}`;
//   return (
//     <div>
//       <label htmlFor={id} className="sr-only">{label}</label>
//       <textarea
//         id={id}
//         name={name}
//         value={value}
//         onChange={onChange}
//         rows={rows}
//         placeholder={label}
//         className="w-full border border-gray-200 focus:border-gray-400 outline-none px-4 py-3 placeholder-gray-400"
//       />
//     </div>
//   );
// }
