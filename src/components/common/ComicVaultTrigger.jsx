import React, { useEffect } from "react";
import PixelSpider from "./PixelSpider";

export default function ComicVaultTrigger({ onOpenVault }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // If pressing 'c' or 'v' outside of input/textarea
      if (
        (e.key === "c" || e.key === "C" || e.key === "v" || e.key === "V") &&
        e.target.tagName !== "INPUT" &&
        e.target.tagName !== "TEXTAREA"
      ) {
        onOpenVault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenVault]);

  return (
    <button
      className="comic-vault-floating-trigger"
      onClick={onOpenVault}
      title="Open Sarthak's Secret Comic Vault (Press 'C' or 'V')"
    >
      <div className="vault-trigger-inner">
        <PixelSpider size={24} />
        <div className="vault-trigger-text">
          <span className="vault-trigger-tag">EASTER EGG</span>
          <span className="vault-trigger-title">COMIC VAULT</span>
        </div>
      </div>
      <span className="vault-hotkey-badge">KEY: [C]</span>
    </button>
  );
}
