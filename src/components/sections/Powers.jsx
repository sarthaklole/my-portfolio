import React, { useState } from "react";
import Panel from "../common/Panel";
import { SKILLS, MARVEL_HERO_STATS } from "../../data/portfolioData";
import PixelSpider from "../common/PixelSpider";
import { Zap, ShieldAlert, Award, Activity } from "lucide-react";

export default function Powers({ searchQuery = "", onPlaySound }) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = SKILLS.map((group) => {
    if (!searchQuery) return group;
    const matchingItems = group.items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const matchesGroup = group.group.toLowerCase().includes(searchQuery.toLowerCase());
    if (matchesGroup) return group;
    if (matchingItems.length > 0) return { ...group, items: matchingItems };
    return null;
  }).filter(Boolean);

  const filteredStats = MARVEL_HERO_STATS.filter((stat) => {
    if (!searchQuery) return true;
    return (
      stat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stat.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Panel id="powers" tab="ISSUE 02 — POWERS & ARSENAL" title="Power Set & Full-Stack Arsenal" onPlaySound={onPlaySound}>
      
      {/* Marvel Hero Character Power Grid */}
      <div className="marvel-power-grid-container">
        <div className="marvel-power-grid-header">
          <div className="marvel-grid-title">
            <Activity size={20} color="var(--yellow)" />
            <div>
              <h3>OFFICIAL MARVEL CHARACTER POWER GRID</h3>
              <p className="marvel-grid-subtitle">CLASSIFIED HANDBOOK ATTRIBUTES &amp; HERO STATS</p>
            </div>
          </div>

          <div className="marvel-power-legend">
            <span className="power-legend-item">
              <span className="legend-dot max"></span> 7 = MAX POTENTIAL
            </span>
            <span className="power-legend-item">
              <span className="legend-dot high"></span> 6 = ELITE LEVEL
            </span>
          </div>
        </div>

        {/* 6 Grid Cards for Hero Attributes */}
        <div className="marvel-hero-stats-grid">
          {filteredStats.map((stat) => (
            <div 
              key={stat.key} 
              className="marvel-stat-card"
              onMouseEnter={() => onPlaySound?.("click")}
            >
              <div className="marvel-stat-card-header">
                <span className="stat-icon">{stat.icon}</span>
                <div className="stat-name-group">
                  <h4 className="stat-name">{stat.name}</h4>
                  <span className="stat-rating-badge">{stat.score} / {stat.max}</span>
                </div>
              </div>

              <div className="marvel-stat-meter-container">
                <div className="marvel-stat-meter-bg">
                  <div 
                    className="marvel-stat-meter-fill"
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>
                <span className="stat-pct-text">{stat.percentage}%</span>
              </div>

              <p className="marvel-stat-desc">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Arsenal Section */}
      <div className="powers-arsenal-heading" style={{ marginTop: "32px" }}>
        <PixelSpider size={22} />
        <h4>FULL-STACK ARSENAL &amp; TECH ABILITIES</h4>
      </div>

      <div className="skillGrid grid2">
        {filteredSkills.map((s) => (
          <div key={s.group} className="skillGroup">
            <div className="skillHeader">
              <p className="skillGroupLabel">{s.group}</p>
              <span className="skillLevelBadge">{s.level || "VERIFIED"}</span>
            </div>

            <div className="skillTagList">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="skillTag"
                  onMouseEnter={() => onPlaySound?.("click")}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
