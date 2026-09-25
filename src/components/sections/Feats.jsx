import React from "react";
import Panel from "../common/Panel";
import PixelSpider from "../common/PixelSpider";
import { FEATS } from "../../data/portfolioData";

export default function Feats({ onPlaySound }) {
  const triggerFeatSound = (feat) => {
    if (feat.sound?.includes("SHING")) {
      onPlaySound?.("snikt");
    } else if (feat.sound?.includes("KRAA")) {
      onPlaySound?.("boom");
    } else {
      onPlaySound?.("thwip");
    }
  };

  return (
    <Panel id="feats" tab="ISSUE 05 — ACHIEVEMENTS" title="Achievements & Martial Arts Record" onPlaySound={onPlaySound}>

      <p className="bodyText">
        Before writing full-stack code, there was <strong>Mardani Khel</strong> — a traditional
        Maharashtrian weapon martial art. The unwavering discipline, split-second
        reflexes, and mental endurance that forged a national record are embedded into
        every system built.
      </p>

      <div className="featGrid grid2">
        {FEATS.map((f, i) => (
          <div
            key={f.title}
            className="featCard comic-feat-interactive-card"
            style={{
              transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
            }}
            onMouseEnter={() => triggerFeatSound(f)}
            onClick={() => triggerFeatSound(f)}
          >
            <div className="featTopRow">
              <span className="featBadge">
                <span className="feat-emoji-icon">{f.icon}</span> {f.badge}
              </span>
              <span className="featSoundEffect">{f.sound}</span>
            </div>

            <p className="featTitle">{f.title}</p>
            <p className="featDetail">{f.detail}</p>

            <div className="featCategoryStrip">CATEGORY: {f.category.toUpperCase()}</div>
          </div>
        ))}
      </div>

      <div className="certRow">
        <PixelSpider size={22} />
        <span className="certText">
          <strong>Certified Mastery:</strong> Full JavaScript ES6+ Course Completion Certificate • Verified Operational Skill
        </span>
      </div>
    </Panel>
  );
}
