'use client';
import React from 'react';
import Link from 'next/link';
import { FaHome, FaCamera } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black p-2 sticky top-0 z-50">
            <div className="portfolio-container">
                <div className="flex justify-center">
                    <div className="flex space-x-4 sm:space-x-6 bg-black rounded-full px-4 py-2">
                        <Link 
                            href="/"
                            className="text-white hover:text-blue-500 transition duration-300 transform hover:scale-125 p-2"
                        >
                            <FaHome size={20} className="sm:w-6 sm:h-6" />
                        </Link>
                        <Link 
                            href="/photos"
                            className="text-white hover:text-blue-500 transition duration-300 transform hover:scale-125 p-2"
                        >
                            <FaCamera size={19} className="sm:w-6 sm:h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;