import { useState } from "react";

interface CopyLinkProps {
  text: string;
  children: string;
}

const CONFIRMATION_MS = 1600;

export function CopyLink({ text, children }: CopyLinkProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, CONFIRMATION_MS);
    } catch {
      // Clipboard access denied or unavailable — leave state unchanged.
    }
  }

  return (
    <button
      type="button"
      onClick={() => {
        void handleClick();
      }}
      className="text-body text-ink underline decoration-line underline-offset-4 transition-colors duration-interaction ease-out hover:text-signal"
    >
      {copied ? "Copied" : children}
    </button>
  );
}
