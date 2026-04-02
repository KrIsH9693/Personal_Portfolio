// App.tsx

import { useState } from "react";
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
  const [darkMode, setDarkMode] = useState(true); // default dark

  return (
    <div className={darkMode ? "dark bg-black text-white" : "bg-white text-black"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

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