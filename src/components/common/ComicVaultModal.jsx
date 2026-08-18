import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { COMIC_VAULT_ITEMS } from "../../data/comicsData";
import PixelSpider from "./PixelSpider";

export default function ComicVaultModal({ isOpen, onClose }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % COMIC_VAULT_ITEMS.length);
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === 0 ? COMIC_VAULT_ITEMS.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentComic = COMIC_VAULT_ITEMS[selectedIndex];

  return (
    <div className="vault-backdrop" onClick={onClose}>
      <div className="vault-modal" onClick={(e) => e.stopPropagation()}>
        {/* Top Comic Book Header */}
        <div className="vault-header">
          <div className="vault-header-left">
            <PixelSpider size={22} />
            <span className="vault-title">
              SECRET COMIC VAULT • SARTHAK'S TOP PICKS
            </span>
          </div>

          <button className="vault-close-btn" onClick={onClose} title="Close Vault (ESC)">
            <X size={20} />
          </button>
        </div>

        {/* Modal Main Content Grid */}
        <div className="vault-body">
          {/* Left Column: Comic Cover Showcase with 3D Card Hover */}
          <div className="vault-cover-container">
            <div className="vault-comic-frame">
              <img
                src={currentComic.image}
                alt={currentComic.title}
                className="vault-comic-img"
              />
              <div className="vault-comic-glare" />
            </div>

            {/* Navigation Arrows */}
            <div className="vault-nav-controls">
              <button
                className="vault-nav-btn"
                onClick={() =>
                  setSelectedIndex((prev) =>
                    prev === 0 ? COMIC_VAULT_ITEMS.length - 1 : prev - 1
                  )
                }
              >
                <ChevronLeft size={20} /> PREV ISSUE
              </button>

              <span className="vault-counter">
                {selectedIndex + 1} / {COMIC_VAULT_ITEMS.length}
              </span>

              <button
                className="vault-nav-btn"
                onClick={() =>
                  setSelectedIndex(
                    (prev) => (prev + 1) % COMIC_VAULT_ITEMS.length
                  )
                }
              >
                NEXT ISSUE <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Column: Comic Lore, Quotes & Sarthak's Note */}
          <div className="vault-details">
            <div className="vault-badges-row">
              <span className="vault-badge-primary">{currentComic.badge}</span>
              <span className="vault-badge-universe">{currentComic.universe}</span>
              <span className="vault-badge-year">{currentComic.year} • {currentComic.price}</span>
            </div>

            <h2 className="vault-comic-title">{currentComic.title}</h2>

            <div className="vault-speech-bubble">
              <span className="speech-quote-icon">“</span>
              <p className="vault-quote">{currentComic.quote}</p>
            </div>

            <div className="vault-personal-box">
              <div className="vault-box-header">
                <BookOpen size={16} color="var(--yellow)" />
                <span>SARTHAK'S CURATOR NOTE</span>
              </div>
              <p className="vault-personal-text">{currentComic.personalNote}</p>
            </div>

            {/* Comic Thumbnail Selector */}
            <div className="vault-thumbnails-track">
              {COMIC_VAULT_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  className={`vault-thumb-btn ${
                    idx === selectedIndex ? "active" : ""
                  }`}
                  onClick={() => setSelectedIndex(idx)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="vault-thumb-img"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
