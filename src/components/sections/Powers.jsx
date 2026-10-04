import React from "react";
import Panel from "../common/Panel";
import { SKILLS } from "../../data/portfolioData";

export default function Powers({ searchQuery = "", onPlaySound }) {
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

  return (
    <Panel id="powers" tab="ISSUE 02 — POWERS & ARSENAL" title="Power Set & Full-Stack Arsenal" onPlaySound={onPlaySound}>
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
