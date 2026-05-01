import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export type StatItem = {
  label: string;
  value: ReactNode;
};

export type StatsBandProps = {
  stats: StatItem[];
  className?: string;
};

export type LiveTimeProps = {
  timeZone?: string;
  locale?: string;
};

export function LiveTime({ timeZone = "Asia/Dubai", locale = "en-GB" }: LiveTimeProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <time dateTime={now.toISOString()}>
      {new Intl.DateTimeFormat(locale, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone,
      }).format(now)}
    </time>
  );
}

export function StatsBand({ stats, className }: StatsBandProps) {
  return (
    <dl className={["moovy-stats-band", className].filter(Boolean).join(" ")}>
      {stats.map((stat) => (
        <div className="moovy-stats-band__item" key={stat.label}>
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
