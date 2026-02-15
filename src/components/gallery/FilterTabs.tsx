"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
  options: string[];
};

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 17.27l5.18 3.04-1.64-5.81L20 9.24l-5.97-.51L12 3.25 9.97 8.73 4 9.24l4.46 5.22-1.64 5.81L12 17.27z" />
    </svg>
  );
}

export default function FilterTabs({ value, onChange, options }: Props) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      {options.map((opt) => {
        const active = opt === value;
        const isFeatured = opt === "Featured";

        const base =
          "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition select-none";

        const inactive = isFeatured
          ? "border border-amber-300/25 bg-amber-300/10 text-amber-100 hover:bg-amber-300/15 hover:border-amber-300/35"
          : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

        const activeCls = isFeatured
          ? "bg-amber-300 text-black shadow-[0_0_0_1px_rgba(252,211,77,0.35),0_10px_30px_rgba(252,211,77,0.08)]"
          : "bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(0,0,0,0.25)]";

        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={[base, active ? activeCls : inactive].join(" ")}
            type="button"
            title={isFeatured ? "Curated highlights" : undefined}
          >
            {isFeatured ? <StarIcon className="h-4 w-4" /> : null}
            <span>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}
