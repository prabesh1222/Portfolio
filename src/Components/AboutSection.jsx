import React from 'react';
import { motion } from 'framer-motion';
import about from '../assets/about.jpg';

const AboutSection = () => {
    const stats = [
        { count: '+2', label: 'Clients', icon: '👥' },
        { count: '+5', label: 'Projects', icon: '🚀' },
        { count: '+2', label: 'Years Experience', icon: '⚡' },
    ];

    return (
        <section
            id="aboutme"
            className="relative mt-20 overflow-hidden bg-[#070b1a] text-white"
        >
            {/* Background Glow */}
            <div className="absolute top-20 left-[-150px] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-[-150px] w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]" />

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.035]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 xl:px-16 py-20 lg:py-28">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Get To Know Me
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        More{' '}
                        <span className="text-primary relative">
                            About
                            <span className="absolute left-0 -bottom-2 w-full h-[3px] rounded-full bg-primary/60" />
                        </span>{' '}
                        Me
                    </h2>

                    <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
                        A little bit about my journey, passion, and the things
                        that inspire me to build better digital experiences.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* LEFT — Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Small Label */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[2px] bg-primary" />
                            <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">
                                Who I Am
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-7">
                            Turning ideas into{' '}
                            <span className="text-primary">
                                meaningful digital experiences.
                            </span>
                        </h3>

                        <div className="space-y-5 text-gray-400 text-base lg:text-lg leading-relaxed">
                            <p>
                                I'm a passionate IT student currently pursuing a
                                Bachelor of Information Technology (BIT) at
                                Itahari International College.
                            </p>

                            <p>
                                I enjoy transforming ideas into clean,
                                efficient, and user-friendly applications.
                                I'm constantly exploring new technologies,
                                improving my skills, and looking for
                                opportunities to solve real-world problems
                                through technology.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-10">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                    }}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03,
                                    }}
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 sm:p-5 text-center transition-all duration-300 hover:border-primary/40 hover:bg-primary/[0.05]"
                                >
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5 blur-xl" />

                                    <div className="relative z-10">
                                        <div className="text-lg sm:text-xl mb-2">
                                            {stat.icon}
                                        </div>

                                        <h4 className="text-primary font-extrabold text-2xl sm:text-3xl">
                                            {stat.count}
                                        </h4>

                                        <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-2">
                                            {stat.label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60, scale: 0.9 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            stiffness: 80,
                        }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Outer Glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.25, 0.45, 0.25],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary/20 blur-[80px]"
                        />

                        {/* Image Wrapper */}
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[390px] lg:h-[390px]">

                            {/* Rotating Outer Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute -inset-5 rounded-full border border-dashed border-primary/40"
                            />

                            {/* Second Ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 18,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute -inset-2 rounded-full border border-primary/20"
                            />

                            {/* Offset Decorative Circle */}
                            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-full border-2 border-primary/40" />

                            {/* Image */}
                            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-[#11182e] shadow-[0_0_60px_rgba(6,182,212,0.18)] bg-[#11182e]">
                                <img
                                    src={about}
                                    alt="About Me"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 hover:scale-105"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a]/40 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute -bottom-2 -left-3 sm:left-0 z-20 px-5 py-3 rounded-2xl border border-white/10 bg-[#0d1429]/90 backdrop-blur-xl shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary">
                                        ✦
                                    </span>

                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-gray-500">
                                            Passionate
                                        </p>
                                        <p className="text-sm font-semibold text-white">
                                            IT Developer
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Top Right Floating Dot */}
                            <motion.div
                                animate={{
                                    y: [0, 12, 0],
                                    rotate: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute -top-5 -right-2 sm:right-0 z-20 w-12 h-12 rounded-2xl border border-primary/30 bg-[#0d1429]/90 backdrop-blur-xl flex items-center justify-center text-primary text-xl"
                            >
                                ✨
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
