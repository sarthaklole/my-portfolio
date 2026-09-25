import React, { useState } from "react";
import { X, Download, FileText, Award, GraduationCap, Briefcase, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import PixelSpider from "./PixelSpider";

export default function ComicResumeModal({ isOpen, onClose, onPlaySound }) {
  const [activeTab, setActiveTab] = useState("dossier");

  if (!isOpen) return null;

  const handleDownload = () => {
    onPlaySound?.("thwip");
    // Standard trigger for downloading resume file or opening window
    window.open("https://github.com/sarthaklole", "_blank");
  };

  return (
    <div className="comic-modal-overlay" onClick={onClose}>
      <div className="comic-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Top Comic Book Banner Header */}
        <div className="comic-modal-banner">
          <div className="comic-modal-banner-left">
            <span className="comic-banner-price">25¢</span>
            <span className="comic-banner-issue">ISSUE #01 • SPECIAL RESUME EDITION</span>
          </div>
          <div className="comic-banner-center">
            <PixelSpider size={18} />
            <span className="comic-banner-title">MARVEL COMICS GROUP PRESENTS</span>
          </div>
          <button 
            className="comic-modal-close"
            onClick={() => {
              onPlaySound?.("click");
              onClose();
            }}
            title="Close Vault"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Main Content Box */}
        <div className="comic-modal-body">
          
          {/* Header Title Block */}
          <div className="comic-resume-header">
            <div className="comic-resume-title-wrap">
              <span className="comic-code-badge">APPROVED BY THE COMICS CODE AUTHORITY</span>
              <h2 className="comic-resume-main-title">THE AMAZING SARTHAK LOLE</h2>
              <p className="comic-resume-subtitle">
                SILICON &amp; STEEL MAESTRO • FULL-STACK DEVELOPER • ELECTRONICS &amp; TELECOM ENGINEER
              </p>
            </div>
            
            {/* Tab Navigation */}
            <div className="comic-resume-tabs">
              <button
                className={`comic-tab-btn ${activeTab === "dossier" ? "active" : ""}`}
                onClick={() => {
                  onPlaySound?.("page");
                  setActiveTab("dossier");
                }}
              >
                <FileText size={14} /> OFFICIAL DOSSIER
              </button>
              <button
                className={`comic-tab-btn ${activeTab === "highlights" ? "active" : ""}`}
                onClick={() => {
                  onPlaySound?.("page");
                  setActiveTab("highlights");
                }}
              >
                <Award size={14} /> FEATS &amp; RECORD
              </button>
            </div>
          </div>

          {/* Tab 1: Dossier View */}
          {activeTab === "dossier" && (
            <div className="comic-resume-content">
              
              {/* Bio & Education Panel */}
              <div className="comic-resume-section">
                <div className="comic-sec-badge">
                  <GraduationCap size={14} /> EDUCATION &amp; ACADEMIC ORIGIN
                </div>
                <div className="comic-resume-card">
                  <div className="comic-card-title-bar">
                    <h3>Bachelor of Technology (B.Tech) — Electronics &amp; Telecommunication</h3>
                    <span className="comic-year-tag">GRADUATION YEAR 2026</span>
                  </div>
                  <p className="comic-institute">Vishwakarma Institute of Information Technology (VIIT), Pune</p>
                  <p className="comic-desc">
                    Specialized in embedded systems circuitry, IoT signals, full-stack software development, and algorithm design.
                  </p>
                </div>
              </div>

              {/* Experience Panel */}
              <div className="comic-resume-section">
                <div className="comic-sec-badge">
                  <Briefcase size={14} /> FIELD EXPERIENCE &amp; MISSIONS
                </div>
                
                <div className="comic-resume-card">
                  <div className="comic-card-title-bar">
                    <h3>IoT &amp; Embedded Systems Intern</h3>
                    <span className="comic-role-tag">SUMMER INTERNSHIP</span>
                  </div>
                  <p className="comic-institute">Embedded Engineering Division</p>
                  <ul className="comic-bullet-list">
                    <li>Engineered custom sensor telemetry pipelines and micro-controller communication protocols.</li>
                    <li>Integrated real-time hardware signals with web dashboards using REST API endpoints.</li>
                    <li>Designed hardware schematics and optimized firmware power efficiency by 30%.</li>
                  </ul>
                </div>
              </div>

              {/* Core Skill Matrix Summary */}
              <div className="comic-resume-section">
                <div className="comic-sec-badge">
                  <Zap size={14} /> CORE FULL-STACK POWERS
                </div>
                <div className="comic-skill-pill-grid">
                  <span className="comic-pill">React &amp; Modern JS</span>
                  <span className="comic-pill">C / C++ Logic</span>
                  <span className="comic-pill">Java Architecture</span>
                  <span className="comic-pill">Python &amp; Django</span>
                  <span className="comic-pill">REST APIs &amp; SQL</span>
                  <span className="comic-pill">IoT &amp; Embedded Systems</span>
                  <span className="comic-pill">Git &amp; Cloud Deployment</span>
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Feats & Record */}
          {activeTab === "highlights" && (
            <div className="comic-resume-content">
              
              <div className="comic-resume-section">
                <div className="comic-sec-badge">
                  <Award size={14} /> NATIONAL RECOGNITION &amp; UNBROKEN RECORDS
                </div>

                <div className="comic-feat-card gold-border">
                  <div className="comic-feat-header">
                    <Sparkles size={18} color="var(--yellow)" />
                    <h4>NATIONAL RECORD HOLDER — MARDANI KHEL</h4>
                  </div>
                  <p className="comic-feat-desc">
                    Achieved an unbroken national record in continuous traditional weapon performance, demonstrating unmatched discipline, physical speed, and stamina.
                  </p>
                </div>

                <div className="comic-feat-card crimson-border">
                  <div className="comic-feat-header">
                    <CheckCircle2 size={18} color="var(--crimson)" />
                    <h4>STATE GOLD MEDALIST — WEAPON ROLLING &amp; COMBAT</h4>
                  </div>
                  <p className="comic-feat-desc">
                    Awarded First Place State Gold Medal in Weapon Rolling and Martial Combat Championship across Maharashtra.
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="comic-modal-footer">
          <div className="comic-footer-note">
            <Sparkles size={14} color="var(--yellow)" />
            <span>AUTHENTIC ISSUE #01 CERTIFIED • READY FOR DISPATCH</span>
          </div>

          <div className="comic-footer-actions">
            <button className="comic-download-btn" onClick={handleDownload}>
              <Download size={15} /> DOWNLOAD RESUME
            </button>
            <button 
              className="comic-close-btn"
              onClick={() => {
                onPlaySound?.("click");
                onClose();
              }}
            >
              CLOSE ISSUE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
