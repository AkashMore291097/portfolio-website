import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = {
  variant: ButtonVariant;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const base =
  "inline-flex items-center rounded-button px-4 py-2 text-body-sm font-medium transition-colors duration-interaction ease-out disabled:opacity-40 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-signal text-base hover:bg-signal/90 disabled:hover:bg-signal",
  ghost:
    "border border-line text-ink hover:border-signal disabled:hover:border-line",
};

export function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button type="button" className={`${base} ${variants[variant]}`} {...rest}>
      {children}
    </button>
  );
}
