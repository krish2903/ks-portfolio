import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-sp-white pt-[4rem] px-5 text-white shadow-lg z-5">
      <img
        src={heroImg}
        alt="hero"
        className="w-full h-full"
      />
    </section>
  );
};

export default Hero;