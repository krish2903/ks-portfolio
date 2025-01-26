import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="flex justify-center h-[100vh] bg-sp-white pt-[5rem] px-5 text-white shadow-sm z-5">
      <img
        src={heroImg}
        alt="hero"
        className="w-auto h-full"
      />
    </section>
  );
};

export default Hero;