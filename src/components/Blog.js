import React from "react";
// import Random from "../assets/hero.png";

const Blog = () => {
    const post = [
        // {
        //     img: Random,
        //     title: "How to build a counter app with JavaScript",
        //     category: "JavaScript Ultimate Guide 02: The DOM",
        //     url: "https://dev.to/coderamrin/how-to-build-a-counter-app-with-javascript-439p",
        // },
        // {
        //     img: Random,
        //     title: "JavaScript Ultimate Guide 02: The DOM",
        //     category: "JavaScript Ultimate Guide 02: The DOM",
        //     url: "https://dev.to/coderamrin/javascript-ultimate-guide-02-the-dom-3ho9",
        // },
    ];

    return (
        <section className="bg-lux-cream text-lux-brown px-64 py-24" id="blog">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-[5rem] text-lux-brown font-proxima font-bold">
                        blogs.
                    </h2>

                    <p className="font-proxima px-1 pb-5 font-bold">coming soon.</p>
                </div>

                <div></div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
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
            </div>
        </section >
    );
};

export default Blog; 