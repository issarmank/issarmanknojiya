import React from 'react';
import Icons from './Socials';
import { FiMapPin } from "react-icons/fi";

const Hero: React.FC = () => {
    return (
        <section className="hero min-h-screen flex flex-col mt-80">
            <div className="container mx-auto px-4 ml-20">
                <h1 className="text-5xl font-bold text-white mb-4">issar manknojiya</h1>
                <p className="text-lg text-white mb-6">
                    Computer Science @ University of Western Ontario
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