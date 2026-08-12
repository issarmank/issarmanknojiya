"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'Prompt Polish',
        description: 'Improves your AI prompts inside your favorite LLMs',
        image: '/gallery/promptpolish.jpg',
        github: 'https://github.com/issarmank/prompt-improver-extension',
        website: 'https://blue-ground-0ec325e0f.7.azurestaticapps.net/',
    },
    {
        title: 'JobPilot',
        description: 'Job app tracker with Chrome extension, Github API, & Adzuna',
        image: '/gallery/jobapp.jpg',
        github: 'https://github.com/issarmank/autopilot-job-application',
        website: 'https://github.com/issarmank/autopilot-job-application',
    },
    {
        title: 'Fight Club Agents',
        description: '20 Autonomous agents fighting in realtime using Websockets, Next.js, and Azure',
        image: '/gallery/fightclubagents.jpg',
        github: 'https://github.com/issarmank/fight-club-agents',
        website: 'https://fight-club-agents.vercel.app/',
    },
    {
        title: 'FinGuard AI',
        description: 'AI native full-stack personal finance app tracker',
        image: '/gallery/finguardai.jpg',
        github: 'https://github.com/issarmank/finguard-ai',
        website: 'https://finguard-tracker-ai.vercel.app/',
    },
    {
        title: 'Agentify',
        description: 'RAG based document agent using short/long term memory retrieval',
        image: '/gallery/agentify.jpg',
        github: 'https://github.com/issarmank/agentic-rag-system',
        website: 'https://agentic-rag-system-ashy.vercel.app/',
    },
    {
        title: 'Turtle (CLI Agent)',
        description: 'Runs terminal commands with a Ollama based tool-calling agent',
        image: '/gallery/turtle.jpg',
        github: 'https://github.com/issarmank/qhacks-cli-agent',
        website: 'https://github.com/issarmank/qhacks-cli-agent',
    },
    {
        title: 'Repository Visualizer',
        description: '3D interactive visualization of GitHub repositories using Three.js',
        image: '/gallery/repovisual.jpg',
        github: 'https://github.com/issarmank/repository-visualizer',
        website: 'https://github.com/issarmank/repository-visualizer',
    },
    {
        title: 'Syllabus Parser',
        description: 'Openai + Langchain based syllabus parser to extract course info',
        image: '/gallery/syllabus-parser.jpg',
        github: 'https://github.com/issarmank/syllabus-parser',
        website: 'https://syllabus-parser-alpha.vercel.app/',
    },
    {
        title: 'Devops Dashboard for Monitoring',
        description: 'A devops dashboard to monitor cloud infrastructure and metrics',
        image: '/gallery/devopsdashboard.jpg',
        github: 'https://github.com/issarmank/devops-dashboard',
    },
    {
        title: 'Team Score Database System',
        description: 'Full stack team management application using JavaFX and SQL',
        image: '/gallery/javafx.jpg',
        github: 'https://github.com/issarmank/teamscore-database',
    },
    {
        title: 'Emberforge',
        description: 'Built a fully playable game using Unity and C#',
        image: '/gallery/emberforge.jpg',
        github: 'https://github.com/issarmank/emberforge',
    },
    {
        title: 'AI PR Dev Tool',
        description: 'Using OpenAI API to generate pull request descriptions',
        image: '/gallery/prdevtool.jpg',
        github: 'https://github.com/issarmank/pr-dev-tool',
        website: 'https://pr-dev-tool.vercel.app/',
    },
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

type ViewMode = 'grid' | 'list';

const Projects: React.FC = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('grid');

    return (
        <section id="projects" className="py-8 sm:py-20 mb-20 sm:mb-60">
            <div className="portfolio-container">
                <motion.div variants={itemVariants} className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="flex items-center">
                        <h2 className="text-2xl sm:text-3xl font-light text-black">Projects</h2>
                    </div>
                    <div className="flex items-center gap-3 text-sm sm:text-base">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`underline-offset-4 transition-colors duration-300 ${
                                viewMode === 'grid'
                                    ? 'text-black underline font-medium'
                                    : 'text-gray-500 hover:text-black'
                            }`}
                        >
                            Grid
                        </button>
                        <span className="text-gray-300">/</span>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`underline-offset-4 transition-colors duration-300 ${
                                viewMode === 'list'
                                    ? 'text-black underline font-medium'
                                    : 'text-gray-500 hover:text-black'
                            }`}
                        >
                            List
                        </button>
                    </div>
                </motion.div>

                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group"
                            >
                                <h3 className="text-lg sm:text-xl font-light text-black mb-2">{project.title}</h3>
                                {project.image && (
                                    <div className="w-full h-40 sm:h-48 rounded-md overflow-hidden mb-3">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                <p className="text-gray-600 text-sm sm:text-base mb-3">{project.description}</p>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black hover:text-blue-600 transition-colors duration-300"
                                        title="View on GitHub"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black hover:text-blue-600 transition-colors duration-300"
                                            title="View Live"
                                        >
                                            <FiExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-3xl divide-y divide-gray-200">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="py-4 sm:py-5 flex items-start justify-between gap-4"
                            >
                                <div>
                                    <h3 className="text-lg sm:text-xl font-light text-black">{project.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base mt-1">{project.description}</p>
                                </div>
                                <div className="shrink-0 flex items-center gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black hover:text-blue-600 transition-colors duration-300"
                                        title="View on GitHub"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black hover:text-blue-600 transition-colors duration-300"
                                            title="View Live"
                                        >
                                            <FiExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
