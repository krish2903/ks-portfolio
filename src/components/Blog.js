import React from "react";
// import Random from "../assets/hero.png";

const Blog = () => {
    // const post = [
    //     // {
    //     //     img: Random,
    //     //     title: "How to build a counter app with JavaScript",
    //     //     category: "JavaScript Ultimate Guide 02: The DOM",
    //     //     url: "https://dev.to/coderamrin/how-to-build-a-counter-app-with-javascript-439p",
    //     // },
    //     // {
    //     //     img: Random,
    //     //     title: "JavaScript Ultimate Guide 02: The DOM",
    //     //     category: "JavaScript Ultimate Guide 02: The DOM",
    //     //     url: "https://dev.to/coderamrin/javascript-ultimate-guide-02-the-dom-3ho9",
    //     // },
    // ];

    return (
        <section className="flex items-center justify-center h-[75vh]" id="blog">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-center text-[4rem] md:text-[6rem] text-transparent bg-gradient-3 bg-clip-text font-heading font-bold tracking-tight">
                    blogs.
                </h2>
                <p className="font-lato text-sp-white font-semibold text-[0.9rem] md:text-[1.35rem]">coming soon.</p>
            </div>

            {/* <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
                {post.map((item) => {
                    return (
                        <a
                            href={item.url}
                        >
                            <div className="bg-sp-white rounded-xl p-5 shadow-xl transform hover:scale-105 transition-transform duration-300">
                                <img src={item.img} alt={item.title} />
                                <h3 className="pt-5 text-proxima text-[1.25rem]">{item.title}</h3>
                                <p className="opacity-70 text-proxima text-[1rem]">{item.category}</p>
                            </div>
                        </a>
                    );
                })}
            </div> */}
        </section >
    );
};

export default Blog; 