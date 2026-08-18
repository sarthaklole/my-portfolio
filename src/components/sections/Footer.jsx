import React from "react";
import PixelSpider from "../common/PixelSpider";

export default function Footer({ currentDimension = "earth-1610" }) {
  return (
    <footer className="footer">
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <PixelSpider size={20} />
        <span>© {new Date().getFullYear()} Sarthak Anil Lole • All Rights Reserved</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ color: "var(--yellow)", fontWeight: 700 }}>
          PORTAL: {currentDimension.toUpperCase()} ONLINE
        </span>
        <span style={{ color: "var(--text-muted)" }}>Dimension-616 Hub</span>
      </div>
    </footer>
  );
}
