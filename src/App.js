import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Work />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default App;
