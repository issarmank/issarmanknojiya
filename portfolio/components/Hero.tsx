import React from 'react';
import Icons from './Socials';
import { FiMapPin } from "react-icons/fi";

const Hero: React.FC = () => {
    return (
        <section className="hero flex flex-col mt-60 mb-90">
            <div className="portfolio-container">
                <h1 className="text-5xl font-light text-white mb-4">Issar Manknojiya</h1>
                <p className="text-lg text-white mb-6">
                    Studying Computer Science @ University of Western Ontario
                    <br />
                    <span className="flex items-center">
                        <FiMapPin className="mr-1" size={16} />
                        Austin, Texas
                    </span>
                </p>
                <div className="flex space-x-6">
                    <Icons />
                </div>
            </div>
        </section>
    );
};

export default Hero;