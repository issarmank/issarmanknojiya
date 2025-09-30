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
        website: 'https://pr-dev-tool.vercel.app/',
    },
    {
        title: 'Emberforge',
        description: 'Built a fully playable game using Unity and C#',
        image: '/gallery/emberforge.jpg',
        github: 'https://github.com/issarmank/emberforge',
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
    },
    {
        title: 'Devops Dashboard for Cloud Monitoring',
        description: 'A devops dashboard to monitor cloud infrastructure and metrics',
        image: '/gallery/devopsdashboard.jpg',
        github: 'https://github.com/issarmank/devops-dashboard',
    },
    {
        title: 'Syllabus Parser',
        description: 'Openai + Langchain based syllabus parser to extract course info',
        image: '/gallery/syllabus-parser.jpg',
        github: 'https://github.com/issarmank/syllabus-parser',
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const, 
        }
    }
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-16 sm:py-20 mb-20 sm:mb-60">
            <div className="portfolio-container">
                <motion.div variants={itemVariants} className="flex items-center justify-start mb-6 sm:mb-8">
                    <MdBuild className="text-white mr-3" size={24} />
                    <h2 className="text-2xl sm:text-3xl font-light text-white">Projects</h2>
                </motion.div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className="group cursor-pointer"
                        >
                            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                                <a 
                                    href={project.website || project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-48 sm:h-64 bg-gray-700 flex items-center justify-center"
                                >
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
                                </a>
                            </div>
                            
                            <div className="mt-4 sm:mt-5">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg sm:text-xl font-light text-white">{project.title}</h3>
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
                                <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;