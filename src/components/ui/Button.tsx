import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonOwnProps {
  variant: ButtonVariant;
  children: ReactNode;
}

type ButtonAsButton = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

type ButtonAsAnchor = ButtonOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const base =
  "inline-flex items-center rounded-button px-4 py-2 text-body-sm font-medium transition-[color,background-color,border-color,transform] duration-interaction ease-out motion-safe:active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-signal text-base hover:bg-signal/90 active:bg-signal disabled:hover:bg-signal",
  ghost:
    "border border-line text-ink hover:border-signal active:border-signal active:bg-surface disabled:hover:border-line disabled:active:bg-transparent",
};

export function Button({ variant, children, ...rest }: ButtonProps) {
  const className = `${base} ${variants[variant]}`;

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
