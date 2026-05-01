import { useEffect, useMemo, useRef, useState } from "react";

type VerticalTextMarqueeProps = {
  items: string[];
  speed?: number;
  direction?: "up" | "down";
  pauseOnHover?: boolean;
  size?: "sm" | "md" | "lg" | "display";
  className?: string;
};

export type { VerticalTextMarqueeProps };

const clampIndex = (value: number, length: number) => (value + length) % length;
const activeItemIndex = 3;
const visibleOffsets = [-3, -2, -1, 0, 1, 2, 3];
const stepShift = 100 / visibleOffsets.length;
const getVisualIntensity = (distance: number) => {
  const absoluteDistance = Math.abs(distance);

  if (absoluteDistance <= 1) {
    return 1 - absoluteDistance * 0.5;
  }

  if (absoluteDistance <= 2) {
    return 0.5 - (absoluteDistance - 1) * 0.4;
  }

  if (absoluteDistance <= 3) {
    return 0.1 - (absoluteDistance - 2) * 0.1;
  }

  return 0;
};

export function VerticalTextMarquee({
  items,
  speed = 6,
  direction = "up",
  pauseOnHover = true,
  size = "display",
  className,
}: VerticalTextMarqueeProps) {
  const total = items.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [shift, setShift] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const transitionMs = 520;
  const cycleDelayMs = Math.max(speed * 300, transitionMs + 120);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const sizeClass = useMemo(
    () =>
      ({
        sm: "text-[12px] min-h-[3.6em] h-[3.6em]",
        md: "text-[18px] min-h-[3.8em] h-[3.8em]",
        lg: "text-[28px] min-h-[4.4em] h-[4.4em]",
        display: "font-light font-serif text-[clamp(22px,4vw,62px)] min-h-[4.8em] h-[4.8em]",
      })[size],
    [size],
  );

  const visibleItems = useMemo(() => {
    if (total === 0) {
      return [];
    }

    return visibleOffsets.map((offset) => {
      const itemIndex = clampIndex(activeIndex + offset, total);

      return {
        label: items[itemIndex],
        itemIndex,
      };
    });
  }, [activeIndex, items, total]);

  useEffect(() => {
    setActiveIndex(0);
  }, [items.join("|")]);

  useEffect(() => {
    if (total < 2 || paused) {
      return;
    }

    const tick = () => {
      const step = direction === "up" ? 1 : -1;

      setAnimating(true);
      setShift(direction === "up" ? -stepShift : stepShift);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setActiveIndex((index) => clampIndex(index + step, total));
        setShift(0);
        setAnimating(false);
      }, transitionMs);
    };

    intervalRef.current = window.setInterval(tick, cycleDelayMs);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [direction, paused, total, transitionMs, cycleDelayMs]);

  if (!items.length) {
    return null;
  }

  return (
    <div
      className={[
        "relative overflow-hidden min-h-[6em] h-[6em] leading-none text-left bg-transparent",
        sizeClass,
        "transition-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={items.join(", ")}
      onMouseEnter={() => {
        if (pauseOnHover) {
          setPaused(true);
        }
      }}
      onMouseLeave={() => {
        if (pauseOnHover) {
          setPaused(false);
        }
      }}
    >
      <div
        className={`absolute inset-x-0 top-1/2 flex flex-col items-center will-change-transform ${
          animating
            ? "transition-[transform] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            : ""
        }`}
        style={{
          transform: `translateY(calc(-50% + ${shift}%))`,
        }}
      >
        {visibleItems.map((item, index) => {
          const visualDistance = index - activeItemIndex + shift / stepShift;
          const intensity = getVisualIntensity(visualDistance);
          const grayscale = (1 - intensity) * 0.45;
          const shadowOpacity = intensity * 0.24;
          const shadowBlur = intensity === 0 ? 0 : 10 + intensity * 14;
          const shadowY = intensity === 0 ? 0 : 4 + intensity * 12;
          const scale = 0.965 + intensity * 0.035;

          return (
            <span
              key={`${item.itemIndex}-${item.label}`}
              className="block h-[1.3em] leading-[1.2] transition-[opacity,transform,filter] duration-[520ms] ease-in-out will-change-[opacity,transform,filter]"
              style={{
                opacity: intensity,
                filter: `grayscale(${grayscale}) drop-shadow(0 ${shadowY}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity}))`,
                transform: `translateY(0) scale(${scale})`,
              }}
              aria-hidden={false}
            >
              {item.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
