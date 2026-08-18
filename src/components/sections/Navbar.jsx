import React, { useState, useEffect } from "react";
import { NAV } from "../../data/portfolioData";
import DimensionSwitcher from "../common/DimensionSwitcher";
import PixelSpider from "../common/PixelSpider";

export default function Navbar({
  onNavigate,
  currentDimension,
  onSelectDimension,
  onOpenVault,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="navBar"
      style={{
        background: scrolled ? "rgba(11, 14, 26, 0.94)" : "transparent",
        borderBottom: scrolled ? "2px solid var(--border-dark)" : "2px solid transparent",
      }}
    >
      <div className="navBrand" onClick={() => onNavigate("origin")}>
        <PixelSpider size={26} />
        <span>SARTHAK.LOLE</span>
      </div>

      <div className="navRight">
        <button
          className="navLink"
          onClick={onOpenVault}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            color: "var(--yellow)",
            background: "rgba(255, 201, 60, 0.12)",
            padding: "4px 8px",
            borderRadius: 4,
            border: "1px solid var(--yellow)",
          }}
          title="Secret Comic Vault (Press 'C')"
        >
          ⚡ VAULT
        </button>

        <DimensionSwitcher
          currentDimension={currentDimension}
          onSelectDimension={onSelectDimension}
        />

        <div className="navLinks">
          {NAV.map((n) => (
            <button
              key={n.id}
              className="navLink"
              onClick={() => onNavigate(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
