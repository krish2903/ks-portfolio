import React from "react";
import SelfPortrait from "../assets/aboutme.png";
import SkillsSection from "./Skills";
import HobbiesSection from "./Hobbies";

const About = () => {
  return (
    <>
      <section className="h-[100vh] flex px-64 py-12 justify-center items-center gap-16 bg-white shadow-sm" id="about">
        <div className="about-info">
          <h2 className="text-[4.5rem] text-sp-black font-heading font-bold tracking-tight">
            about.
          </h2>
          <p className="pb-[1rem] font-proxima text-sp-black text-justify text-[1.1rem] tracking-wide leading-8">
            Like a great app, I am constantly evolving, improving, and hunting for the next revolutionary feature that can change lives.
          </p>
          <p className="pb-[1rem] font-proxima text-sp-black text-justify text-[0.9rem] tracking-wide leading-7">
            I'm a final-year BSc Computer Science with Management (ITMB) student at Queen Mary University of London, where I spend my days wrestling with algorithms, and my nights creating apps that make life just a little bit easier.
          </p>
          <p className="pb-[1rem] font-proxima text-sp-black text-justify text-[0.9rem] tracking-wide leading-7">
            Currently, I’m diving into my most exciting (uni) project: ORBIS, an app that combines task management with maps to help you navigate your daily routine. It generates optimised routes, ensuring you spend less time on the road and more time doing what matters most.
          </p>
        </div>
        <img
          src={SelfPortrait}
          alt="self"
          className="h-[60vh] w-auto"
        />
      </section>
      <SkillsSection />
      <HobbiesSection />
    </>
  );
};

export default About;