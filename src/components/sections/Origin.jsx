import React from "react";
import { GraduationCap, Award } from "lucide-react";
import Panel from "../common/Panel";

export default function Origin() {
  return (
    <Panel id="origin" tab="ISSUE 01 — ORIGIN" title="Origin Story & Academic Roots">
      <p className="bodyText">
        Currently pursuing a B.Tech in Electronics and Telecommunication
        Engineering, after completing a Diploma in Computer Science
        Engineering. Somewhere between hardware circuits and full-stack code,
        the path settled firmly on crafting high-velocity digital experiences.
      </p>

      <div className="timeline">
        <div className="timelineItem">
          <div className="timelineIconWrap">
            <GraduationCap size={22} color="var(--electric)" />
          </div>
          <div>
            <p className="timelineTitle">
              B.Tech, Electronics &amp; Telecommunication Engineering
            </p>
            <p className="timelineMeta">
              Ashokrao Mane Group of Institutions, Vathar — 2024 – Present
            </p>
          </div>
        </div>

        <div className="timelineItem">
          <div className="timelineIconWrap">
            <Award size={22} color="var(--crimson)" />
          </div>
          <div>
            <p className="timelineTitle">
              Diploma, Computer Science Engineering
            </p>
            <p className="timelineMeta">
              Sanjay Ghodawat Polytechnic, Atigre — 2020 – 2024
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
}
