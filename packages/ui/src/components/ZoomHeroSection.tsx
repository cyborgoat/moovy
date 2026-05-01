import type { ReactNode } from "react";

export type ZoomHeroSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  backgroundSrc: string;
  backgroundAlt?: string;
  zoom?: "in" | "out" | "pulse";
  overlay?: "dark" | "light" | "none";
  children?: ReactNode;
  className?: string;
};

export function ZoomHeroSection({
  eyebrow,
  title,
  subtitle,
  backgroundSrc,
  backgroundAlt = "",
  zoom = "pulse",
  overlay = "dark",
  children,
  className,
}: ZoomHeroSectionProps) {
  return (
    <section className={["moovy-zoom-hero", `moovy-zoom-hero--${overlay}`, className].filter(Boolean).join(" ")}>
      <img className={`moovy-zoom-hero__media moovy-zoom-hero__media--${zoom}`} src={backgroundSrc} alt={backgroundAlt} />
      <div className="moovy-zoom-hero__content">
        {eyebrow ? <p className="moovy-zoom-hero__eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="moovy-zoom-hero__subtitle">{subtitle}</p> : null}
        {children ? <div className="moovy-zoom-hero__actions">{children}</div> : null}
      </div>
    </section>
  );
}
