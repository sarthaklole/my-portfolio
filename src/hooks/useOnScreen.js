import { useState, useEffect } from "react";

export function useOnScreen(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);

  return visible;
}
