import { useState, type MouseEvent } from "react";
import { strings } from "@/content/strings";

interface CopyLinkProps {
  /** The value copied to the clipboard, e.g. "mailto:you@example.com". */
  href: string;
  /** The raw value to copy (without the "mailto:" prefix) — what a person
   * actually wants on their clipboard is the address, not the URI scheme. */
  copyValue: string;
  children: string;
}

const CONFIRMATION_MS = 1600;

/**
 * A real anchor (so middle-click/right-click/"copy link address" all behave
 * normally) that also copies on a plain left-click instead of navigating —
 * satisfies S-015's "copy on click, but still a real mailto: link" rule.
 */
export function CopyLink({ href, copyValue, children }: CopyLinkProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // Only intercept the plain left-click that would open a mail client;
    // let modifier-clicks, middle-click, and the context menu behave as a
    // normal link (browsers never route those through onClick anyway).
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, CONFIRMATION_MS);
    } catch {
      // Clipboard access denied or unavailable — fall back to a real navigation.
      window.location.href = href;
    }
  }

  return (
    <a
      href={href}
      onClick={(event) => {
        void handleClick(event);
      }}
      className="font-mono text-data text-ink tracking-data underline decoration-line underline-offset-4 transition-[color,opacity] duration-interaction ease-out hover:text-signal active:opacity-70"
    >
      {copied ? strings.copyConfirmation : children}
    </a>
  );
}
