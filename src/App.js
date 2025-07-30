
import Navbar from "./components/navbar/navbar";
import Intro from "./components/Introduction/intro";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import ContactUs from "./components/ContactUs/contactUs";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const handleKeyDown = (e) => {
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

      // Optional: Block Ctrl+S (save page)
      if (e.ctrlKey && key === "s") {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault(); // disable right-click
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
