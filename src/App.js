import React from "react";

// components
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target=".navbar"
      data-bs-offset="50"
      style={{ overflow: "hidden" }}
    >
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
