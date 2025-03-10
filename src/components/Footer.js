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
    <div  id='footer'>
      <div className="w-full flex justify-center bg-black z-10">
        <div id="card" onClick={handleScrollToTop} className="flex flex-col pt-[calc(3rem-30px)] items-center absolute translate-y-[-3rem] h-[6rem] w-[7rem] rounded-[50%] border-t-4 border-black bg-black hover:scale-110 duration-500 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="30" height="30"><path d="M22.5,18a1.5,1.5,0,0,1-1.061-.44L13.768,9.889a2.5,2.5,0,0,0-3.536,0L2.57,17.551A1.5,1.5,0,0,1,.449,15.43L8.111,7.768a5.505,5.505,0,0,1,7.778,0l7.672,7.672A1.5,1.5,0,0,1,22.5,18Z" /></svg>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-2 h-[7rem] font-lato bg-black text-sp-white px-12 py-24 md:py-0">
        <div className="px-4">
          <ContactIcons />
        </div>
        <p className="px-4 text-[1rem]">&copy; 2025 Krish Shah. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;