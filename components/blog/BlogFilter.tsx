import React from "react";

export interface BlogFilterProps {
  categories: string[];
  selected?: string;
  onSelect?: (cat: string) => void;
}

export default function BlogFilter({
  categories,
  selected,
  onSelect,
}: BlogFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect?.(cat)}
          className={`text-sm px-3 py-1 rounded-full border transition-colors whitespace-nowrap ${selected === cat
              ? "bg-primary text-white border-primary"
              : "bg-white text-muted-foreground border-border"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
