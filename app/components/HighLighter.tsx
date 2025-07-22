"use client";
import { useEffect, useRef, useState } from "react";

const Highlighter = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    container.style.setProperty("--mouse-x", `${x}px`);
    container.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={onMouseMove}
      className={`relative transition-all duration-300 ${
        isHovered ? "z-10" : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 transition-all duration-300 rounded-3xl opacity-0 ${
          isHovered ? "opacity-100" : ""
        }`}
        style={{
          background: `radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(255,255,255,0.08),
            transparent 40%
          )`,
        }}
      />
      {children}
    </div>
  );
};

export default Highlighter;
