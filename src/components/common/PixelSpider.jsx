import React from "react";
import { SPIDER_BADGE_GRID, BADGE_PALETTE } from "../../data/portfolioData";

export default function PixelSpider({ size = 28, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
      style={{
        flexShrink: 0,
        imageRendering: "pixelated",
        display: "inline-block",
        verticalAlign: "middle",
        ...style,
      }}
    >
      {SPIDER_BADGE_GRID.map((row, r) =>
        row.split("").map((cell, c) => {
          const fill = BADGE_PALETTE[cell];
          if (!fill || fill === "transparent") return null;
          return (
            <rect
              key={`${r}-${c}`}
              x={c}
              y={r}
              width={1}
              height={1}
              fill={fill}
            />
          );
        })
      )}
    </svg>
  );
}
