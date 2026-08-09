import { Download } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Hero from '../assets/Hero.JPG';
import PrabeshCV from '../assets/PrabeshCV.pdf';

const HeroSection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5 },
        visible: {
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                duration: 1.2 
            }
        }
    };

    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden">

            {/* Background glow blobs - continuous animation */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2] 
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-2/3 h-64 bg-gradient-to-br from-[#0c7fac] to-transparent blur-3xl pointer-events-none"
            ></motion.div>
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2] 
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 right-0 w-1/2 h-64 bg-gradient-to-tl from-[#0c64ac] to-transparent blur-3xl pointer-events-none"
            ></motion.div>

            <div className="mx-auto relative w-full px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl py-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left — Text Content */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
                    >
                        <motion.h1 
                            variants={itemVariants}
                            className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight flex items-center gap-2 flex-wrap justify-center lg:justify-start"
                        >
                            <span>Hi,</span>
                            <span className="typing-animation">
                                I'm{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                                    Prabesh
                                </span>
                            </span>
                            <motion.span 
                                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                                className="inline-block transform-origin-bottom-right"
                                style={{ transformOrigin: "70% 70%" }}
                            >
                                👋
                            </motion.span>
                        </motion.h1>

                        <motion.p 
                            variants={itemVariants}
                            className="text-gray-300 pt-6 max-w-xl text-base md:text-lg leading-relaxed"
                        >
                            I am an IT student with a passion for building innovative web applications.
                        </motion.p>

                        <motion.div 
                            variants={itemVariants}
                            className="flex items-center gap-4 pt-9 flex-col sm:flex-row w-full sm:w-auto"
                        >
                            {/* Hire Me */}
                            <motion.button 
                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(6, 182, 212, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                className="bg-cyan-500 hover:bg-cyan-400 transition-colors duration-300 text-white font-semibold px-8 py-3 rounded-full w-full sm:w-auto cursor-pointer shadow-lg"
                            >
                                Hire Me
                            </motion.button>

                            {/* Download Resume */}
                            <motion.a
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 211, 238, 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                href={PrabeshCV}
                                download="PrabeshCV.pdf"
                                className="border border-cyan-400 transition-colors duration-300 text-white px-8 py-3 rounded-full w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                            >
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Download size={18} className="text-cyan-400" />
                                </motion.div>
                                <span>Download Resume</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right — Hero Image */}
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                        className="flex items-center justify-center order-1 lg:order-2"
                    >
                        <div className="relative group">
                            {/* Cyan glow behind image */}
                            <motion.div 
                                animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-cyan-500 blur-2xl scale-110"
                            ></motion.div>

                            {/* Image container with blob shape, hover properties, and animation */}
                            <motion.div 
                                animate={{ 
                                    borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%", "30% 70% 70% 30% / 30% 30% 70% 70%"] 
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="relative border-2 border-cyan-500 overflow-hidden shadow-2xl shadow-cyan-500/20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] transition-all duration-500 hover:border-cyan-400"
                            >
                                <motion.img
                                    whileHover={{ scale: 1.1, filter: "brightness(1.05)" }}
                                    transition={{ duration: 0.5 }}
                                    src={Hero}
                                    alt="Prabesh - Hero"
                                    className="w-full h-full object-cover object-center"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default HeroSection;
