import React from "react";
import LogoLight from "../assets/logoLight.png";
import animations from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <section id="load-container" className="duration-1000 flex flex-col gap-8 justify-center items-center bg-black w-full h-[100vh]">
      <img
        src={LogoLight}
        alt="loading logo"
        className="absolute w-[15%] md:w-[10%] h-auto"
      />
      <div className={animations.loader}></div>
    </section>
  );
};

export default LoadingScreen;