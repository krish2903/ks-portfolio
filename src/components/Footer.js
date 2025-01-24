import React from "react";
import ContactIcons from "./ContactIcons";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className="w-full flex justify-center bg-dark">
        <div onClick={handleScrollToTop} className="flex justify-center absolute pt-[1rem] translate-y-[-3rem] h-[6rem] w-[7rem] rounded-[50%] bg-dark cursor-pointer hover:scale-110 duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="30" height="30"><path d="M22.5,18a1.5,1.5,0,0,1-1.061-.44L13.768,9.889a2.5,2.5,0,0,0-3.536,0L2.57,17.551A1.5,1.5,0,0,1,.449,15.43L8.111,7.768a5.505,5.505,0,0,1,7.778,0l7.672,7.672A1.5,1.5,0,0,1,22.5,18Z" /></svg>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-2 h-[7rem] bg-dark text-lux-cream px-12">
        <div className="px-4">
          <ContactIcons />
        </div>
        <p className="px-4">&copy; 2025 Krish Shah. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;