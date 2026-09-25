import React, { useState, useRef, useEffect } from "react";
import { DIMENSIONS } from "../../data/portfolioData";
import { ChevronDown, Check, Zap, Sparkles } from "lucide-react";
import PixelSpider from "./PixelSpider";

export default function DimensionSwitcher({ currentDimension, onSelectDimension }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const currentDim = DIMENSIONS[currentDimension] || DIMENSIONS["earth-8086"];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="vault-dim-container" ref={menuRef}>
      {/* Trigger Button Styled Identically to Comic Vault Trigger */}
      <button
        className={`vault-dim-trigger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        title="Open Multiverse Universe Vault"
      >
        <PixelSpider size={18} />
        <div className="vault-dim-label-group">
          <span className="vault-dim-eyebrow">UNIVERSE VAULT</span>
          <span className="vault-dim-current">
            {currentDim.name.toUpperCase()} • {currentDim.hero.toUpperCase()}
          </span>
        </div>
        <ChevronDown size={14} className={`vault-dim-chevron ${open ? "active" : ""}`} />
      </button>

      {/* Comic Vault Style Dropdown Popover */}
      {open && (
        <div className="vault-dim-dropdown">
          {/* Header Bar */}
          <div className="vault-dim-dropdown-header">
            <div className="vault-dim-header-title">
              <Zap size={14} color="var(--yellow)" />
              <span>MULTIVERSE UNIVERSE VAULT</span>
            </div>
            <span className="vault-dim-header-sub">SELECT DIMENSION</span>
          </div>

          {/* 4 Comic Issue Dimension Cards */}
          <div className="vault-dim-cards-list">
            {Object.values(DIMENSIONS).map((dim) => {
              const isActive = currentDimension === dim.id;
              return (
                <div
                  key={dim.id}
                  className={`vault-dim-card ${isActive ? "active" : ""}`}
                  onClick={() => {
                    onSelectDimension(dim.id);
                    setOpen(false);
                  }}
                >
                  <div className="vault-dim-card-header">
                    <span className="vault-dim-badge">{dim.name}</span>
                    <span className="vault-dim-hero-tag">{dim.hero}</span>
                  </div>

                  <p className="vault-dim-quote">"{dim.quote}"</p>

                  <div className="vault-dim-card-footer">
                    <span className="vault-dim-tagline">{dim.tagline}</span>
                    {isActive ? (
                      <span className="vault-dim-active-tag">
                        <Check size={12} /> ACTIVE
                      </span>
                    ) : (
                      <span className="vault-dim-switch-btn">WARP ➔</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="vault-dim-footer-note">
            <Sparkles size={12} color="var(--yellow)" />
            <span>Sound, background &amp; theme react to chosen dimension</span>
          </div>
        </div>
      )}
    </div>
  );
}
