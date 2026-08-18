import React from "react";
import { VARIANT_BADGES } from "../../data/portfolioData";

export default function VariantSticker({ id, side = "right" }) {
  const data = VARIANT_BADGES[id];
  if (!data) return null;

  const rot = id.length % 2 === 0 ? -8 : 7;

  return (
    <div
      className="variantSticker"
      style={{
        [side]: -18,
        transform: `rotate(${rot}deg)`,
        borderColor: data.ring,
      }}
      title={`${data.code} — ${data.name}`}
    >
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle
          cx="17"
          cy="17"
          r="15.5"
          stroke={data.ring}
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
        <path
          d="M17 6 L20 14 L28 14 L21.5 19 L24 27 L17 22 L10 27 L12.5 19 L6 14 L14 14 Z"
          fill={data.ring}
          opacity="0.9"
        />
      </svg>
      <span className="stickerCode">{data.code}</span>
      <span className="stickerName" style={{ color: data.ring }}>
        {data.name}
      </span>
    </div>
  );
}
