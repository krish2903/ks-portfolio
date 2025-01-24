import React, { useState, useEffect } from 'react';
import Header from "./components/Header.js";
import LoadingScreen from "./components/LoadingScreen.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Blog />  
      <Contact />
      <Footer />
    </>
  );
}

export default App;
