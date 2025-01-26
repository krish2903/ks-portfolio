import React from "react";
import SkillsChart from "./SkillsChart"; 

const SkillsSection = () => {
    return (
        <section className="h-[100vh] flex bg-sp-white px-64 py-12 mt-0.5 justify-center items-center gap-32 shadow-sm">
            <div className="w-full about-info">
                <h2 className="flex items-center pb-8 gap-6 text-[1.15rem] text-sp-gray font-heading font-semibold">
                    <hr className="flex-grow opacity-50 border-t-2 border-sp-gray"></hr>
                    SKILLS
                    <hr className="flex-grow opacity-50 border-t-2 border-sp-gray"></hr>
                </h2>
                <div className="w-full">
                    <div>
                        <SkillsChart />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;