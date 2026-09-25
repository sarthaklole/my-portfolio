import React, { useState, useEffect } from "react";
import { Search, Volume2, VolumeX, Menu, X } from "lucide-react";
import { NAV } from "../../data/portfolioData";
import DimensionSwitcher from "../common/DimensionSwitcher";
import PixelSpider from "../common/PixelSpider";
import marvelLogo from "../../assets/marvel-logo.png";

export default function Navbar({
  onNavigate,
  currentDimension,
  onSelectDimension,
  searchQuery,
  onSearchChange,
  soundEnabled,
  onToggleSound,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navBar ${scrolled ? "scrolled" : ""}`}>
      {/* Left: Marvel Mini Badge & Brand Name */}
      <div className="navBrand" onClick={() => onNavigate("hero")}>
        <img src={marvelLogo} alt="MARVEL" className="marvel-nav-logo" />
        <PixelSpider size={20} />
        <span className="navBrandTitle">SARTHAK.LOLE</span>
      </div>

      {/* Center: Multiverse Vault Trigger + Nav Links */}
      <div className={`navCenterGroup ${mobileMenuOpen ? "mobileOpen" : ""}`}>
        <DimensionSwitcher
          currentDimension={currentDimension}
          onSelectDimension={onSelectDimension}
        />

        <div className="navLinks">
          {NAV.map((n) => (
            <button
              key={n.id}
              className="navLink"
              onClick={() => {
                onNavigate(n.id);
                setMobileMenuOpen(false);
              }}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Controls: Search, SFX Toggle */}
      <div className="navControls">
        {/* Compact Glass Search Bar */}
        <div className="navSearchWrap">
          <Search size={13} className="navSearchIcon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="navSearchInput"
          />
          {searchQuery && (
            <button className="navSearchClear" onClick={() => onSearchChange("")}>
              ✕
            </button>
          )}
        </div>

        {/* Audio Sound Toggle */}
        <button
          className={`navSfxBtn ${soundEnabled ? "active" : ""}`}
          onClick={onToggleSound}
          title={soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
        >
          {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          className="navMobileToggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
}
