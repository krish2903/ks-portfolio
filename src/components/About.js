import React from "react";
import SelfPortrait from "../assets/aboutme.png";
import SkillsSection from "./Skills";
import HobbiesSection from "./Hobbies";

const About = () => {
  return (
    <>
      <section className="flex px-64 py-12 mt-3 justify-center items-center gap-32 shadow-sm" id="about">
        <img
          src={SelfPortrait}
          alt="self"
          className="h-[75vh] w-auto"
        />
        <div className="about-info">
          <h2 className="text-[5rem] text-lux-gold font-proxima font-bold">
            about.
          </h2>
          <h3 className="text-[1.25rem] pb-[1rem] text-dark font-proxima">
            <span className="text-[1.75rem] text-lux-gold font-bold">hi. </span>I am <span className="font-bold opacity-60">Krish Shah</span>.
          </h3>
          <p className="pb-[1rem] font-proxima text-dark text-justify text-[1.15rem]">
            Like a great app, I am constantly evolving, improving, and hunting for the next revolutionary feature that can change lives.
          </p>
          <p className="pb-[1rem] font-proxima text-dark text-justify">
            I'm a final-year BSc Computer Science with Management (ITMB) student at Queen Mary University of London, where I spend my days wrestling with algorithms, and my nights creating apps that make life just a little bit easier.
          </p>
          <p className="pb-[1rem] font-proxima text-dark text-justify">
            While I might not have a stack of industry experience (yet), I’ve had the chance to work on some cool projects that let me flex my problem-solving muscles. For instance, I worked with an engineering team to develop an Employee Timesheet Portal, simplfying payroll processing for FDM consultants, or when I created a custom accounting and stock management system for a local diamond jewellery firm - a sparkling solution.
          </p>
          <p className="pb-[1rem] font-proxima text-dark text-justify">
            Currently, I’m diving into my most exciting (uni) project: ORBIS, an app that combines task management with maps to help you navigate your daily routine. It generates optimised routes, ensuring you spend less time on the road and more time doing what matters most.
          </p>
        </div>
      </section>
      <SkillsSection />
      <HobbiesSection />
    </>
  );
};

export default About;