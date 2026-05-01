export type SpecItem = {
  label: string;
  value: string;
};

export type SpecListProps = {
  items: SpecItem[];
  variant?: "stacked" | "grid" | "inline";
  className?: string;
};

export function SpecList({ items, variant = "grid", className }: SpecListProps) {
  return (
    <dl className={["moovy-spec-list", `moovy-spec-list--${variant}`, className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <div className="moovy-spec-list__item" key={`${item.label}-${item.value}`}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
