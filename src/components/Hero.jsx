import React from "react";

const Hero = () => {
    return (
        <section
            className="relative w-full h-screen flex items-center justify-center text-center bg-black"
            style={{
                backgroundImage: "url('/your-image.jpg')", // replace with your image in /public
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Text content */}
            <div className="relative z-10 max-w-3xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Kisan Saathi – Sustainable Farming Solutions
                </h1>
                <p className="text-white text-lg md:text-xl mb-6">
                    Empowering farmers with eco-friendly solutions for a greener tomorrow
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="#contact"
                        className="bg-green-500 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-md"
                    >
                        Let’s Talk
                    </a>
                    <a
                        href="#learnmore"
                        className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-md"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
