"use client";
import React from 'react';
import Icons from './Socials';
import { FiMapPin, FiArrowDown } from "react-icons/fi";

const Hero: React.FC = () => {
    const scrollToExperience = () => {
        const experienceSection = document.getElementById('experience');
        if (experienceSection) {
            const yOffset = -100;
            const y = experienceSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="hero flex flex-col mt-65 mb-50 sm:mt-60 mb-20 sm:mb-70" style={{alignItems: 'flex-start'}}>
            <div className="portfolio-container" style={{marginLeft: '0', marginRight: 'auto'}}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 text-left">
                    Issar Manknojiya
                </h1>
                <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 text-left">
                    Studying Computer Science @ University of Western Ontario
                    <br />
                    <span className="flex items-center justify-start mt-2">
                        <FiMapPin className="mr-1" size={16} />
                        Austin, Texas
                    </span>
                </p>
                <div className="flex justify-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                    <Icons />
                </div>
                
                {/* More About Me Arrow */}
                <div className="mt-8 sm:mt-10 flex justify-start">
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