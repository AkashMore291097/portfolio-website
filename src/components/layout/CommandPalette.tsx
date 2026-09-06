import { useEffect, useMemo, useRef, useState } from "react";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import { fuzzyMatch } from "@/lib/fuzzyMatch";
import { sections } from "@/content/sections";
import { profile } from "@/content/profile";
import { strings } from "@/content/strings";

interface Command {
  id: string;
  label: string;
  run: () => void;
}

const RESUME_FILENAME = `${profile.fullName.replace(/\s+/g, "-")}-Resume.pdf`;

function downloadResume() {
  const link = document.createElement("a");
  link.href = profile.resumePath;
  link.download = RESUME_FILENAME;
  link.click();
}

function copyEmail() {
  void navigator.clipboard.writeText(profile.email);
}

function openInNewTab(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function CommandPalette() {
  const { isOpen, close } = useCommandPalette();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(() => {
    // Footer is chrome, not a destination — jump-to commands stop at the
    // last real content section (Contact).
    const jumpCommands: Command[] = sections
      .filter((section) => section.id !== "footer")
      .map((section) => ({
        id: `jump-${section.id}`,
        label: `Go to ${section.label}`,
        run: () => {
          document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
        },
      }));

    return [
      ...jumpCommands,
      { id: "download-resume", label: "Download resume", run: downloadResume },
      { id: "copy-email", label: "Copy email address", run: copyEmail },
      { id: "open-github", label: "Open GitHub", run: () => { openInNewTab(profile.social.github); } },
      { id: "open-linkedin", label: "Open LinkedIn", run: () => { openInNewTab(profile.social.linkedin); } },
    ];
  }, []);

  const filtered = useMemo(
    () => commands.filter((command) => fuzzyMatch(command.label, query)),
    [commands, query],
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveIndex(0);
      // Focus the search input once the dialog has mounted.
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isOpen]);

  function runCommand(command: Command) {
    close();
    command.run();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const command = filtered[activeIndex];
      if (command) {
        runCommand(command);
      }
      return;
    }

    if (event.key === "Tab") {
      // Focus trap: the search input is the only focusable element inside
      // the dialog, so Tab and Shift+Tab both just keep focus on it.
      event.preventDefault();
      inputRef.current?.focus();
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-6 pt-24">
      <button
        type="button"
        aria-label={strings.commandPaletteLabel}
        tabIndex={-1}
        onClick={close}
        className="absolute inset-0 bg-base/70"
      />
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions --
          role="dialog" is the correct ARIA pattern for a modal, and a modal
          dialog needs its own keydown handling (Escape, arrows, Enter, Tab
          trap) — jsx-a11y doesn't recognise role="dialog" as interactive. */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={strings.commandPaletteLabel}
        onKeyDown={handleKeyDown}
        className="relative flex w-full max-w-xl flex-col overflow-hidden rounded-panel border border-line bg-surface"
      >
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="command-palette-list"
          aria-activedescendant={filtered[activeIndex] ? `command-${filtered[activeIndex].id}` : undefined}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          placeholder={strings.commandPalettePlaceholder}
          aria-label={strings.commandPalettePlaceholder}
          className="border-b border-line bg-transparent px-4 py-3 text-body text-ink outline-none placeholder:text-muted"
        />
        <ul id="command-palette-list" role="listbox" className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <li className="px-4 py-3 text-body-sm text-muted">{strings.commandPaletteEmpty}</li>
          ) : (
            filtered.map((command, index) => (
              <li
                key={command.id}
                id={`command-${command.id}`}
                role="option"
                aria-selected={index === activeIndex}
              >
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => {
                    runCommand(command);
                  }}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                  }}
                  className={`w-full px-4 py-2 text-left text-body-sm transition-colors duration-interaction ease-out active:bg-line active:text-ink ${
                    index === activeIndex ? "bg-base text-ink" : "text-muted"
                  }`}
                >
                  {command.label}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
