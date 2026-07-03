import React from 'react'
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import img from '../assets/image.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: proj1,
            title: 'E-Commerce Platform',
            desc: 'Modern e-commerce solution',
            tech: ['React', 'Node.js', 'MySql'],
            link: '#'
        },
        {
            id: 2,
            image: img,
            title: 'GPCAR',
            desc: 'College Website',
            tech: ['React', 'Node.js', 'MySql'],
            link: 'https://gpcar.vercel.app/',
            fit: 'object-contain object-center p-2 bg-white'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
            title: 'Platinum Smile Cleaning',
            desc: 'Professional Cleaning Company in Dubai',
            tech: ['React', 'Tailwind CSS', 'Vite'],
            link: 'https://platinumsmilecleaning.com/'
        }
    ];

    return (
        <section className='py-16 bg-gray-900' id='projects'>
            <div className='container mx-auto px-4 max-w-7xl'>
                <div className='text-center mb-10'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                        Projects.

                    </h2>
                    <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'>

                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {projects.map((project) => (
                        <a href={project.link} target={project.link !== '#' ? '_blank' : '_self'} rel="noopener noreferrer" key={project.id} className='bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 block'>
                            <img src={project.image} alt={project.title} className={`w-full h-44 ${project.fit || 'object-cover'} hover:opacity-90 transition-opacity duration-300`} />
                            <div className='p-4'>
                                <h3 className='text-lg font-semibold text-white group-hover:text-primary transition-colors '>
                                    {project.title}

                                </h3>
                                <p className='text-gray-400 text-sm mt-1'>
                                    {project.desc}

                                </p>
                                <div className='flex flex-wrap gap-1.5 mt-3'>
                                    {project.tech.map((tec, idx) => (
                                        <span key={idx} className='text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded hover:bg-primary hover:text-white transition-colors duration-300'>
                                            {tec}

                                        </span>
                                    ))}

                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>


    );
};

export default Projects;
