import React from "react";
import OrbisImg from "../assets/orbis-project.jpeg";
import FilmRevImg from "../assets/film-reviews-project.jpeg";
import ChefImg from "../assets/chefAI-project.jpeg";
import StockScopeImg from "../assets/stockscope-project.jpeg";
import FdmImg from "../assets/fdm-project.jpeg";
import AccountingImg from "../assets/accounting-project.jpeg";

const Projects = () => {
    const projects = [
        {
            img: OrbisImg,
            title: "Orbis",
            desc: "React Native | CSS | Django | Firebase",
            live: "",
            code: "https://github.com/Coderamrin/devlog",
            status: "incomplete",
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
            img: StockScopeImg,
            title: "Stock Scope",
            desc: "HTML | CSS | JS | PHP",
            live: "https://stock-scope.infy.uk/stockScope/dashboard/",
            code: "https://github.com/Coderamrin/build-10-css-projects",
            status: "completed",
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
            img: FilmRevImg,
            title: "Film Reviews App",
            desc: "React JS | CSS | Django | MySQL",
            live: "https://uilogs.xyz/",
            code: "https://github.com/Coderamrin/html-templates",
            status: "completed",
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
        <section className="flex flex-col justify-center items-center py-24" id="projects">
            <div className="text-center">
                <div className="about-info mb-5">
                    <h2 className="text-[4rem] md:text-[6rem] text-transparent bg-gradient-3 bg-clip-text font-heading font-bold tracking-tight">
                        projects.
                    </h2>
                    <p className="px-12 py-5 font-lato text-sp-white text-[0.9rem] md:text-[1.35rem]">
                        Here are a list of projects that I have been working on. <span className="font-bold">(more updates yet to come)</span>
                    </p>
                </div>
            </div>
            <div className="projects px-8 md:px-28 font-lato text-[1.5rem] container mx-auto grid md:grid-cols-2 gap-10">
                {projects.map((project, i) => {
                    return (
                        <div id="card" className="bg-card-gradient hover:bg-card-hover-gradient p-1.5 rounded-[30px] shadow-xl transform hover:scale-105 transition-transform duration-300" key={i}>
                            {/* <a href={project.live} target="_blank"> */}
                                <img src={project.img} alt={project.title} className="h-full w-full rounded-[25px] object-cover" />
                            {/* </a> */}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;