'use client';
import React from 'react';
import Link from 'next/link';
import { FaHome, FaCamera } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <nav className="portfolio-container bg-black p-4" style={{ marginTop: '10px' }}>
            <div className="items-center mt-6">
                <div className="flex space-x-6 justify-center bg-black">
                    <Link 
                        href="/" 
                        className="text-white hover:text-blue-500 transition duration-300 transform hover:scale-130"
                    >
                        <FaHome size={26} />
                    </Link>
                    <Link 
                        href="/photos" 
                        className="text-white hover:text-blue-500 transition duration-300 transform hover:scale-130"
                    >
                        <FaCamera size={25} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;