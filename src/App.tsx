// App.tsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar /> {/* Dark mode removed */}

      {/* Sections */}
      <main className="pt-20">
        <section id="Home">
          <Hero />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Experience">
          <Experience />
        </section>
        <section id="Education">
          <Education />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;