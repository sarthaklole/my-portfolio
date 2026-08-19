import React from "react";
import { Briefcase, Building2, MapPin, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import Panel from "../common/Panel";
import PixelSpider from "../common/PixelSpider";
import { EXPERIENCES } from "../../data/portfolioData";

export default function Experience() {
  return (
    <Panel id="experience" tab="ISSUE 03 — EXPERIENCE" title="Field Operations & Experience">
      <p className="bodyText">
        From academic theory to production battlegrounds — building, testing, and shipping
        real-world code under professional engineering workflows.
      </p>

      <div className="experienceList">
        {EXPERIENCES.map((exp) => (
          <div key={exp.company + exp.role} className="experienceCard">
            {/* Top Comic Bar */}
            <div className="expHeaderBar">
              <div className="expHeaderTag">
                <Briefcase size={14} style={{ verticalAlign: "-2px", marginRight: 5 }} />
                <span>{exp.issue}</span>
              </div>
              <span className="expBadge">{exp.badge}</span>
            </div>

            <div className="expCardBody">
              <div className="expMainHeader">
                <div className="expRoleInfo">
                  <h3 className="expRoleTitle">{exp.role}</h3>
                  <div className="expMetaRow">
                    <span className="expCompany">
                      <Building2 size={15} color="var(--yellow)" /> {exp.company}
                    </span>
                    <span className="expLocation">
                      <MapPin size={14} color="var(--crimson)" /> {exp.location}
                    </span>
                    <span className="expTypeTag">{exp.type}</span>
                  </div>
                </div>

                <div className="expStampWrap" title="Verified Operational Record">
                  <ShieldCheck size={28} color="var(--neon-cyan)" />
                  <span className="expStampText">{exp.stamp}</span>
                </div>
              </div>

              <p className="expSummary">{exp.summary}</p>

              <div className="expHighlightsSection">
                <p className="expSubHeading">
                  <Cpu size={14} style={{ verticalAlign: "-2px", marginRight: 6, color: "var(--electric)" }} />
                  Key Missions &amp; Operational Responsibilities:
                </p>
                <ul className="expBulletList">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="expBulletItem">
                      <CheckCircle2 size={16} className="expBulletIcon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="expTechFooter">
                <span className="expTechLabel">Tech Arsenal:</span>
                <div className="expTechTags">
                  {exp.tech.map((t) => (
                    <span key={t} className="expTechTag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
