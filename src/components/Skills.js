import React, { useEffect, useState } from "react";
import SkillsChart from "./SkillsChart";

const SkillsSection = () => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const section = document.getElementById("skills-sec");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsInView(true); 
                        document.getElementById("skills-content").style.opacity = 100;
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section id="skills-sec" className="h-[100vh] flex px-64 py-12 mt-0.5 justify-center items-center gap-32 shadow-sm">
            <div id="skills-content" className="opacity-0 transition-opacity duration-500 w-full about-info">
                <h2 className="flex items-center pb-8 gap-6 text-[1.15rem] text-white font-heading font-semibold">
                    <hr className="flex-grow opacity-50 border-t-2 border-sp-gray"></hr>
                    SKILLS
                    <hr className="flex-grow opacity-50 border-t-2 border-sp-gray"></hr>
                </h2>
                <div className="w-full">
                    <div>
                        <SkillsChart isInView={isInView} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;