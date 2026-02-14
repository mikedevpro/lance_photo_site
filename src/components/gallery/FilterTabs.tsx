"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
  options: string[];
};

export default function FilterTabs({ value, onChange, options }: Props) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={[
              "rounded-xl px-4 py-2 text-sm font-semibold transition",
              active
                ? "bg-white text-black"
                : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
            ].join(" ")}
            type="button"
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
