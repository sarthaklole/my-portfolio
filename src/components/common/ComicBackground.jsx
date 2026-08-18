import React from "react";

export default function ComicBackground() {
  return (
    <div className="comic-bg-viewport" aria-hidden="true">
      {/* 1. Multiverse Atmospheric Glow Nebulas */}
      <div className="comic-glow-blob blob-top-left" />
      <div className="comic-glow-blob blob-bottom-right" />
      <div className="comic-glow-blob blob-center" />

      {/* 2. Vintage CMYK Ben-Day Dots Matrix */}
      <div className="comic-benday-dots" />

      {/* 3. Subtle Comic Action Speedlines */}
      <div className="comic-speedlines" />

      {/* 4. Comic Book Page Grid Wireframes */}
      <div className="comic-panel-grid" />
    </div>
  );
}
