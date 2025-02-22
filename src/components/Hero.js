import React from "react";
import bubbleImg from "../assets/bubble.png";

const Hero = () => {
  return (
    <section className="h-flex flex-col items-center justify-center bg-transparent z-5">
      <div className="relative flex flex-col items-center justify-center h-[100vh]">
        <img
          src={bubbleImg}
          alt="hero"
          className="hidden md:block absolute -top-[45%] w-[40%] transform hover:scale-105 transition-transform duration-300"
        />
        <h1 className="font-lato text-transparent text-[4rem] md:text-[8rem] bg-gradient-1 bg-clip-text text-center">
          Krish Shah.
        </h1>
      </div>
      <div className="relative flex items-start justify-center h-[65vh]">
        <p className="w-[80%] md:w-[60%] md:leading-[3.5rem] font-lato text-transparent bg-clip-text bg-gradient-3 text-center text-[1.5rem] md:text-[3rem]">
          Like a great app, I am constantly evolving, improving, and hunting for the next revolutionary feature that can change lives.
        </p>
      </div>
      <div id="about" className="relative flex flex-col items-center justify-start h-[75vh]">
        <h2 className="text-[4rem] md:text-[6rem] text-transparent bg-gradient-3 bg-clip-text font-heading font-bold tracking-tight">
          about.
        </h2>
        <p className="w-[80%] md:w-[65%] font-lato text-center text-transparent bg-gradient-4 bg-clip-text text-[0.9rem] md:text-[1.35rem]">
          I'm a final-year BSc Computer Science with Management (ITMB) student at Queen Mary University of London, where I spend my days wrestling with algorithms, and my nights creating apps that make life just a little bit easier. Currently, I’m diving into my most exciting (uni) project: ORBIS, an app that combines task management with maps to help you navigate your daily routine. It generates optimised routes, ensuring you spend less time on the road and more time doing what matters most.
        </p>
      </div>
    </section>
  );
};

export default Hero;