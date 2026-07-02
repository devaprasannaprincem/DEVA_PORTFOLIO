import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Building, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mqeveppg", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setResponseMsg("Your message has been sent! Deva will get back to you shortly.");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact Form error:", error);
      setStatus("error");
      setResponseMsg("Could not connect. Please email directly at devaprasannaprincem@gmail.com");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Contact Info Panel */}
      <motion.div
        className="lg:col-span-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-between"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white tracking-tight">Let's Connect</h3>
            <p className="text-sm text-gray-400 mt-2">
              Interested in hiring Deva for an AI/ML engineering role, full-stack opportunity, or an interview during the college placements drive? Reach out today!
            </p>
          </div>

          <div className="space-y-4">
            <a
              id="link-contact-email"
              href="mailto:devaprasannaprincem@gmail.com"
              className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/40 hover:border-amber-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-all">
                <Mail className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email Address</p>
                <p className="text-sm font-medium text-slate-200 group-hover:text-brand-cyan transition-colors">
                  devaprasannaprincem@gmail.com
                </p>
              </div>
            </a>

            <a
              id="link-contact-phone"
              href="tel:+919360249502"
              className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/40 hover:border-amber-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-all">
                <Phone className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Phone & WhatsApp</p>
                <p className="text-sm font-medium text-slate-200 group-hover:text-brand-cyan transition-colors">
                  +91 93602 49502
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/40">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <MapPin className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Preferred Location</p>
                <p className="text-sm font-medium text-slate-200">
                  Bangalore / Hyderabad / Coimbatore / Remote
                </p>
              </div>
            </div>
          </div>
        </div>

      </motion.div>

      {/* Form Panel */}
      <motion.div
        className="lg:col-span-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 glass"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-brand-cyan animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-white">Message Dispatched!</h4>
              <p className="text-sm text-gray-300 max-w-md">
                {responseMsg}
              </p>
              <button
                id="btn-contact-reset"
                onClick={() => setStatus("idle")}
                className="px-5 py-2.5 bg-slate-800 border border-slate-700 hover:border-amber-500/40 rounded-xl text-xs font-semibold text-slate-200 transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              id="form-contact-main"
              key="form"
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-slate-300">
                    Your Name <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g., Sarah Jenkins"
                    disabled={status === "submitting"}
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 px-3.5 py-2.5 text-sm text-white focus:outline-none placeholder-gray-600 disabled:opacity-40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-slate-300">
                    Your Email <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g., sarah@company.com"
                    disabled={status === "submitting"}
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 px-3.5 py-2.5 text-sm text-white focus:outline-none placeholder-gray-600 disabled:opacity-40"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-company" className="text-xs font-semibold text-slate-300">
                  Company / Organization <span className="text-gray-500">(Optional)</span>
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-500" />
                  <input
                    id="contact-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="E.g., Google India"
                    disabled={status === "submitting"}
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none placeholder-gray-600 disabled:opacity-40"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-slate-300">
                  Your Message <span className="text-brand-cyan">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about my availability, discuss recruitment procedures, or invite me for an interview..."
                  disabled={status === "submitting"}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 px-3.5 py-2.5 text-sm text-white focus:outline-none placeholder-gray-600 resize-none disabled:opacity-40"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{responseMsg}</span>
                </div>
              )}

              <button
                id="btn-contact-submit"
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal hover:opacity-95 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
