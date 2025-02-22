import React, { useState, useEffect } from 'react';
import Header from "./components/Header.js";
import LoadingScreen from "./components/LoadingScreen.js";
import Hero from "./components/Hero.js";
import HobbiesSection from './components/Hobbies.js';
import Balance from "./components/Balance.js"
import Projects from "./components/Projects.js";
import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const webContainer = document.getElementById("web-container");
      if (webContainer) {
        webContainer.style.opacity = 100;
      }
    }
  });

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div id="web-container" className='opacity-0 transition-opacity duration-1000'>
        <Header />
        <Hero />
        <div className="hidden md:block">
          <Balance />
        </div>
        <Projects />
        <Blog />
        <HobbiesSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
