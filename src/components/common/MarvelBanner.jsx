import React from "react";
import { Search, Volume2, VolumeX } from "lucide-react";

export default function MarvelBanner({
  searchQuery,
  onSearchChange,
  soundEnabled,
  onToggleSound,
  currentDimension,
}) {
  return (
    <div className="marvel-top-banner">
      <div className="marvel-top-inner">
        {/* Left: Classic Red Marvel Box Logo */}
        <div className="marvel-brand-box">
          <span className="marvel-logo-text">MARVEL</span>
          <span className="marvel-sub-text">STUDIOS • SARTHAK UNIVERSE</span>
        </div>

        {/* Center: Live Breaking News Ticker */}
        <div className="marvel-ticker-container">
          <div className="marvel-ticker-badge">
            BREAKING ISSUE
          </div>

          <div className="marvel-ticker-track-wrap">
            <div className="marvel-ticker-track">
              <span className="ticker-item">
                🕷️ SARTHAK LOLE • B.TECH ELECTRONICS & TELECOM • NATIONAL RECORD HOLDER IN MARDANI KHEL • FULL STACK DJANGO & REACT OPERATIONAL
              </span>
              <span className="ticker-item">
                ⚡ MULTIVERSE ACTIVE • CURRENT UNIVERSE: {currentDimension.toUpperCase()} • FULL STACK WEB & EMBEDDED SYSTEMS
              </span>
            </div>
          </div>
        </div>

        {/* Right: Quick Search Bar & Sound Toggle */}
        <div className="marvel-banner-controls">
          <div className="marvel-search-wrap">
            <Search size={14} className="marvel-search-icon" />
            <input
              type="text"
              placeholder="Search skills, missions..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="marvel-search-input"
            />
            {searchQuery && (
              <button
                className="marvel-search-clear"
                onClick={() => onSearchChange("")}
              >
                ✕
              </button>
            )}
          </div>

          <button
            className={`marvel-sound-btn ${soundEnabled ? "active" : ""}`}
            onClick={onToggleSound}
            title={soundEnabled ? "Mute UI Audio" : "Enable Smooth Audio"}
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span className="sound-text">{soundEnabled ? "SFX: ON" : "SFX: OFF"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
