import { useState, type ReactNode } from "react";

interface DisclosureProps {
  label: string;
  children: ReactNode;
}

export function Disclosure({ label, children }: DisclosureProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-line">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="flex w-full items-center gap-2 py-4 text-left text-body text-ink"
      >
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className="size-3 shrink-0 fill-none stroke-muted transition-transform duration-disclosure ease-out"
          style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          <path d="M3 1.5 8.5 6 3 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {label}
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-disclosure ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden pb-4 text-body-sm text-muted">
          {children}
        </div>
      </div>
    </div>
  );
}
