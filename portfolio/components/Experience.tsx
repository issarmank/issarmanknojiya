import React from 'react';
import { IoBag } from "react-icons/io5";

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

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 mb-60">
            <div className="portfolio-container">
                <div className="flex items-center mb-8">
                    <IoBag className="text-white mr-3" size={28} />
                    <h2 className="text-3xl font-light text-white">Experience</h2>
                </div>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="pb-4">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;