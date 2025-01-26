import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logoDark from "../assets/logoDark.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsScrolled(true);
      } else if (window.scrollY < lastScrollY) {
        setIsScrolled(false);
      }

      if (window.scrollY < window.innerHeight / 10) {
        document.getElementById("header").style.boxShadow = "none";
      } else {
        document.getElementById("header").style.boxShadow = "0 0 3px 0 #c0c0c0";
      }

      // Update last scroll position
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleToggle = () => setToggle(!toggle);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about'); // Get the element with the id 'about'
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScrollToProjects = () => {
    const aboutSection = document.getElementById('projects'); // Get the element with the id 'about'
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScrollToBlog = () => {
    const aboutSection = document.getElementById('blog'); // Get the element with the id 'about'
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScrollToContact = () => {
    const aboutSection = document.getElementById('contact'); // Get the element with the id 'about'
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className={`fixed w-full h-[4.5rem] flex items-center justify-between px-12 bg-white text-lux-green z-10 duration-500 ${isScrolled ? '-translate-y-[100%]' : 'translate-y-0'
        }`}
      id="header"
    >
      <a href="/">
        <img
          src={logoDark}
          alt="Logo"
          className="h-6 w-auto md:ml-auto"
        />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <p onClick={handleScrollToAbout}>about</p>
          </li>
          <li>
            <p onClick={handleScrollToProjects}>projects</p>
          </li>
          <li>
            <p onClick={handleScrollToBlog}>blog</p>
          </li>
          <li>
            <p onClick={handleScrollToContact}>contact</p>
          </li>
          <li>
            <p>resume</p>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
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

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
