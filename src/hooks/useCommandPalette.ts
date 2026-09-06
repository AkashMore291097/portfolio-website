import { useEffect, useRef, useState } from "react";

/**
 * Owns the command palette's open state, the global ⌘K/Ctrl+K shortcut,
 * body-scroll locking without scrollbar-induced layout shift, and restoring
 * focus to whatever triggered it on close.
 */
export function useCommandPalette(): {
  isOpen: boolean;
  open: () => void;
  close: () => void;
} {
  const [isOpen, setIsOpen] = useState(false);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  function open() {
    triggerElementRef.current = document.activeElement as HTMLElement | null;
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    triggerElementRef.current?.focus();
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (!isShortcut) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const isTypingInField =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

      // Don't open the shortcut while focus is in a text field elsewhere on
      // the page (there are none today, but this guards any added later —
      // e.g. a future contact form). Closing always works regardless.
      if (isTypingInField && !isOpen) {
        return;
      }

      event.preventDefault();
      if (isOpen) {
        close();
      } else {
        open();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    // Lock scroll without a layout shift: compensate for the vanished
    // scrollbar by padding the body by its exact width.
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth.toString()}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  return { isOpen, open, close };
}
