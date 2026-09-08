import React, { useState } from "react";
import { MARVEL_HERO_STATS } from "../../data/portfolioData";
import PixelSpider from "./PixelSpider";

export default function MarvelPowerGrid({ onPlaySound }) {
  const [activeStat, setActiveStat] = useState(MARVEL_HERO_STATS[0]);

  return (
    <div className="marvel-power-grid-container">
      <div className="marvel-power-card-header">
        <div className="power-card-title-wrap">
          <PixelSpider size={28} />
          <div>
            <h3 className="power-card-main-title">MARVEL CHARACTER POWER MATRIX</h3>
            <p className="power-card-subtitle">
              OFFICIAL S.H.I.E.L.D. DATA FILE • CLASSIFIED PROFILE: SARTHAK LOLE
            </p>
          </div>
        </div>

        <div className="power-card-issue-tag">
          MASTERPIECE EDITION • ISSUE #001
        </div>
      </div>

      <div className="marvel-power-card-body">
        {/* Left Side: Interactive Stat Bars */}
        <div className="power-stats-list">
          {MARVEL_HERO_STATS.map((stat) => (
            <div
              key={stat.key}
              className={`power-stat-row ${
                activeStat.key === stat.key ? "selected" : ""
              }`}
              onMouseEnter={() => {
                setActiveStat(stat);
                onPlaySound?.("click");
              }}
              onClick={() => {
                setActiveStat(stat);
                onPlaySound?.("thwip");
              }}
            >
              <div className="stat-row-top">
                <span className="stat-icon-name">
                  <span className="stat-emoji">{stat.icon}</span>
                  <span className="stat-name-text">{stat.name}</span>
                </span>

                <div className="stat-score-pills">
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <span
                      key={num}
                      className={`score-pill ${
                        num <= stat.score ? "filled" : ""
                      }`}
                    >
                      {num}
                    </span>
                  ))}
                  <span className="stat-num-label">{stat.score}/7</span>
                </div>
              </div>

              {/* Glowing Animated Power Bar */}
              <div className="power-bar-track">
                <div
                  className="power-bar-fill"
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Active Stat Spotlight & Marvel Trading Card */}
        <div className="power-spotlight-card">
          <div className="spotlight-card-inner">
            <div className="spotlight-card-top-bar">
              <span className="spotlight-badge">FEATURED ATTRIBUTE</span>
              <span className="spotlight-rank">RANK {activeStat.score} / 7</span>
            </div>

            <div className="spotlight-icon-circle">
              <span className="spotlight-big-emoji">{activeStat.icon}</span>
            </div>

            <h4 className="spotlight-stat-title">{activeStat.name}</h4>

            <div className="spotlight-meter-wrap">
              <span className="spotlight-meter-val">{activeStat.percentage}% POWER CAPABILITY</span>
              <div className="spotlight-meter-bar">
                <div
                  className="spotlight-meter-fill"
                  style={{ width: `${activeStat.percentage}%` }}
                />
              </div>
            </div>

            <p className="spotlight-desc">{activeStat.desc}</p>

            <div className="spotlight-card-footer">
              <span>SECURITY LEVEL: 10</span>
              <span>VERIFIED DATA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
