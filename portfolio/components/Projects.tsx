import React from 'react';

const projects = [
    {
        title: 'E-Commerce Platform',
        image: '/placeholder-project1.jpg',
        github: 'https://github.com/yourusername/project1',
    },
    {
        title: 'Weather Dashboard',
        image: '/placeholder-project2.jpg',
        github: 'https://github.com/yourusername/project2',
    },
    {
        title: 'Task Management App',
        image: '/placeholder-project3.jpg',
        github: 'https://github.com/yourusername/project3',
    },
    {
        title: 'Portfolio Website',
        image: '/placeholder-project4.jpg',
        github: 'https://github.com/yourusername/portfolio',
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20">
            <div className="portfolio-container"> {/* Removed ml-60 to center properly */}
                <h2 className="text-3xl font-bold mb-12 text-white">Projects</h2>
                
                {/* Grid layout with wider projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"> {/* Changed from max-w-3xl to max-w-5xl and gap-6 to gap-8 */}
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xl"> {/* Changed from max-w-lg to max-w-xl */}
                            {/* Project Image Section */}
                            <div className="h-64 bg-gray-700 flex items-center justify-center">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="text-gray-400 text-center">
                                        <div className="text-3xl mb-2">📱</div>
                                        <p className="text-sm">Project Image</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;