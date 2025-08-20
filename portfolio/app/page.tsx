'use client';
import { motion } from 'framer-motion';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const fadeInVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8, // Reduced for mobile
      ease: "easeOut" as const, 
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // Faster for mobile
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // Reduced margin for mobile
        variants={fadeInVariants}
      >
        <Hero />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <Experience />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <Projects />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInVariants}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
