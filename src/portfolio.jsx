import React, { useState, useEffect } from "react";
import "./styles/portfolio.css";

import MarvelBanner from "./components/common/MarvelBanner";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Origin from "./components/sections/Origin";
import Powers from "./components/sections/Powers";
import Experience from "./components/sections/Experience";
import Missions from "./components/sections/Missions";
import Feats from "./components/sections/Feats";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ComicVaultModal from "./components/common/ComicVaultModal";
import ComicVaultTrigger from "./components/common/ComicVaultTrigger";
import ComicBackground from "./components/common/ComicBackground";
import ComicReaderModal from "./components/common/ComicReaderModal";
import ComicResumeModal from "./components/common/ComicResumeModal";

import { useComicSound } from "./hooks/useComicSound";

export default function Portfolio() {
  const [dimension, setDimension] = useState("earth-8086");
  const [vaultOpen, setVaultOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [readerOpen, setReaderOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const {
    soundEnabled,
    toggleSound,
    playThwip,
    playBoom,
    playSnikt,
    playClick,
    playPage,
    playWarp,
  } = useComicSound();

  const handlePlaySound = (type) => {
    if (type === "thwip") playThwip();
    else if (type === "boom") playBoom();
    else if (type === "snikt") playSnikt();
    else if (type === "page") playPage();
    else if (type === "warp") playWarp();
    else playClick();
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenReader = (project) => {
    setSelectedProject(project);
    setReaderOpen(true);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-dimension", dimension);
  }, [dimension]);

  return (
    <div className="portfolio-page" data-dimension={dimension}>
      {/* Top Thin Breaking Ticker */}
      <MarvelBanner currentDimension={dimension} />

      {/* Dynamic Comic Book Background Layers */}
      <ComicBackground />

      <Navbar
        onNavigate={(id) => {
          scrollTo(id);
          handlePlaySound("click");
        }}
        currentDimension={dimension}
        onSelectDimension={(dim) => {
          setDimension(dim);
          handlePlaySound("warp");
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />

      <Hero
        onNavigate={(id) => {
          scrollTo(id);
          handlePlaySound("click");
        }}
        currentDimension={dimension}
        onPlaySound={handlePlaySound}
        onOpenResume={() => {
          setResumeOpen(true);
          handlePlaySound("page");
        }}
      />

      <main className="main-content">
        <Origin onPlaySound={handlePlaySound} />
        <Powers
          searchQuery={searchQuery}
          onPlaySound={handlePlaySound}
        />
        <Experience onPlaySound={handlePlaySound} />
        <Missions
          searchQuery={searchQuery}
          onOpenReader={handleOpenReader}
          onPlaySound={handlePlaySound}
        />
        <Feats onPlaySound={handlePlaySound} />
        <Contact onPlaySound={handlePlaySound} />
      </main>

      <Footer currentDimension={dimension} />

      {/* Secret Comic Vault Easter Egg Trigger & Modal */}
      <ComicVaultTrigger
        onOpenVault={() => {
          setVaultOpen(true);
          handlePlaySound("thwip");
        }}
      />
      
      <ComicVaultModal
        isOpen={vaultOpen}
        onClose={() => setVaultOpen(false)}
      />

      {/* Marvel Project Comic Issue Reader Modal */}
      <ComicReaderModal
        project={selectedProject}
        isOpen={readerOpen}
        onClose={() => setReaderOpen(false)}
        onPlaySound={handlePlaySound}
      />

      {/* Retro Vintage Comic Resume Viewer Modal */}
      <ComicResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onPlaySound={handlePlaySound}
      />
    </div>
  );
}
