import React, { useState, useEffect } from "react";
import logoLight from "../assets/logoLight.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkBg, setDarkBg] = useState(true);

  useEffect(() => {
    const updateBg = () => {
      if (window.scrollY > window.innerHeight) {
        setDarkBg(false);
      } else {
        setDarkBg(true);
      }
    };

    updateBg();
    window.addEventListener("scroll", updateBg);
    return () => window.removeEventListener("scroll", updateBg);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsScrolled(false);
      }
      // Hide header when scrolling down and not at the top
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolled(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className={`
        fixed w-full h-[5.5rem] 
        flex items-center justify-center md:justify-between 
        text-lux-cream px-12 
        transition-transform duration-500 ease-in-out
        ${isScrolled ? '-translate-y-full' : 'translate-y-0'}
        ${!darkBg ? "backdrop-blur-lg bg-black/20" : "bg-transparent"}
        z-10
      `}
      id="header"
    >
      <a href="/ks-portfolio">
        <img
          src={logoLight}
          alt="Logo"
          className="h-8 w-auto md:ml-auto"
        />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center">
          {['about', 'projects', 'blog', 'contact'].map((section) => (
            <li key={section}>
              <button
                className="font-lato px-4 py-5 text-[1rem] text-decoration-none text-sp-white hover:text-white hover:border-b-[1.25pt] hover:border-b-white cursor-pointer"
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      {/* <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#blog">Blog</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/#resume">Resume</a>
          </li>
        </ul>
      </nav>

      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button> */}
    </header>
  );
};

export default Header;