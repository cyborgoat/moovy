import type { CSSProperties } from "react";

export type LocationMarqueeProps = {
  locations: string[];
  rows?: number;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
};

export function LocationMarquee({ locations, rows = 2, speed = 28, direction = "left", className }: LocationMarqueeProps) {
  const rowCount = Math.max(1, rows);

  return (
    <div
      className={["moovy-location-marquee", className].filter(Boolean).join(" ")}
      style={{ "--moovy-marquee-duration": `${speed}s` } as CSSProperties}
      aria-label={locations.join(", ")}
    >
      {Array.from({ length: rowCount }, (_, rowIndex) => {
        const rowItems = locations.filter((_, index) => index % rowCount === rowIndex);
        const loopItems = [...rowItems, ...rowItems];

        return (
          <div className="moovy-location-marquee__row" key={rowIndex}>
            <div className={`moovy-location-marquee__track moovy-location-marquee__track--${direction}`}>
              {loopItems.map((location, index) => (
                <span aria-hidden={index >= rowItems.length} key={`${location}-${rowIndex}-${index}`}>
                  {location}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
