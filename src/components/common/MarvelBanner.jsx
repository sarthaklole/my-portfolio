import React from "react";

export default function MarvelBanner({ currentDimension = "earth-8086" }) {
  return (
    <div className="marvel-top-ticker-strip">
      <div className="ticker-badge-tag">
        BREAKING NEWS
      </div>

      <div className="ticker-marquee-wrap">
        <div className="ticker-marquee-track">
          <span className="ticker-text-item">
            🕷️ SARTHAK LOLE • B.TECH ELECTRONICS & TELECOM • NATIONAL RECORD HOLDER IN MARDANI KHEL • FULL STACK DJANGO & REACT OPERATIONAL
          </span>
          <span className="ticker-text-item">
            ⚡ MULTIVERSE ACTIVE • CURRENT UNIVERSE: {currentDimension.toUpperCase()} • FULL STACK WEB & EMBEDDED SYSTEMS
          </span>
        </div>
      </div>
    </div>
  );
}
