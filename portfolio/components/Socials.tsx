import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Socials: React.FC = () => {
    return (
        <div className="flex space-x-6">
            <a
                href="https://github.com/issarmank"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300"
            >
                <FaGithub size={28} />
            </a>
            <a
                href="https://www.linkedin.com/in/issar7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300"
            >
                <FaLinkedin size={28} />
            </a>
            <a
                href="https://twitter.com/IssarManknojiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300"
            >
                <FaXTwitter size={28} />
            </a>
            <a
                href="mailto:Issar2005@gmail.com"
                className="text-white hover:text-blue-500 transition duration-300"
            >
                <FaEnvelope size={28} />
            </a>
            <a
                href="/gallery/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300"
            >
                <FaFileAlt size={26} />
            </a>
        </div>
    );
};

export default Socials;