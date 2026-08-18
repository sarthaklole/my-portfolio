import React from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import Panel from "../common/Panel";
import PixelSpider from "../common/PixelSpider";
import { PROJECTS } from "../../data/portfolioData";

export default function Missions() {
  return (
    <Panel id="missions" tab="ISSUE 03 — MISSIONS" title="Field Missions & Shipped Code">
      <div className="grid2col grid2">
        {PROJECTS.map((p) => (
          <div key={p.title} className="projCard">
            {/* Comic Book Issue Header Bar */}
            <div className="comicCoverHeader">
              <span>{p.issue}</span>
              <span>{p.price}</span>
              <span>{p.date}</span>
            </div>

            <div className="comicCoverBody">
              {p.badge && <span className="projBadge">{p.badge}</span>}

              <div className="projHeader">
                <PixelSpider size={30} />
                <h3 className="projTitle">{p.title}</h3>
              </div>

              <p className="projBody">{p.body}</p>

              <div className="projTags">
                {p.tags.map((t) => (
                  <span key={t} className="projTag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="projFooter">
                <span className="projBarcode">{p.barcode}</span>

                {p.link ? (
                  <a
                    href={p.link}
                    className="projLink"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repository <ExternalLink size={14} />
                  </a>
                ) : (
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--crimson)", display: "flex", alignItems: "center", gap: 4 }}>
                    <BookOpen size={13} /> Published Paper
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
