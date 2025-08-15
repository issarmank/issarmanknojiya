import React from 'react';

const experiences = [
    {
        role: 'Software Engineer',
        company: 'TechCorp Inc.',
        duration: 'Jan 2020 - Present',
        description: [
            'Developed and maintained web applications using React and TypeScript.',
            'Collaborated with cross-functional teams to deliver high-quality software.',
            'Optimized application performance, reducing load times by 30%.',
        ],
    },
    {
        role: 'Frontend Developer',
        company: 'Web Solutions',
        duration: 'Jun 2018 - Dec 2019',
        description: [
            'Designed and implemented responsive user interfaces.',
            'Worked closely with designers to ensure seamless user experiences.',
            'Improved codebase maintainability by introducing reusable components.',
        ],
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20">
            <div className="portfolio-container"> {/* Removed ml-60, added mx-auto */}
                <h2 className="text-3xl font-bold mb-6 text-white">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-b border-gray-600 pb-4">
                            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                            <p className="text-gray-400">{exp.company} | {exp.duration}</p>
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