import React from "react";
import Panel from "../common/Panel";
import PixelSpider from "../common/PixelSpider";
import { FEATS } from "../../data/portfolioData";

export default function Feats() {
  return (
    <Panel id="feats" tab="ISSUE 05 — FEATS OF STRENGTH" title="Feats of Strength & Mastery">
      <p className="bodyText">
        Before the keyboard, there was <strong>Mardani Khel</strong> — a traditional
        Maharashtrian weapon martial art. The unwavering discipline, split-second
        reflexes, and mental endurance that built a national record are forged into
        every line of code shipped.
      </p>

      <div className="featGrid grid2">
        {FEATS.map((f, i) => (
          <div
            key={f.title}
            className="featCard"
            style={{
              transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
            }}
          >
            <div className="featTopRow">
              <span className="featBadge">{f.badge}</span>
              <span className="featSoundEffect">{f.sound}</span>
            </div>

            <p className="featTitle">{f.title}</p>
            <p className="featDetail">{f.detail}</p>
          </div>
        ))}
      </div>

      <div className="certRow">
        <PixelSpider size={22} />
        <span className="certText">
          <strong>Certified Mastery:</strong> Full JavaScript ES6+ Course Completion Certificate
        </span>
      </div>
    </Panel>
  );
}
