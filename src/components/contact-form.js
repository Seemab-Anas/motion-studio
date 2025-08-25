"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Briefcase,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ open: false, type: "success", message: "" });

  function showToast(type, message) {
    setToast({ open: true, type, message });
    // Auto-hide after 3 seconds
    setTimeout(() => setToast((t) => ({ ...t, open: false })), 3000);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Basic phone validation (ensure at least 8 digits)
    const phoneDigits = (form.phone || "").replace(/\D/g, "");
    if (!phoneDigits || phoneDigits.length < 8) {
      showToast("error", "Please enter a valid phone number.");
      return;
    }

    setSending(true);
    try {
      console.log("form submit", form);
      await new Promise((r) => setTimeout(r, 700));

      showToast("success", "Message sent — we'll get back to you soon!");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (err) {
      showToast("error", "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
    <section className="w-full bg-[#0b0b0c] text-white py-16 px-6 md:px-12">
      <style>{`
        :root { --accent: #045494; }
        .react-tel-input .form-control {
          background: transparent !important;
          border-radius: 0.75rem !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
          color: white !important;
          width: 100% !important;
          height: 3rem !important;
          padding-left: 3rem !important;
        }
        .react-tel-input .flag-dropdown {
          border: none !important;
          background: transparent !important;
        }
        .react-tel-input .selected-flag {
          border-radius: 0.75rem 0 0 0.75rem !important;
        }
        .react-tel-input .country-list {
          background: #0f1112 !important;
          color: white !important;
        }
        .react-tel-input .country-list .country:hover {
          background: rgba(255,255,255,0.1) !important;
        }
        /* Subtle hover for the flag (remove default white) */
        .react-tel-input .selected-flag:hover {
          background: rgba(255,255,255,0.06) !important;
        }
        .react-tel-input .flag-dropdown.open .selected-flag {
          background: rgba(255,255,255,0.06) !important;
        }
        /* Selected country row in list (remove default white) */
        .react-tel-input .country-list .country.highlight,
        .react-tel-input .country-list .country.active,
        .react-tel-input .country-list .country.selected {
          background: rgba(255,255,255,0.08) !important;
          color: #fff !important;
        }
        /* If any search box slips in, hide it (belt and suspenders) */
        .react-tel-input .search-box,
        .react-tel-input .search {
          display: none !important;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
            Get in touch with us
          </h2>
          <p className="mt-2 text-slate-400">
            Please complete all the feilds below so that we can respond to your inquiry.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0f1112] rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl"
        >
          <div className="space-y-4">
            {/* Name */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <User className="w-5 h-5" />
              </span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-transparent border rounded-xl py-4 pl-14 pr-4 outline-none border-white/10 placeholder:text-slate-500"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Mail className="w-5 h-5" />
              </span>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="E-mail"
                type="email"
                className="w-full bg-transparent border rounded-xl py-4 pl-14 pr-4 outline-none border-white/10 placeholder:text-slate-500"
                required
              />
            </div>

            {/* Phone with flags */}
            <div>
              <PhoneInput
                country={"gb"} // default UK
                value={form.phone}
                onChange={(value) => setForm((s) => ({ ...s, phone: value }))}
                enableSearch={false}
                inputProps={{
                  name: "phone",
                  required: true,
                  type: "tel",
                  inputMode: "tel",
                  autoComplete: "tel",
                }}
              />
            </div>

            {/* Company */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Briefcase className="w-5 h-5" />
              </span>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company / project name"
                className="w-full bg-transparent border rounded-xl py-4 pl-14 pr-4 outline-none border-white/10 placeholder:text-slate-500"
                required
              />
            </div>

            {/* Message */}
            <div className="relative">
              <span className="absolute left-4 top-4 text-slate-400">
                <MessageSquare className="w-5 h-5" />
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="how can we help you"
                rows={5}
                className="w-full bg-transparent border rounded-xl py-4 pl-14 pr-4 outline-none border-white/10 placeholder:text-slate-500 resize-none"
                required
              />
            </div>

            <p className="text-xs text-slate-500">
              By continuing you agree to our{" "}
              <a
                href="/privacy"
                className="text-[var(--accent)] hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>

            {/* Send button */}
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-4 rounded-full border-2 border-[var(--accent)] px-6 py-3 text-[var(--accent)] font-medium hover:bg-[var(--accent)]/5 transition"
              >
                <span>Send</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Contact options */}
            <div className="mt-6 space-y-4 text-slate-200">
              <div>
                <div className="text-sm font-medium">Chat with us on</div>
                <a
                  href="https://wa.me/447367062976"
                  className="text-sm text-[var(--accent)] hover:underline"
                >
                  Whatsapp
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+447367062976"
                  className="text-sm text-[var(--accent)] hover:underline"
                >
                  +44 7367 062976
                </a>
              </div>

              <div>
                <div className="text-sm font-medium">Write us</div>
                <a
                  href="mailto:info@clarygen.com"
                  className="text-sm text-[var(--accent)] hover:underline"
                >
                  info@clarygen.com
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    {/* Toast */}
    {toast.open && (
      <div
        className={`fixed bottom-6 right-6 z-[9999] flex items-start gap-3 rounded-xl border px-4 py-3 shadow-lg backdrop-blur
          ${toast.type === "success" ? "bg-emerald-900/20 border-emerald-500/30 text-emerald-200" : ""}
          ${toast.type === "error" ? "bg-rose-900/20 border-rose-500/30 text-rose-200" : ""}
        `}
      >
        <div className="mt-0.5">
          {toast.type === "success" && <CheckCircle className="w-5 h-5 text-emerald-400" />}
          {toast.type === "error" && <AlertCircle className="w-5 h-5 text-rose-400" />}
        </div>
        <div className="pr-2 text-sm">
          {toast.message}
        </div>
        <button
          onClick={() => setToast((t) => ({ ...t, open: false }))}
          className="ml-2 rounded-full p-1 hover:bg-white/10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    )}
    </>
  );
}
