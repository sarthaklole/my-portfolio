import React from "react";
import spiderIcon from "../../spider-icon.png";

export default function PixelSpider({ size = 28, className = "", style = {} }) {
  return (
    <img
      src={spiderIcon}
      alt="Spider-Man Icon"
      width={size}
      height={size}
      className={`spider-icon-img ${className}`}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        flexShrink: 0,
        display: "inline-block",
        verticalAlign: "middle",
        filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.5))",
        transition: "transform 0.2s ease",
        ...style,
      }}
    />
  );
}

