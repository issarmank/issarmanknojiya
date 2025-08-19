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
        description: [
            'Built TypeScript Obsidian plugin for notetaking and real-time AI chat integration for 1M+ Athena AI LLM users.'
        ],
    },
    {
        role: 'Software Developer',
        company: 'Tech for Social Impact',
        duration: 'Feb – Apr 2025',
        description: [
            'Built a financial literacy tool for Finance4Her impacting almost 1K users.'
        ],
    },
    {
        role: 'Software Developer',
        company: 'Western Developers Society',
        duration: 'Oct 2024 – Mar 2025',
        description: [
            'Created navigation system with real-time GPS supporting all of Western University campus.'        
        ],
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 1.5,
            ease: "easeOut"
        }
    }
};

const Experience: React.FC = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            const yOffset = 40;
            const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section id="experience" className="py-20 mb-40">
            <div className="portfolio-container">
                <motion.div variants={itemVariants} className="flex items-center mb-8">
                    <IoBag className="text-white mr-3" size={28} />
                    <h2 className="text-3xl font-light text-white">Experience</h2>
                </motion.div>
                
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className="pb-4"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-light text-white flex items-center">
                                    {exp.role}
                                    <span className="mx-3 text-gray-400">–</span>
                                    <span className="text-gray-400">{exp.company}</span>
                                </h3>
                                <p className="text-gray-400 text-right">
                                    {exp.duration}
                                </p>
                            </div>
                            <ul className="list-disc list-inside mt-2 text-gray-300">
                                {exp.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div variants={itemVariants} className="mt-8">
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