import React, { useState, useEffect } from "react";
import "./styles/portfolio.css";

import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Origin from "./components/sections/Origin";
import Powers from "./components/sections/Powers";
import Missions from "./components/sections/Missions";
import Feats from "./components/sections/Feats";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ComicVaultModal from "./components/common/ComicVaultModal";
import ComicVaultTrigger from "./components/common/ComicVaultTrigger";
import ComicBackground from "./components/common/ComicBackground";

export default function Portfolio() {
  const [dimension, setDimension] = useState("earth-8086");
  const [vaultOpen, setVaultOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-dimension", dimension);
  }, [dimension]);

  return (
    <div className="portfolio-page" data-dimension={dimension}>
      {/* Dynamic Comic Book Background Layers */}
      <ComicBackground />

      <Navbar
        onNavigate={scrollTo}
        currentDimension={dimension}
        onSelectDimension={setDimension}
        onOpenVault={() => setVaultOpen(true)}
      />

      <Hero onNavigate={scrollTo} currentDimension={dimension} />

      <main className="main-content">
        <Origin />
        <Powers />
        <Missions />
        <Feats />
        <Contact />
      </main>

      <Footer currentDimension={dimension} />

      {/* Secret Comic Vault Easter Egg Trigger & Modal */}
      <ComicVaultTrigger onOpenVault={() => setVaultOpen(true)} />
      <ComicVaultModal
        isOpen={vaultOpen}
        onClose={() => setVaultOpen(false)}
      />
    </div>
  );
}
