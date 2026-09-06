import { strings } from "@/content/strings";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-20 -translate-y-20 rounded-button bg-signal px-4 py-2 text-body-sm text-base transition-transform duration-interaction ease-out focus-visible:translate-y-0"
    >
      {strings.skipToContent}
    </a>
  );
}
