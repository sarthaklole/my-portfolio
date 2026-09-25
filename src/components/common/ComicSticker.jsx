import React, { useState } from "react";
import ComicSoundTag from "./ComicSoundTag";

export default function ComicSticker({
  src,
  alt,
  title,
  sound = "thwip",
  soundText = "*THWIP!*",
  rotation = "-6deg",
  className = "",
  style = {},
  onPlaySound,
}) {
  const [clicked, setClicked] = useState(false);
  const [showTag, setShowTag] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setClicked(true);
    setShowTag(true);
    if (onPlaySound) {
      onPlaySound(sound);
    }
    setTimeout(() => setClicked(false), 400);
    setTimeout(() => setShowTag(false), 1200);
  };

  return (
    <div
      className={`comic-sticker-wrapper ${clicked ? "sticker-pop" : ""} ${className}`}
      style={{
        "--sticker-rot": rotation,
        transform: `rotate(${rotation})`,
        ...style,
      }}
      title={title || alt}
      onClick={handleClick}
    >
      <img
        src={src}
        alt={alt}
        className="comic-sticker-img"
        draggable={false}
      />
      
      {showTag && (
        <div className="comic-sticker-sound-pop">
          <ComicSoundTag
            text={soundText}
            color="var(--yellow)"
            bgColor="var(--crimson)"
            rotation={Math.floor(Math.random() * 20) - 10}
          />
        </div>
      )}
    </div>
  );
}
