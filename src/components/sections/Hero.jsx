import React, { useState } from "react";
import { Terminal, ArrowDown } from "lucide-react";
import { DIMENSIONS } from "../../data/portfolioData";
import heroPhoto from "../../sarthak-photo.png";
import SpiderSense from "../common/SpiderSense";
import ComicSoundTag from "../common/ComicSoundTag";

export default function Hero({ onNavigate, currentDimension = "earth-8086" }) {
  const [showThwip, setShowThwip] = useState(false);
  const [spiderSenseActive, setSpiderSenseActive] = useState(true);
  const dimData = DIMENSIONS[currentDimension] || DIMENSIONS["earth-8086"];

  const handleThwipClick = () => {
    setShowThwip(true);
    onNavigate("missions");
    setTimeout(() => setShowThwip(false), 1200);
  };

  return (
    <header className="hero">
      <div className="halftone" />
      <div className="burst burstShapeA" />
      <div className="burst burstShapeB" style={{ animationDelay: "1.5s" }} />

      <p className="heroEyebrow">
        <Terminal size={14} style={{ verticalAlign: "-2px", marginRight: 6 }} />
        🕷️ {dimData.name.toUpperCase()} • {dimData.hero.toUpperCase()} ({dimData.tagline.toUpperCase()})
      </p>

      <div className="heroNameWrap">
        <div className="heroNameGlitch" title="Click to trigger Spider glitch">
          {/* Red Chromatic Aberration Layer */}
          <h1 className="heroName heroLayerRed" aria-hidden="true">
            SARTHAK
            <br />
            LOLE
          </h1>

          {/* Cyan/Blue Chromatic Aberration Layer */}
          <h1 className="heroName heroLayerBlue" aria-hidden="true">
            SARTHAK
            <br />
            LOLE
          </h1>

          {/* Front Crisp Layer */}
          <h1 className="heroName heroLayerFront">
            SARTHAK
            <br />
            LOLE
          </h1>
        </div>
      </div>

      <p className="heroSub">
        B.Tech Electronics &amp; Telecommunication student who builds full-stack
        web projects by day and holds a national record in Mardani Khel by
        tradition — two disciplines, one relentless focus.
      </p>

      <div className="heroCtaGroup">
        <button
          className="ctaBtn ctaPrimary"
          onClick={handleThwipClick}
        >
          View missions
        </button>

        <button
          className="ctaBtn ctaGhost"
          onClick={() => onNavigate("contact")}
        >
          Get in touch
        </button>

        {showThwip && (
          <ComicSoundTag
            text="*THWIP!*"
            color="var(--yellow)"
            bgColor="var(--crimson)"
            rotation={-6}
          />
        )}
      </div>

      <div className="scrollHint" onClick={() => onNavigate("origin")}>
        <ArrowDown size={18} />
      </div>

      <div
        className="heroPhotoWrap"
        onMouseEnter={() => setSpiderSenseActive(true)}
      >
        <SpiderSense active={spiderSenseActive} />

        {/* Foreground Photo Frame */}
        <div className="heroPhotoFrame">
          <div className="polaroid-tape" />
          <div className="heroPhotoInner">
            <div className="heroPhotoComicBg" aria-hidden="true" />
            <img
              src={heroPhoto}
              alt="Sarthak Lole"
              className="heroPhotoImg"
            />
            <div className="heroPhotoComicHalftone" aria-hidden="true" />
            <div className="heroPhotoGloss" />
          </div>
          <div className="heroPhotoTag">ISSUE 00 — SARTHAK</div>
        </div>
      </div>
    </header>
  );
}
