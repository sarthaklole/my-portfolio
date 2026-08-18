import React, { useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";
import VariantSticker from "./VariantSticker";

export default function Panel({ id, tab, title, children }) {
  const ref = useRef(null);
  const visible = useOnScreen(ref);

  return (
    <section
      id={id}
      ref={ref}
      className="panel"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <VariantSticker
        id={id}
        side={id === "missions" || id === "contact" ? "left" : "right"}
      />
      <div className="panelTab">{tab}</div>
      <h2 className="panelTitle">{title}</h2>
      {children}
    </section>
  );
}
