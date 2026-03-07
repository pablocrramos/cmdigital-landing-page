"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface CarouselProps {
  items: React.ReactNode[];
  /** Seconds each slide stays static before advancing. Default 3. */
  interval?: number;
  /** Seconds for the slide transition animation. Default 0.5. */
  transitionDuration?: number;
  className?: string;
}

export function Carousel({
  items,
  interval = 3,
  transitionDuration = 0.5,
  className,
}: CarouselProps) {
  const n = items.length;
  const cloned = [...items, ...items, ...items];

  // Start at the first item of the middle set so we can loop in both directions
  const [index, setIndex] = useState(n);
  const [transitioning, setTransitioning] = useState(false);

  // Auto-advance every `interval` seconds
  useEffect(() => {
    const id = setInterval(() => {
      setTransitioning(true);
      setIndex((i) => i + 1);
    }, interval * 1000);
    return () => clearInterval(id);
  }, [interval]);

  // After the CSS transition ends, silently jump back to the middle set if needed
  useEffect(() => {
    if (!transitioning) return;
    const id = setTimeout(
      () => {
        setIndex((i) => {
          if (i >= n * 2) {
            setTransitioning(false);
            return n;
          }
          return i;
        });
      },
      transitionDuration * 1000 + 50
    );
    return () => clearTimeout(id);
  }, [index, transitioning, n, transitionDuration]);

  return (
    <div className={cn("overflow-hidden w-full", className)}>
      <div
        className="flex"
        style={{
          // offset centers the active item; advance moves exactly 1 item-width per step
          transform: `translateX(calc(var(--carousel-offset) - ${index} * var(--carousel-item-w)))`,
          transition: transitioning ? `transform ${transitionDuration}s ease-in-out` : "none",
        }}
      >
        {cloned.map((item, i) => (
          <div key={i} className="shrink-0 px-2" style={{ width: "var(--carousel-item-w)" }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
