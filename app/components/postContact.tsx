"use client";

export default function PostContact() {
  return (
    <section className="relative py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-[#09090B] text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_#7c3aed_0%,_transparent_70%)] blur-[180px] opacity-30 z-0" />
      <div className="absolute inset-0 bg-[#09090B] z-[-1]" />

      {/* CTA Section */}
      <div className="relative max-w-6xl mx-auto bg-gradient-to-br from-[#1f0933]/70 to-[#0f0a2f]/80 rounded-3xl border border-white/10 text-center px-6 sm:px-10 py-16 overflow-hidden z-10">
        {/* Star Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-10 pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 px-5 py-2 mb-5 rounded-full text-sm bg-white/5 border border-white/10 backdrop-blur text-white">
            <span>✨ Try our tool for Free</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-snug">
            What are you waiting for?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Build SaaS AI applications using OpenAI and Next.js. This kit comes
            with pre-configured and pre-built examples, making it easier to
            quickly kickstart your AI startup.
          </p>

          <button className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-sm sm:text-base shadow-md hover:scale-105 transition-transform">
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
}
