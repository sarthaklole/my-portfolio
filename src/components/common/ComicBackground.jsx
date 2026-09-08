import React from "react";
import spiderComicBg from "../../assets/spider-comic-bg.jpg";

export default function ComicBackground() {
  return (
    <div className="comic-bg-viewport" aria-hidden="true">
      {/* Spider-Man Comic Panel Wallpaper Collage Layer */}
      <div
        className="comic-wallpaper-layer"
        style={{
          backgroundImage: `url(${spiderComicBg})`,
        }}
      />

      {/* Dark Radial Contrast Vignette */}
      <div className="comic-wallpaper-overlay" />

      {/* Multiverse Atmospheric Glow Nebulas */}
      <div className="comic-glow-blob blob-top-left" />
      <div className="comic-glow-blob blob-bottom-right" />
      <div className="comic-glow-blob blob-center" />

      {/* Vintage CMYK Ben-Day Dots Matrix */}
      <div className="comic-benday-dots" />

      {/* Subtle Comic Action Speedlines */}
      <div className="comic-speedlines" />

      {/* Comic Book Page Grid Wireframes */}
      <div className="comic-panel-grid" />
    </div>
  );
}
