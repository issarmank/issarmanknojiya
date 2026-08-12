"use client";
import React from 'react';
import { FiMapPin, FiArrowDown } from "react-icons/fi";

const experience = [
    { company: 'SmartOne.ai', role: 'ops intern', website: 'https://smartone.ai/', year: '2026' },
    { company: '3D Western', role: 'ml dev', website: 'https://www.3dwestern.ca/', year: '2025' },
    { company: 'DevFortress', role: 'swe intern', website: 'https://devfortress.com/', year: '2025' },
    { company: 'EmpowerHERto', role: 'dev', website: 'https://www.empowherto.org/', year: '2025' },
    { company: 'Western Developers Society', role: 'dev', website: 'https://westerndev-website-theta.vercel.app/', year: '2024' },
];

const Hero: React.FC = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            const isLargeScreen = window.innerWidth >= 1024;
            const yOffset = isLargeScreen ? -100 : -100;

            const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="hero flex flex-col mt-65 sm:mt-60 mb-60 sm:mb-80 w-full px-4 sm:px-8 lg:px-12" style={{alignItems: 'flex-start'}}>
            <div className="w-full">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">
                    <div className="mt-4 sm:mt-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 text-left">
                            Issar Manknojiya
                        </h1>
                        <p className="text-base sm:text-lg text-black mb-3 sm:mb-4 text-left">
                            Computer Science @ University of Western Ontario
                        </p>
                        <p className="flex items-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 text-left">
                            <FiMapPin className="mr-1" size={16} />
                            Guelph, Ontario
                        </p>

                        {/* More About Me Arrow */}
                        <div className="mt-8 sm:mt-10 flex justify-start">
                            <button
                                onClick={scrollToProjects}
                                className="flex flex-col items-center text-blue-600 hover:text-black transition duration-300 cursor-pointer group"
                            >
                                <span className="text-sm mb-2 group-hover:text-black">More about me</span>
                                <FiArrowDown size={20} className="animate-bounce" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-[max-content_max-content_1fr] gap-x-12 gap-y-2 sm:gap-y-3 lg:min-w-[280px] text-sm sm:text-base">
                        {experience.map((exp) => (
                            <React.Fragment key={exp.company}>
                                <span className="text-gray-400 whitespace-nowrap">{exp.year}</span>
                                <a
                                    href={exp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black font-medium hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
                                >
                                    {exp.company}
                                </a>
                                <span className="text-gray-500">{exp.role}</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
