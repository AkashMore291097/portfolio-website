import { Styleguide } from "@/components/dev/Styleguide";
import { SkipLink } from "@/components/layout/SkipLink";
import { NavRail } from "@/components/layout/NavRail";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
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

  const aboutSection = sections.find((s) => s.id === "about");
  const projectsSection = sections.find((s) => s.id === "projects");
  const skillsSection = sections.find((s) => s.id === "skills");
  const contactSection = sections.find((s) => s.id === "contact");
  const footerSection = sections.find((s) => s.id === "footer");

  if (
    !aboutSection ||
    !projectsSection ||
    !skillsSection ||
    !contactSection ||
    !footerSection
  ) {
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
        <Projects title={projectsSection.label} />
        <Skills title={skillsSection.label} />
        <Contact title={contactSection.label} />
      </main>
      <Footer id={footerSection.id} title={footerSection.label} />
      <CommandPalette />
    </>
  );
}

export default App;
