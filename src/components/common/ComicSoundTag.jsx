import React from "react";

export default function ComicSoundTag({
  text = "*THWIP!*",
  color = "var(--yellow)",
  bgColor = "var(--crimson)",
  rotation = -8,
  style = {},
}) {
  return (
    <span
      className="comic-sound-tag"
      style={{
        color: color,
        backgroundColor: bgColor,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      {text}
    </span>
  );
}
