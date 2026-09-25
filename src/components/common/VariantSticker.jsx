import React from "react";
import ComicSticker from "./ComicSticker";
import stickerSpiderman from "../../assets/stickers/sticker-spiderman.png";
import stickerMiles from "../../assets/stickers/sticker-miles.png";
import stickerVenom from "../../assets/stickers/sticker-venom.png";
import stickerSpiderpunk from "../../assets/stickers/sticker-spiderpunk.png";
import stickerGwen from "../../assets/stickers/sticker-gwen.png";

const STICKER_MAP = {
  origin: {
    src: stickerSpiderman,
    alt: "Spider-Man Spider-Sense",
    title: "Spider-Man — Spider-Sense Active (VAR-001)",
    rotation: "8deg",
    sound: "snikt",
    soundText: "*SPIDER-SENSE!*",
    className: "sticker-panel-spiderman",
  },
  powers: {
    src: stickerVenom,
    alt: "Venom Symbiote Power",
    title: "Venom — Symbiote Level Full-Stack Arsenal (VAR-002)",
    rotation: "-8deg",
    sound: "boom",
    soundText: "*WE ARE VENOM!*",
    className: "sticker-panel-venom",
  },
  experience: {
    src: stickerMiles,
    alt: "Miles Morales Field Operations",
    title: "Miles Morales — Field Ops Record (VAR-003)",
    rotation: "-6deg",
    sound: "thwip",
    soundText: "*DEPLOYED!*",
    className: "sticker-panel-miles",
  },
  missions: {
    src: stickerGwen,
    alt: "Spider-Gwen Shipped Missions",
    title: "Spider-Gwen — Shipped Missions & Code (VAR-004)",
    rotation: "7deg",
    sound: "thwip",
    soundText: "*MISSION CLEAR!*",
    className: "sticker-panel-gwen",
  },
  feats: {
    src: stickerSpiderpunk,
    alt: "Spider-Punk Martial Arts Record",
    title: "Spider-Punk — Hobie Brown Anarchy & Discipline (VAR-005)",
    rotation: "10deg",
    sound: "snikt",
    soundText: "*PUNK REBEL!*",
    className: "sticker-panel-spiderpunk",
  },
};

export default function VariantSticker({ id, side = "right", onPlaySound }) {
  const stickerData = STICKER_MAP[id];
  if (!stickerData) return null;

  return (
    <ComicSticker
      src={stickerData.src}
      alt={stickerData.alt}
      title={stickerData.title}
      rotation={stickerData.rotation}
      sound={stickerData.sound}
      soundText={stickerData.soundText}
      className={`variant-panel-sticker ${stickerData.className}`}
      style={{
        [side]: "-20px",
        top: "-38px",
      }}
      onPlaySound={onPlaySound}
    />
  );
}
