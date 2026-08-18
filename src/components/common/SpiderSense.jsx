import React from "react";

export default function SpiderSense({ active = true }) {
  return (
    <div className={`spider-sense-wrap ${active ? "active" : ""}`} aria-hidden="true">
      <svg
        viewBox="0 0 160 70"
        className="spider-sense-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left sense arc */}
        <path
          className="sense-wave wave-1"
          d="M30 55 C 20 40, 15 25, 35 12"
          stroke="var(--crimson)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          className="sense-wave wave-2"
          d="M48 58 C 38 35, 42 20, 60 8"
          stroke="var(--yellow)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          className="sense-wave wave-3"
          d="M68 60 C 62 38, 70 18, 80 5"
          stroke="var(--electric)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Right sense arc */}
        <path
          className="sense-wave wave-3"
          d="M92 60 C 98 38, 90 18, 80 5"
          stroke="var(--electric)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          className="sense-wave wave-2"
          d="M112 58 C 122 35, 118 20, 100 8"
          stroke="var(--yellow)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          className="sense-wave wave-1"
          d="M130 55 C 140 40, 145 25, 125 12"
          stroke="var(--crimson)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="spider-sense-label">SPIDER-SENSE TINGLING</span>
    </div>
  );
}
