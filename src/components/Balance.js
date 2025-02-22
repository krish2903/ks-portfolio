import React, { useEffect, useState, useRef } from "react";
import triangle from "../assets/triangle.png";
import balanceBeam from "../assets/balance-beam.png";

const Balance = () => {
    const [rotation, setRotation] = useState(0);
    const [scaleDesignVal, setDesignScaleVal] = useState(1);
    const [scaleDevelopVal, setDevelopScaleVal] = useState(1);
    const [opacityDesignVal, setDesignOpacityVal] = useState(1);
    const [opacityDevelopVal, setDevelopOpacityVal] = useState(1);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const container = containerRef.current;
            if (!container) return;

            const containerRect = container.getBoundingClientRect();
            const mouseX = event.clientX - containerRect.left;
            const centerX = containerRect.width / 2;
            const angle = (mouseX - centerX) / centerX * 20;
            const maxScale = 1.3;
            const opacityMin = 0.1;
            const scale = 1 + (Math.abs(mouseX - centerX) / centerX) * (maxScale - 1); 
            var opacity = 1 - (Math.abs(mouseX - centerX) / centerX);
            opacity = Math.max(opacity, opacityMin);

            setRotation(angle);

            if (mouseX > (window.innerWidth/2)) { setDevelopScaleVal(scale); }
            if (mouseX < (window.innerWidth/2)) { setDesignScaleVal(scale); }

            if (mouseX > (window.innerWidth/2)) { setDesignOpacityVal(opacity); }
            if (mouseX < (window.innerWidth/2)) { setDevelopOpacityVal(opacity); }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <section ref={containerRef} className="flex flex-col justify-center h-[100vh] pt-[2rem] px-64 shadow-sm">
            <div className="flex justify-center items-center gap-56">
                <div id="designHeading"
                    style={{
                        transform: `scale(${scaleDesignVal})`,
                        transition: 'transform 0.1s ease',
                        opacity: `${opacityDesignVal}`,
                    }}>
                    <h2 className="text-[4.5rem] text-transparent bg-clip-text bg-gradient-2 font-heading font-bold tracking-tight">design</h2>
                    <p className="font-proxima text-sp-white text-right">simple, elegant UIs reflecting iconic brands</p>
                </div>
                <h2 className="text-[18rem] text-transparent bg-gradient-1 opacity-90 bg-clip-text font-heading tracking-tight">&</h2>
                <div id="developHeading"
                    style={{
                        transform: `scale(${scaleDevelopVal})`,
                        transition: 'transform 0.1s ease',
                        opacity: `${opacityDevelopVal}`,
                    }}>
                    <h2 className="text-[4.5rem] text-transparent bg-clip-text bg-gradient-2  font-heading font-bold tracking-tight">develop</h2>
                    <p className="font-proxima text-sp-white text-left">modular, reusable & clean code, enhancing UX</p>
                </div>
            </div>
            <div className="flex flex-col pb-24 gap-[1rem] justify-end items-center">
                <img
                    src={balanceBeam}
                    alt="balanceBeam"
                    className="w-auto h-[10vh]"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: 'transform 0.1s ease',
                        filter: "brightness(400%)"
                    }}
                />
                <img
                    src={triangle}
                    alt="triangle"
                    className="w-[20vh] h-auto"
                    style={{
                        filter: "brightness(300%)"
                    }}
                />
            </div>
        </section>
    );
};

export default Balance;
