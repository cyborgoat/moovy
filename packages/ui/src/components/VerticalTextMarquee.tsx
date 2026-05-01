import type { CSSProperties } from "react";

export type VerticalTextMarqueeProps = {
  items: string[];
  speed?: number;
  direction?: "up" | "down";
  pauseOnHover?: boolean;
  size?: "sm" | "md" | "lg" | "display";
  className?: string;
};

export function VerticalTextMarquee({
  items,
  speed = 14,
  direction = "up",
  pauseOnHover = true,
  size = "display",
  className,
}: VerticalTextMarqueeProps) {
  const loopItems = [...items, ...items];

  return (
    <div
      className={[
        "moovy-vertical-marquee",
        `moovy-vertical-marquee--${size}`,
        pauseOnHover && "moovy-vertical-marquee--pause",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--moovy-marquee-duration": `${speed}s` } as CSSProperties}
      aria-label={items.join(", ")}
    >
      <div className={`moovy-vertical-marquee__track moovy-vertical-marquee__track--${direction}`}>
        {loopItems.map((item, index) => (
          <span aria-hidden={index >= items.length} key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
