import React from "react";
import OrbisImg from "../assets/orbis-project.jpeg";
import FilmRevImg from "../assets/film-reviews-project.png";
import ChefImg from "../assets/chefAI-project.png";
import StockScopeImg from "../assets/stockscope-project.png";
import FdmImg from "../assets/fdm-project.jpeg";
import AccountingImg from "../assets/accounting-project.png";

const Projects = () => {
    const projects = [
        {
            img: OrbisImg,
            title: "Orbis",
            desc: "React Native | CSS | Django | Firebase",
            live: "https://devlogg.onrender.com/",
            code: "https://github.com/Coderamrin/devlog",
            status: "incomplete",
        },
        {
            img: FdmImg,
            title: "FDM Employee Timesheet Portal",
            desc: "React JS | CSS | Flask | MySQL",
            live: "https://get-inspirred.netlify.app/",
            code: "https://github.com/Coderamrin/get-inspired",
            status: "completed",
        },
        {
            img: StockScopeImg,
            title: "Stock Scope",
            desc: "HTML | CSS | JS | PHP",
            live: "https://build-10-css-projects.netlify.app/",
            code: "https://github.com/Coderamrin/build-10-css-projects",
            status: "completed",
        },
        {
            img: FilmRevImg,
            title: "Film Reviews App",
            desc: "React JS | CSS | Django | MySQL",
            live: "https://uilogs.xyz/",
            code: "https://github.com/Coderamrin/html-templates",
            status: "completed",
        },
        {
            img: ChefImg,
            title: "IntelliChef",
            desc: "React Native | CSS (Front End Only)",
            live: "https://build-10-css-projects.netlify.app/",
            code: "https://github.com/Coderamrin/build-10-css-projects",
            status: "incomplete",
        },
        {
            img: AccountingImg,
            title: "Accounting System",
            desc: "PyQt | Python",
            live: "https://get-inspirred.netlify.app/",
            code: "https://github.com/Coderamrin/get-inspired",
            status: "completed",
        },
    ];

    return (
        <section className="bg-sp-white text-sp-black px-64 py-24 mt-0.5" id="projects">
            <div className="container items-center">
                <div className="about-info mb-5">
                    <h2 className="text-[4.5rem] text-sp-black font-heading font-bold tracking-tight">
                        projects.
                    </h2>
                    <p className="pb-5 font-proxima text-sp-black text-[0.9rem] tracking-wide leading-7">
                        Here are a list of projects that I have been working on. <span className="font-semibold">(more updates yet to come)</span>
                    </p>
                </div>
            </div>
            <div className="projects font-proxima text-[0.9rem] container mx-auto grid md:grid-cols-3 gap-10">
                {projects.map((project, i) => {
                    return (
                        <div className="bg-white border-2 border-sp-lightgray hover:bg-white rounded-xl p-3 shadow-xl hover:cursor-pointer transform hover:scale-105 transition-transform duration-300" key={i}>
                            <img src={project.img} alt={project.title} className="text-lux-green h-60 w-full rounded-lg object-cover" />
                            <h1 className="text-[0.9rem] p-5 pb-0 font-proxima font-semibold text-sp-black leading-7">
                                {project.title}
                            </h1>
                            <span className="p-5 pb-0 font-proxima font-semibold text-[0.7rem] text-lux-gold leading-7">({project.status})</span>
                            <p className="text-[0.8rem] p-5 pt-2 text-lux-green leading-7">
                                {project.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;