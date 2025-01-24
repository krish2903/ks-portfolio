import React from "react";
import LogoLight from "../assets/logoLight.png";
import animations from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <section className="flex flex-col gap-8 justify-center items-center bg-lux-green w-full h-[100vh]">
      <img
        src={LogoLight}
        alt="loading logo"
        className="w-[10%] h-auto"
      />
      <div className={animations.loader}></div>
    </section>
  );
};

export default LoadingScreen;