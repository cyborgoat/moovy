export type ImageRevealCardProps = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  reveal?: "fade" | "clip" | "parallax" | "scale";
  className?: string;
};

export function ImageRevealCard({ title, body, imageSrc, imageAlt, reveal = "scale", className }: ImageRevealCardProps) {
  return (
    <article className={["moovy-image-card", `moovy-image-card--${reveal}`, className].filter(Boolean).join(" ")}>
      <div className="moovy-image-card__media">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="moovy-image-card__copy">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}
