import React from 'react'
import { motion } from 'framer-motion';
import proj1 from '../assets/logo.png';
import proj2 from '../assets/proj2.png';
import img from '../assets/image.png';
import image from '../assets/logo copy.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: image,
            title: 'E-commerce website',
            desc: 'My first website built for practice',
            tech: ['React', 'Node.js'],
            link: 'https://firstecommerce-website.vercel.app/',
            fit: 'object-contain object-center p-4 bg-white'
        },
        {
            id: 2,
            image: proj1,
            title: 'DailoKhata',
            desc: 'Modern e-commerce solution',
            tech: ['React', 'Node.js', 'MySql'],
            link: 'https://dailokhata.vercel.app/',
            fit: 'object-contain object-center p-4 bg-white'
        },
        {
            id: 3,
            image: img,
            title: 'GPCAR',
            desc: 'College Website',
            tech: ['React', 'Node.js', 'MySql'],
            link: 'https://gpcar.vercel.app/',
            fit: 'object-contain object-center p-2 bg-white'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
            title: 'Platinum Smile Cleaning',
            desc: 'Professional Cleaning Company in Dubai',
            tech: ['React', 'Tailwind CSS', 'Vite'],
            link: 'https://platinumsmilecleaning.com/'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section className='py-16 bg-[#0f1631]' id='projects'>
            <div className='container mx-auto px-6 max-w-7xl'>
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                        Projects<span className='text-primary'>.</span>
                    </h2>
                    <div className='w-28 h-1 bg-primary mx-auto mt-4 rounded-2xl'></div>
                </motion.div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                >
                    {projects.map((project) => (
                        <motion.a 
                            variants={cardVariants}
                            whileHover={{ y: -10, boxShadow: "0px 15px 30px rgba(6, 162, 194, 0.2)" }}
                            href={project.link} 
                            target={project.link !== '#' ? '_blank' : '_self'} 
                            rel="noopener noreferrer" 
                            key={project.id} 
                            className='bg-[#111a3e] rounded-xl overflow-hidden shadow-lg border border-[#1f1642] group block transition-all duration-300'
                        >
                            <div className="overflow-hidden relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className={`w-full h-56 ${project.fit || 'object-cover'} transform transition-transform duration-500 group-hover:scale-110`} 
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            <div className='p-6'>
                                <h3 className='text-xl font-bold text-white group-hover:text-primary transition-colors duration-300'>
                                    {project.title}
                                </h3>
                                <p className='text-gray-400 text-sm mt-2 mb-4 line-clamp-2'>
                                    {project.desc}
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                    {project.tech.map((tec, idx) => (
                                        <span key={idx} className='text-xs px-2.5 py-1 bg-[#1f1642] text-gray-300 rounded-md group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300 border border-transparent group-hover:border-primary/30'>
                                            {tec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
