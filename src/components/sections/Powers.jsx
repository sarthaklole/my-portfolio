import React from "react";
import Panel from "../common/Panel";
import { SKILLS } from "../../data/portfolioData";

export default function Powers() {
  return (
    <Panel id="powers" tab="ISSUE 02 — POWERS" title="Power Set & Arsenal">
      <div className="skillGrid grid2">
        {SKILLS.map((s) => (
          <div key={s.group} className="skillGroup">
            <div className="skillHeader">
              <p className="skillGroupLabel">{s.group}</p>
              <span className="skillLevelBadge">{s.level}</span>
            </div>

            <div className="skillTagList">
              {s.items.map((item) => (
                <span key={item} className="skillTag">
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
