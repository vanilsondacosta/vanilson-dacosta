import { Contact } from "./components/Contact";
import { FloatingIcons } from "./components/FloatingIcons";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <FloatingIcons />
      <div className="relative z-10">
        <Navbar />
        <main className="site-container my-[30px] max-md:my-5">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
