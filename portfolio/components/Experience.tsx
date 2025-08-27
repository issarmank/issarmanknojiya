"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { IoBag } from "react-icons/io5";
import { FiArrowDown } from "react-icons/fi";

const experiences = [
    {
        role: 'Software Engineer',
        company: 'DevFortress',
        duration: 'May – Aug 2025',
        website: 'https://devfortress.com/',
        description: [
            'Built TypeScript Obsidian plugin for notetaking and real-time AI chat integration for 1M+ Athena AI LLM users.'
        ],
    },
    {
        role: 'Full Stack Software Developer',
        company: 'EmpowerHERto',
        duration: 'Feb – Apr 2025',
        website: 'https://www.empowherto.org/',
        description: [
            'Built a financial literacy web app using React, Node.js, AuthO, & Supabase.'
        ],
    },
    {
        role: 'Backend Software Developer',
        company: 'Western Developers Society',
        duration: 'Oct 2024 – Mar 2025',
        website: 'https://westerndev-website-theta.vercel.app/',
        description: [
            'Created navigation system with real-time GPS supporting all of Western University campus using React Native & Mapbox API.'        
        ],
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        }
    }
};

const Experience: React.FC = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            const yOffset = 0;
            const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section id="experience" className="py-16 sm:py-20 mb-20 sm:mb-40">
            <div className="portfolio-container">
                <motion.div variants={itemVariants} className="flex items-center justify-start mb-6 sm:mb-8">
                    <IoBag className="text-white mr-3" size={24} />
                    <h2 className="text-2xl sm:text-3xl font-light text-white">Experience</h2>
                </motion.div>
                
                <div className="space-y-6 sm:space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className="pb-4"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2 sm:gap-0">
                                <h3 className="text-lg sm:text-xl font-light text-white flex flex-col sm:flex-row sm:items-center">
                                    <span>{exp.role}</span>
                                    <span className="hidden sm:inline mx-3 text-gray-400">–</span>
                                    <a 
                                        href={exp.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 text-base sm:text-xl underline hover:text-blue-500 transition-colors duration-300"
                                    >
                                        {exp.company}
                                    </a>
                                </h3>
                                <p className="text-gray-400 text-sm sm:text-base">
                                    {exp.duration}
                                </p>
                            </div>
                            <ul className="list-disc list-inside mt-2 text-gray-300 text-sm sm:text-base pl-0 sm:pl-4">
                                {exp.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div variants={itemVariants} className="mt-8 flex justify-start">
                    <button 
                        onClick={scrollToProjects}
                        className="flex flex-col items-center text-blue-500 hover:text-white transition duration-300 cursor-pointer group"
                    >
                        <span className="text-sm mb-2 group-hover:text-white">My Projects</span>
                        <FiArrowDown size={20} className="animate-bounce" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;