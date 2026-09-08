import React from "react";
import { ExternalLink, BookOpen, Eye } from "lucide-react";
import Panel from "../common/Panel";
import PixelSpider from "../common/PixelSpider";
import { PROJECTS } from "../../data/portfolioData";

export default function Missions({ searchQuery = "", onOpenReader, onPlaySound }) {
  const filteredProjects = PROJECTS.filter((p) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.body.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <Panel id="missions" tab="ISSUE 04 — MISSIONS" title="Field Missions & Shipped Code">
      <div className="grid2col grid2">
        {filteredProjects.map((p) => (
          <div
            key={p.title}
            className="projCard comic-issue-hover-card"
            onClick={() => {
              onOpenReader(p);
              onPlaySound?.("thwip");
            }}
          >
            {/* Comic Book Issue Header Bar */}
            <div className="comicCoverHeader">
              <span>{p.issue}</span>
              <span className="comic-price-tag">{p.price}</span>
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

                <div className="projActionBtnGroup">
                  <button
                    className="comic-open-reader-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenReader(p);
                      onPlaySound?.("thwip");
                    }}
                  >
                    <Eye size={13} style={{ marginRight: 4 }} /> READ ISSUE
                  </button>

                  {p.link ? (
                    <a
                      href={p.link}
                      className="projLink"
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View repository <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="paper-badge-tag">
                      <BookOpen size={12} /> Published Paper
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
