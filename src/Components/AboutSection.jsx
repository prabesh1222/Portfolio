import React from 'react';
import { motion } from 'framer-motion';
import about from '../assets/about.jpg';

const AboutSection = () => {
    return (
        <section className="text-white mt-20 relative overflow-hidden" id='aboutme'>
            <div className="max-w-7xl mx-auto px-4 xl:px-16 py-16 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left — Text & Stats */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6'>
                            More <span className='text-primary'>About</span> Me
                        </h2>
                        <p className='text-gray-400 text-base lg:text-lg mb-6 leading-relaxed'>
                            I'm a passionate IT student currently pursuing a Bachelor of
                            Information Technology (BIT) at Itahari International College.
                        </p>
                        <p className='text-gray-400 text-base lg:text-lg mb-10 leading-relaxed'>
                            I love turning ideas into reality through clean, efficient code.
                            Always eager to learn new technologies and solve real-world problems.
                        </p>

                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-4 max-w-xl'>
                            {[
                                { count: "+2", label: "Clients", delay: 0.2 },
                                { count: "+5", label: "Projects", delay: 0.4 },
                                { count: "+2", label: "Years", delay: 0.6 }
                            ].map((stat, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: stat.delay }}
                                    whileHover={{ scale: 1.05, borderColor: "rgba(6, 162, 194, 0.5)" }}
                                    className='text-center rounded-2xl bg-[#111a3e] border border-[#1f1642] p-5 transition-all duration-300'
                                >
                                    <h3 className='text-primary font-bold text-2xl md:text-3xl'>{stat.count}</h3>
                                    <p className='text-xs text-gray-400 uppercase tracking-wider mt-1'>{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Circular Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                        className='mt-16 md:mt-0 flex justify-center lg:justify-end relative'
                    >
                        <div className='relative w-64 h-64 md:w-96 md:h-96 group'>
                            {/* Offset border ring */}
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className='absolute inset-0 z-0 rounded-full shadow-lg border border-primary translate-x-4 translate-y-4 group-hover:border-cyan-400 transition-colors duration-500'
                            ></motion.div>
                            {/* Image circle */}
                            <div className='relative z-10 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]'>
                                <img
                                    src={about}
                                    alt="About"
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default AboutSection;