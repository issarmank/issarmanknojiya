import React from 'react';
import { IoBag } from "react-icons/io5";

const experiences = [
    {
        role: 'Software Engineer',
        company: 'DevFortress',
        duration: 'May – Aug 2025',
        description: [
            'Built TypeScript Obsidian plugin for <300ms Markdown transfer to Athena AI, preserving metadata.',
            'Implemented secure JWT authentication with token-based API access and session management.',
            'Enabled secure, real-time AI chat integration for 1M+ Athena AI LLM users.',
        ],
    },
    {
        role: 'Software Developer',
        company: 'Tech for Social Impact',
        duration: 'Feb – Apr 2025',
        description: [
            'Built React + Node.js/Express financial literacy tool with Firebase, impacting 1K+ users.',
            'Designed UI mockups and UML diagrams in Figma.',
            'Implemented Firebase + Auth0 authentication, AWS hosting, and 65% uptime.',
        ],
    },
    {
        role: 'Software Developer',
        company: 'Western Developers Society',
        duration: 'Oct 2024 – Mar 2025',
        description: [
            'Created React Native + Mapbox campus navigation system with 3D models and real-time GPS.',
            'Built intelligent routing algorithm with building hours & accessibility support for 30K+ students.',
        ],
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20">
            <div className="portfolio-container">
                <div className="flex items-center mb-8">
                    <IoBag className="text-white mr-3" size={28} />
                    <h2 className="text-3xl font-light text-white">Experience</h2>
                </div>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-b border-gray-600 pb-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-ligh text-white">{exp.role} | {exp.company}</h3>
                                <p className="text-gray-400 text-right">
                                    {exp.duration}
                                </p>
                            </div>
                            <ul className="list-disc list-inside mt-2 text-gray-300">
                                {exp.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;