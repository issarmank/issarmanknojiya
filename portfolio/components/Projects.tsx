"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { MdBuild } from 'react-icons/md';

const projects = [
    {
        title: 'AI PR Dev Tool',
        description: 'Using OpenAI API to generate pull request descriptions',
        image: '/gallery/prdevtool.jpg',
        github: 'https://github.com/issarmank/pr-dev-tool',
    },
    {
        title: 'Emberforge',
        description: 'Built a fully playable game using Unity and C#',
        image: '/gallery/emberforge.jpg',
        github: 'https://github.com/issarmank/2250-project',
    },
    {
        title: 'Team Score Database System',
        description: 'Full stack team management application using JavaFX and SQL',
        image: '/gallery/javafx.jpg',
        github: 'https://github.com/issarmank/teamscore-database',
    },
    {
        title: 'AI Summary API',
        description: 'Building an summarization API using OpenAI + FastAPI',
        image: '/gallery/aisummaryapi.jpg',
        github: 'https://github.com/issarmank/ai-summary-api',
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 1.5,
            ease: "easeOut"
        }
    }
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 mb-60">
            <div className="portfolio-container">
                <motion.div variants={itemVariants} className="flex items-center mb-8">
                    <MdBuild className="text-white mr-3" size={26} />
                    <h2 className="text-3xl font-light text-white">Projects</h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className="group cursor-pointer"
                        >
                            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xl">
                                <div className="h-64 bg-gray-700 flex items-center justify-center">
                                    {project.image ? (
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="text-gray-400 text-center">
                                            <div className="text-3xl mb-2">📱</div>
                                            <p className="text-sm">Project Image</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            <div className="mt-5">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-light text-white">{project.title}</h3>
                                    <a 
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors duration-300"
                                        title="View on GitHub"
                                    >
                                        <FaGithub size={15} />
                                    </a>
                                </div>
                                <p className="text-gray-400 text-sm">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;