"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section
      id="contact"
      className="relative py-20 px-6 sm:px-10 md:px-20 lg:px-32 text-white text-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,_#7c3aed_0%,_transparent_70%)] opacity-20 blur-[180px] z-0" />
      <div className="absolute inset-0 bg-[#09090B] z-[-1]" />

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-violet-700 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg text-sm font-medium animate-fade-in-out">
          ✅ Your message has been sent!
        </div>
      )}

      {/* Contact Card */}
      <div className="relative z-10 max-w-6xl mx-auto bg-gradient-to-b from-violet-800/30 to-black/40 border border-white/10 backdrop-blur-md px-6 sm:px-10 py-16 rounded-3xl shadow-xl">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 rounded-full text-sm bg-white/5 border border-white/10 backdrop-blur text-white">
          <span>✨ Need Any Help?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact With Us</h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-8">
          Build SaaS AI applications using OpenAI and Next.js, this kit comes
          with pre-configured and pre-built examples to help you launch faster.
        </p>

        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:ring-1 focus:ring-violet-500 outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:ring-1 focus:ring-violet-500 outline-none"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Type your message"
              className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:ring-1 focus:ring-violet-500 outline-none"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-6 py-3 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
