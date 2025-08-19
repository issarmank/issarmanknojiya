import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Socials: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            <a
                href="https://github.com/issarmank"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300 transform hover:scale-130"
            >
                <FaGithub size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
                href="https://www.linkedin.com/in/issar7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300 transform hover:scale-130"
            >
                <FaLinkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
                href="https://twitter.com/IssarManknojiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300 transform hover:scale-130"
            >
                <FaXTwitter size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
                href="mailto:Issar2005@gmail.com"
                className="text-white hover:text-blue-500 transition duration-300 transform hover:scale-130"
            >
                <FaEnvelope size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
                href="/gallery/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300 transform hover:scale-130"
            >
                <FaFileAlt size={22} className="sm:w-6 sm:h-7" />
            </a>
        </div>
    );
};

export default Socials;