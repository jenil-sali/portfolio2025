import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import CodeTerminal from "./components/CodeTerminal/CodeTerminal";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const app_debug = process.env.REACT_APP_DEBUG;

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Intentionally using loose equality as in original code
      if (app_debug === 'false' || app_debug === false) {
        const key = e.key.toLowerCase();

        // Block F12
        if (e.key === "F12") {
          e.preventDefault();
        }

        // Block Ctrl+Shift+I / J / C
        if (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) {
          e.preventDefault();
        }

        // Block Ctrl+U
        if (e.ctrlKey && key === "u") {
          e.preventDefault();
        }

        // Block Ctrl+S (save page)
        if (e.ctrlKey && key === "s") {
          e.preventDefault();
        }
      }
    };

    const handleContextMenu = (e) => {
      if (app_debug === 'false' || app_debug === false) {
        e.preventDefault(); // disable right-click
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [app_debug]);

  return (
    <div className="App">
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CodeTerminal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
