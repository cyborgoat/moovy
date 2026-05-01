import type { ReactNode } from "react";

export type FeatureGridItem = {
  title: string;
  body: string;
  icon?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
};

export type FeatureGridProps = {
  heading?: string;
  items: FeatureGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
};

export function FeatureGrid({ heading, items, columns = 2, className }: FeatureGridProps) {
  return (
    <section className={["moovy-feature-grid", className].filter(Boolean).join(" ")}>
      {heading ? <h2>{heading}</h2> : null}
      <div className={`moovy-feature-grid__items moovy-feature-grid__items--${columns}`}>
        {items.map((item) => (
          <article className="moovy-feature-grid__item" key={item.title}>
            {item.imageSrc ? <img src={item.imageSrc} alt={item.imageAlt ?? ""} /> : null}
            {item.icon ? <div className="moovy-feature-grid__icon">{item.icon}</div> : null}
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
