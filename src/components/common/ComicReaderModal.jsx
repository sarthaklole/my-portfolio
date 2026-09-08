import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, BookOpen, ExternalLink, Sparkles } from "lucide-react";
import PixelSpider from "./PixelSpider";

export default function ComicReaderModal({ project, isOpen, onClose, onPlaySound }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!isOpen || !project) return null;

  const pages = project.pages || [];
  const totalPages = pages.length;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      onPlaySound?.("thwip");
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      onPlaySound?.("click");
    }
  };

  const pageData = pages[currentPage] || {
    pageTitle: "PROJECT OVERVIEW",
    content: project.body,
  };

  return (
    <div className="comic-reader-backdrop" onClick={onClose}>
      <div className="comic-reader-modal" onClick={(e) => e.stopPropagation()}>
        {/* Top Header */}
        <div className="comic-reader-header">
          <div className="comic-reader-header-left">
            <PixelSpider size={24} />
            <div>
              <span className="reader-issue-tag">
                MARVEL DIGITAL EXCLUSIVE • {project.issue} ({project.date})
              </span>
              <h3 className="reader-project-title">{project.title}</h3>
            </div>
          </div>

          <button
            className="comic-reader-close-btn"
            onClick={onClose}
            title="Close Comic Reader"
          >
            <X size={20} />
          </button>
        </div>

        {/* Comic Book Page View */}
        <div className="comic-reader-body">
          <div className="comic-page-paper">
            <div className="comic-page-header-strip">
              <span className="strip-badge">{project.badge}</span>
              <span className="strip-page-num">
                PAGE {currentPage + 1} OF {totalPages}
              </span>
            </div>

            <div className="comic-page-content-box">
              <div className="comic-page-caption-box">
                <Sparkles size={16} className="caption-star" />
                <span className="caption-title">{pageData.pageTitle}</span>
              </div>

              <div className="comic-speech-cloud">
                <p className="comic-page-text">{pageData.content}</p>
              </div>

              {/* Tags & Tech Badge Strip */}
              <div className="comic-page-tags">
                {project.tags?.map((tag) => (
                  <span key={tag} className="comic-page-tag">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Full Description & Links */}
              <div className="comic-page-footer-info">
                <p className="full-project-body">{project.body}</p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="comic-reader-repo-btn"
                    onClick={() => onPlaySound?.("snikt")}
                  >
                    OPEN GITHUB REPOSITORY <ExternalLink size={16} />
                  </a>
                ) : (
                  <div className="published-paper-banner">
                    <BookOpen size={18} />
                    <span>PUBLISHED RESEARCH PAPER IN IJIRCCE JOURNAL</span>
                  </div>
                )}
              </div>
            </div>

            {/* Vintage Page Fold Corner */}
            <div className="comic-page-corner-fold" />
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="comic-reader-footer">
          <button
            className="reader-nav-btn"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <ChevronLeft size={18} /> PREVIOUS PAGE
          </button>

          <div className="reader-dots">
            {pages.map((_, idx) => (
              <span
                key={idx}
                className={`reader-dot ${idx === currentPage ? "active" : ""}`}
                onClick={() => {
                  setCurrentPage(idx);
                  onPlaySound?.("click");
                }}
              />
            ))}
          </div>

          <button
            className="reader-nav-btn"
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
          >
            NEXT PAGE <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
