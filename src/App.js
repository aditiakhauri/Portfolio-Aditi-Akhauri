import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Tools from './components/Tools';
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Work />
      <Projects />
      <Tools/>
      <Contact />
      <Footer />

    </div>
  );
};

export default App;
