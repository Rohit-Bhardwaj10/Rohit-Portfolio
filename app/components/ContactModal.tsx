"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
     
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error('Failed to send message');

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-close after success
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 2000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0A0A0B] border border-zinc-800 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.05)] w-full max-w-lg relative"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="border-b border-zinc-800/50 p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-100">Get In Touch</h2>
                  <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mt-1">Let's Build Something Great</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors border border-zinc-800"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-100 font-serif text-lg placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-100 font-serif text-lg placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-zinc-100 font-serif text-lg placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all resize-none"
                  />
                </div>

                {/* Error Message */}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 font-mono text-sm"
                  >
                    {errorMessage}
                  </motion.p>
                )}

                {/* Success Message */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-950/30 border border-emerald-900/50 p-4 text-center"
                  >
                    <p className="text-emerald-400 font-serif font-bold text-lg">Message Sent!</p>
                    <p className="text-emerald-500/70 font-mono text-xs uppercase tracking-widest mt-1">I'll get back to you soon</p>
                  </motion.div>
                )}

                {/* Submit Button */}
                {status !== "success" && (
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-zinc-100 text-[#0A0A0B] px-8 py-4 text-sm font-bold uppercase tracking-widest shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all border border-zinc-100 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.1)] disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0B]" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#0A0A0B]" />
                        Send Message
                      </>
                    )}
                  </button>
                )}
              </form>

              {/* Footer Note */}
              <div className="border-t border-zinc-800/50 border-solid px-6 py-4">
                <p className="font-mono text-[10px] text-zinc-500 text-center uppercase tracking-widest">
                  Or reach me directly at <a href="mailto:.beastslayer23456@gmail.com" className="underline hover:text-zinc-300">beastslayer23456@gmail.com</a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
