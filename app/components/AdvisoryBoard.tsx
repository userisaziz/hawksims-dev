"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef } from "react";
import { User2 } from "lucide-react";
import Image from "next/image";

const advisoryMembers = [
  {
    role: "Advisor",
    name: "Prof. James Liu",
    title: "Stanford University",
    expertise: ["Quantum Computing & Algorithms"],
  },
  {
    role: "Advisor",
    name: "Dr. Rachel Green",
    title: "Former VP, Google AI",
    expertise: ["Machine Learning at Scale"],
  },
  {
    role: "Advisor",
    name: "Dr. Alan Thompson",
    title: "Boeing Chief Scientist (Ret.)",
    expertise: ["Aerospace Engineering"],
  },
  {
    role: "Advisor",
    name: "Dr. Maria Santos",
    title: "McKinsey Partner",
    expertise: ["Digital Transformation"],
  },
];

export default function AdvisoryBoard() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 24 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
  });

  return (
    <section
      id="advisory-board"
      className="relative py-24 px-6 sm:px-10 md:px-20 lg:px-32 text-center text-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 relative">
        {/* --- Background Circle and Stars --- */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 z-0 w-full flex flex-col items-center pointer-events-none">
          {/* Circle */}
          <div className="h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full bg-dark opacity-80"></div>
          {/* Stars */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[482px] h-60 overflow-hidden">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>
          {/* Blurs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[925px]">
            <Image
              src="/images/blur/blur-13.svg"
              alt="blur"
              fill
              className="max-w-none"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[778px]">
            <Image
              src="/images/blur/blur-14.svg"
              alt="blur"
              fill
              className="max-w-none"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[584px]">
            <Image
              src="/images/blur/blur-15.svg"
              alt="blur"
              fill
              className="max-w-none"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* Add blur-16.svg below the cards */}
          <div className="absolute left-1/2 top-[70%] -translate-x-1/2 z-10 w-full max-w-[600px] pointer-events-none">
            <Image
              src="/images/blur/blur-16.svg"
              alt="blur background"
              width={600}
              height={200}
              className="mx-auto blur-2xl opacity-80"
              style={{ filter: "blur(24px)" }}
            />
          </div>
        </div>

        {/* --- Section Header --- */}
        <div className="mb-12 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-4 rounded-full text-sm bg-white/10 border border-white/20 backdrop-blur-xl text-white shadow-lg">
            <span>🎯 Advisory Board</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Advisory Board
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            World-class experts guiding our strategic direction
          </p>
        </div>

        {/* --- Advisory Board Slider (Cards) --- */}
        <div className="relative z-10">
          <div ref={sliderRef} className="keen-slider pb-8">
            {advisoryMembers.map((member, idx) => (
              <div
                key={member.name}
                className="keen-slider__slide flex flex-col items-center justify-center min-h-[340px] bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl backdrop-blur-md transition-all duration-300 relative overflow-hidden group hover:bg-white/20 hover:backdrop-blur-xl hover:border-violet-400/60 hover:scale-105 hover:shadow-3xl"
                style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
              >
                {/* Avatar/Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-violet-600/40 to-purple-600/40 border border-white/20 mb-3">
                  <User2 className="w-6 h-6 text-white/80" />
                </div>
                <div className="text-xs text-violet-300 font-semibold mb-1 uppercase tracking-wider">
                  {member.role}
                </div>
                <h3 className="font-semibold text-lg text-white mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-gray-300 font-medium text-sm mb-2 text-center">
                  {member.title}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full text-gray-200 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Remove per-card background blurs for clarity */}
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-2">
            <button
              aria-label="Previous"
              className="rounded-full bg-white/10 border border-white/20 p-2 hover:bg-white/20 transition"
              onClick={() => instanceRef.current?.prev()}
              type="button"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M13 16l-5-5 5-5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              aria-label="Next"
              className="rounded-full bg-white/10 border border-white/20 p-2 hover:bg-white/20 transition"
              onClick={() => instanceRef.current?.next()}
              type="button"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M7 4l5 5-5 5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
