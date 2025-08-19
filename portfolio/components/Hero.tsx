"use client";
import React from 'react';
import Icons from './Socials';
import { FiMapPin, FiArrowDown } from "react-icons/fi";

const Hero: React.FC = () => {
    const scrollToExperience = () => {
        const experienceSection = document.getElementById('experience');
        if (experienceSection) {
            const yOffset = -100; // Adjust this value (negative = scroll higher)
            const y = experienceSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="hero flex flex-col mt-60 mb-70">
            <div className="portfolio-container">
                <h1 className="text-5xl font-light text-white mb-6">Issar Manknojiya</h1>
                <p className="text-lg text-white mb-8">
                    Studying Computer Science @ University of Western Ontario
                    <br />
                    <span className="flex items-center">
                        <FiMapPin className="mr-1" size={16} />
                        Austin, Texas
                    </span>
                </p>
                <div className="flex space-x-6 mb-8">
                    <Icons />
                </div>
                
                {/* More About Me Arrow */}
                <div className="mt-8">
                    <button 
                        onClick={scrollToExperience}
                        className="flex flex-col items-center text-blue-500 hover:text-white transition duration-300 cursor-pointer group"
                    >
                        <span className="text-sm mb-2 group-hover:text-white">More about me</span>
                        <FiArrowDown size={20} className="animate-bounce" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;