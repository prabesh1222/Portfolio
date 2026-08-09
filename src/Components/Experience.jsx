import React from 'react';
import { motion } from 'framer-motion';
import {Layout,Terminal,Atom,Server,Zap,Database,PenTool,Briefcase,Building,Calendar} from 'lucide-react';

const Experience = () => {
    const Skills=[ 
        { id: 1, name: 'HTML and CSS', width: '85%', icon: Layout },
        { id: 2, name: 'JavaScript', width: '40%', icon: Terminal },
        { id: 3, name: 'React', width: '60%', icon: Atom },
        { id: 4, name: 'Node.js', width: '50%', icon: Server },
        { id: 5, name: 'Express.js', width: '40%', icon: Zap },
        { id: 6, name: 'MongoDB', width: '60%', icon: Database },
        { id: 7, name: 'Figma', width: '60%', icon: PenTool },
    ];

    const Experiences =[
        { id: 1, role: 'Data Entry', company: 'upakar.com', date: 'Jun 2024 - Feb 2025' },
        { id: 2, role: 'Frontend Developer', company: 'Avyanta tech pvt.ltd', date: 'Dec 2025 - Present' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const barVariants = {
        hidden: { width: 0 },
        visible: (width) => ({
            width,
            transition: { duration: 1, ease: "easeOut", delay: 0.3 }
        })
    };

    return (
        <section className='text-white py-20 relative overflow-hidden' id='skills'>
            <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-16 items-start'>
                    
                    {/* Skills Section */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className='text-4xl md:text-5xl font-extrabold mb-12 text-center lg:text-left'>
                            Technical <span className='text-primary'> Skills</span>
                        </motion.h2>
                        <div className='space-y-8'>
                            {Skills.map((skill) => {
                                const SkillIcon = skill.icon;
                                return (
                                    <motion.div key={skill.id} variants={itemVariants} className='group'>
                                        <div className='flex items-center justify-between mb-2'>
                                            <div className='flex items-center gap-3'>
                                                <div className='p-2 bg-[#111a3e] rounded-lg group-hover:bg-primary transition-colors duration-300'>
                                                    <SkillIcon size={20} className='text-primary group-hover:text-white'/>
                                                </div>
                                                <span className='font-medium tracking-wide'>
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className='text-primary font-bold'>
                                                {skill.width}
                                            </span>
                                        </div>
                                        <div className='h-2 w-full bg-[#131d30] rounded-full p-0.5 '>
                                            <motion.div 
                                                custom={skill.width}
                                                variants={barVariants}
                                                className='h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 shadow-[0_0_10px_#06a2c2]' 
                                            ></motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Experience Section */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className='text-3xl md:text-5xl font-extrabold mb-12 text-center lg:text-left mt-16 lg:mt-0'>
                            Work <span className='text-primary'>Experience</span>
                        </motion.h2>
                        <div className='space-y-6'> 
                            {Experiences.map((exp) => (
                                <motion.div 
                                    variants={itemVariants}
                                    key={exp.id} 
                                    className='group relative p-6 rounded-2xl bg-[#1f1641] border border-transparent hover:border-primary/50 shadow-md hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'
                                >
                                    <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
                                        <div className='shrink-0'>
                                            <div className='p-3 bg-[#050816] rounded-xl border border-gray-800 group-hover:border-primary transition-colors duration-300'>
                                                <Briefcase className='text-primary' size={24}/>
                                            </div>
                                        </div>
                                        <div className='grow'>
                                            <h3 className='text-xl font-bold text-white group-hover:text-primary transition-colors duration-300'>
                                                {exp.role}
                                            </h3>
                                            <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-400'>
                                                <span className='flex items-center gap-1.5'>
                                                    <Building size={14} className='text-primary'/>
                                                    {exp.company}
                                                </span>
                                                <span className='flex items-center gap-1.5'>
                                                    <Calendar size={14} className='text-primary'/>
                                                    {exp.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;