import { useEffect, useState } from "react";
import { strings } from "@/content/strings";

/** 2px fixed top bar showing scroll progress, shown below the 1024px rail breakpoint. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label={strings.scrollProgressLabel}
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed inset-x-0 top-0 z-10 h-0.5 bg-line lg:hidden"
    >
      <div
        className="h-full bg-signal"
        style={{ width: `${(progress * 100).toString()}%` }}
      />
    </div>
  );
}
