"use client";
import React from 'react';

const navLinks = [
    { label: 'GitHub', href: 'https://github.com/issarmank', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/issar7/', external: true },
    { label: 'Email', href: 'mailto:Issar2005@gmail.com', external: false },
    { label: 'Resume', href: '/gallery/resume.pdf', external: true },
];

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 sm:gap-6 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm text-sm sm:text-base">
            {navLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-black hover:text-blue-600 transition-colors duration-300 whitespace-nowrap"
                >
                    {link.label}
                </a>
            ))}
        </nav>
    );
};

export default Navbar;
