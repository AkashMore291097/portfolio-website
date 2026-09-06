import { Styleguide } from "@/components/dev/Styleguide";
import { SkipLink } from "@/components/layout/SkipLink";
import { NavRail } from "@/components/layout/NavRail";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { sections } from "@/content/sections";

// import.meta.env.DEV is statically replaced by Vite, so this whole branch —
// and the Styleguide import graph — is dead-code eliminated from production.
function DevStyleguideRoute() {
  if (import.meta.env.DEV && window.location.pathname === "/styleguide") {
    return <Styleguide />;
  }
  return null;
}

function App() {
  const devRoute = DevStyleguideRoute();
  if (devRoute) {
    return devRoute;
  }

  const placeholderSections = sections.filter(
    (s) => s.id !== "footer" && s.id !== "hero" && s.id !== "about",
  );
  const aboutSection = sections.find((s) => s.id === "about");
  const footerSection = sections.find((s) => s.id === "footer");

  if (!aboutSection || !footerSection) {
    throw new Error("sections.ts is missing a required entry");
  }

  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <header>
        <NavRail />
      </header>
      <main id="main-content">
        <Hero />
        <About title={aboutSection.label} />
        {placeholderSections.map((section) => (
          <Section key={section.id} id={section.id} title={section.label} />
        ))}
      </main>
      <footer id={footerSection.id} aria-labelledby={`${footerSection.id}-heading`}>
        <h2 id={`${footerSection.id}-heading`} className="sr-only">
          {footerSection.label}
        </h2>
      </footer>
    </>
  );
}

export default App;
