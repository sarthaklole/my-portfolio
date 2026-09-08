import React, { useState, useEffect } from "react";
import { NAV } from "../../data/portfolioData";
import DimensionSwitcher from "../common/DimensionSwitcher";
import PixelSpider from "../common/PixelSpider";

export default function Navbar({
  onNavigate,
  currentDimension,
  onSelectDimension,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navBar ${scrolled ? "scrolled" : ""}`}>
      <div className="navBrand" onClick={() => onNavigate("origin")}>
        <PixelSpider size={26} />
        <span>SARTHAK.LOLE</span>
      </div>

      <div className="navRight">
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
