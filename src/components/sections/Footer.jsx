import React from "react";
import PixelSpider from "../common/PixelSpider";

export default function Footer({ currentDimension = "earth-8086" }) {
  return (
    <footer className="footer">
      <div className="footer-left">
        <PixelSpider size={22} />
        <span className="footer-copyright">
          © {new Date().getFullYear()} Sarthak Anil Lole • All Rights Reserved
        </span>
      </div>

      <div className="footer-right">
        <span className="footer-portal-tag">
          PORTAL: {currentDimension.toUpperCase()} ONLINE
        </span>
        <span className="footer-sub-tag">Multiverse Portfolio Hub</span>
      </div>
    </footer>
  );
}
