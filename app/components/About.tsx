"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-10 md:px-20 lg:px-32 overflow-hidden bg-[#09090B] text-white"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,_#7c3aed_0%,_transparent_70%)] opacity-20 blur-[180px] z-0" />
      <div className="absolute inset-0 bg-[#09090B] z-[-1]" />

      {/* About Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        {/* Left Side: Text Content */}
        <div className="text-left w-full lg:w-1/2">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-6 rounded-full text-sm bg-white/5 border border-white/10 backdrop-blur text-white">
            <span>✨ About Our App</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Empowering Research Through Technology
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-lg">
            At HawkSims, we bridge the gap between complex scientific challenges
            and innovative computational solutions. Our team of experts combines
            deep domain knowledge with cutting-edge technology to accelerate
            discovery and drive meaningful outcomes.
          </p>
          {/* <button className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] px-6 py-3 rounded-lg font-medium text-white text-sm sm:text-base hover:scale-105 transition-transform shadow-md">
            Start Writing – It&rsquo;s Free
          </button> */}
        </div>

        {/* Right Info Sidebar */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
          {[
            {
              title: "Expert Team",
              description:
                "PhD-level scientists and engineers with industry experience",
            },
            {
              title: "Proven Methods",
              description:
                "Validated approaches backed by peer-reviewed research",
            },
            {
              title: "Custom Solutions",
              description:
                "Tailored strategies for your unique research challenges",
            },
          ].map(({ title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-5 rounded-xl bg-black/10 border border-white/10 backdrop-blur-md hover:border-white/20 transition"
            >
              <span className="text-green-500 text-xl mt-1">✓</span>
              <div>
                <h4 className="text-white font-semibold text-lg">{title}</h4>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
          {[
            { label: "5+ Years", sub: "of Experience" },
            { label: "1000+ Clients", sub: "World wide" },
            { label: "20+ Developers", sub: "Experienced" },
            { label: "1250+ Projects", sub: "Successful" },
          ].map(({ label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center p-8 bg-black/10 backdrop-blur-md border border-white/10 rounded-2xl text-center transition hover:border-white/20 hover:shadow-md"
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{label}</h3>
              <p className="text-sm text-gray-400">{sub}</p>
            </div>
          ))}
        </div> */}
    </section>
  );
}
