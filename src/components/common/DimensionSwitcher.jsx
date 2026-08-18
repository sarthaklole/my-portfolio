import React from "react";
import { DIMENSIONS } from "../../data/portfolioData";

export default function DimensionSwitcher({ currentDimension, onSelectDimension }) {
  return (
    <div className="dimension-switcher-wrap">
      <div className="dimension-status-beacon">
        <span className="beacon-pulse" />
        <span className="beacon-text">UNIVERSE:</span>
      </div>

      <div className="dimension-buttons">
        {Object.values(DIMENSIONS).map((dim) => {
          const isActive = currentDimension === dim.id;
          return (
            <button
              key={dim.id}
              className={`dimension-btn ${isActive ? "active" : ""}`}
              onClick={() => onSelectDimension(dim.id)}
              title={`${dim.name} — ${dim.hero} (${dim.tagline})`}
            >
              <span className="dim-code">{dim.name}</span>
              <span className="dim-hero">{dim.hero}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
