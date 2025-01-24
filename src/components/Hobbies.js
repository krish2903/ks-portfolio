import React from "react";
import PhotographyImg from "../assets/photography.jpeg";
import ChessImg from "../assets/chess.png";
import TravelImg from "../assets/travelling.jpeg";

const HobbiesSection = () => {
    return (
        <section className="flex px-64 py-12 pb-20 mt-3 justify-center items-center gap-32 shadow-sm">
            <div className="w-full about-info">
                <h2 className="flex items-center pb-8 gap-6 text-[1.15rem] text-lux-gold font-proxima font-bold">
                    <hr className="flex-grow opacity-50 border-t-2 border-lux-gold"></hr>
                    HOBBIES
                    <hr className="flex-grow opacity-50 border-t-2 border-lux-gold"></hr>
                </h2>
                <div className="w-full">
                    <div className="font-proxima text-[0.9rem] container mx-auto grid md:grid-cols-3 gap-10">
                        <div className="bg-lux-cream rounded-xl p-3 shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img src={PhotographyImg} alt='photography' className="text-lux-green h-80 w-full rounded-lg object-cover" />
                            <h1 className="text-[1rem] p-5 pb-0 font-proxima font-bold text-lux-green">
                                Photography
                            </h1>
                        </div>
                        <div className="bg-lux-cream rounded-xl p-3 shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img src={TravelImg} alt='travelling' className="text-lux-green h-80 w-full rounded-lg object-cover" />
                            <h1 className="text-[1rem] p-5 pb-0 font-proxima font-bold text-lux-green">
                                Travelling
                            </h1>
                        </div>
                        <div className="bg-lux-cream rounded-xl p-3 shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img src={ChessImg} alt='chess' className="text-lux-green h-80 w-full rounded-lg object-cover" />
                            <h1 className="text-[1rem] p-5 pb-0 font-proxima font-bold text-lux-green">
                                Chess
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HobbiesSection;