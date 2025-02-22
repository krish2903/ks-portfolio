import React from "react";
import PhotographyImg from "../assets/photography.jpeg";
import TravelImg from "../assets/travelling.jpeg";

const HobbiesSection = () => {
    return (
        <section id="hobbies-sec" className="w-full flex flex-col px-8 md:px-28 py-24 justify-center items-center gap-10">
            <h2 className="text-center text-[4rem] md:text-[6rem] text-transparent bg-gradient-3 bg-clip-text font-heading font-bold tracking-tight">
                hobbies.
            </h2>
            <div className="font-lato text-[1.5rem] container mx-auto grid md:grid-cols-2 gap-10">
                <div id="card" className="bg-card-gradient hover:bg-card-hover-gradient p-1.5 rounded-[30px] shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img src={PhotographyImg} alt='photography' className="relative h-[350px] md:h-[500px] w-full rounded-[25px] object-cover" />
                    <div className="absolute opacity-0 flex top-0 left-0 items-center justify-center w-full h-full hover:opacity-100 bg-[rgba(0,0,0,0.5)] transition-all duration-500">
                        <h2 className="text-[1.75rem] md:text-[2.5rem] text-transparent bg-gradient-4 bg-clip-text font-serif font-bold italic">
                            photography
                        </h2>
                    </div>
                </div>
                <div id="card" className="bg-card-gradient hover:bg-card-hover-gradient p-1.5 rounded-[30px] shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img src={TravelImg} alt='travelling' className="relative h-[350px] md:h-[500px] w-full rounded-[25px] object-cover" />
                    <div className="absolute opacity-0 flex top-0 left-0 items-center justify-center w-full h-full hover:opacity-100 bg-[rgba(0,0,0,0.5)] transition-all duration-500">
                        <h2 className="text-[1.75rem] md:text-[2.5rem] text-transparent bg-gradient-4 bg-clip-text font-serif font-bold italic">
                            travelling
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HobbiesSection;