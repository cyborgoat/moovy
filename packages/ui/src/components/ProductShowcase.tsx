import { SpecList, type SpecItem } from "./SpecList";

export type ProductShowcaseProps = {
  eyebrow?: string;
  title: string;
  productName: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  specs: SpecItem[];
  className?: string;
};

export function ProductShowcase({
  eyebrow,
  title,
  productName,
  description,
  imageSrc,
  imageAlt,
  secondaryImageSrc,
  secondaryImageAlt = "",
  specs,
  className,
}: ProductShowcaseProps) {
  return (
    <section className={["moovy-product-showcase", className].filter(Boolean).join(" ")}>
      <div className="moovy-product-showcase__copy">
        {eyebrow ? <p className="moovy-product-showcase__eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        <p className="moovy-product-showcase__name">{productName}</p>
        <p className="moovy-product-showcase__description">{description}</p>
        <SpecList items={specs} />
      </div>
      <div className="moovy-product-showcase__media">
        <img className="moovy-product-showcase__image" src={imageSrc} alt={imageAlt} />
        {secondaryImageSrc ? (
          <img className="moovy-product-showcase__secondary-image" src={secondaryImageSrc} alt={secondaryImageAlt} />
        ) : null}
      </div>
    </section>
  );
}
