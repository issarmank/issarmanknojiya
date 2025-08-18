'use client';
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="portfolio-container bg-black p-4" style={{ marginTop: '10px' }}>
            <div className="items-center mt-6">
                <ul className="flex space-x-5 justify-center">
                    <li>
                        <Link 
                            href="/" 
                            className="px-4 py-3 rounded-lg text-white hover:bg-gray-700 hover:text-white transition-all duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/projects" 
                            className="px-4 py-3 rounded-lg text-white hover:bg-gray-700 hover:text-white transition-all duration-300"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/contact" 
                            className="px-4 py-3 rounded-lg text-white hover:bg-gray-700 hover:text-white transition-all duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;