import { Menu, X } from 'lucide-react';
import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Education', href: '#education' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'About Me', href: '#aboutme' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];
    const scrollToSection = (href) => {
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-50 px-4 md:px-6 py-5 md:py-7 w-full top-0"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-white text-2xl md:text-3xl font-black cursor-pointer hover:text-primary transition-all duration-300 select-none"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    PORTFOLIO <span className="text-primary">.</span>
                </motion.div>
                <nav className="hidden lg:flex gap-10 items-center">
                    <ul className="flex gap-8">
                        {menuItems.map((item, index) => (
                            <motion.li 
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                            >
                                <button onClick={() => scrollToSection(item.href)} className="text-gray-300 hover:text-primary transition-all duration-300 text-base font-medium cursor-pointer relative group">
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.button 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('#contact')} 
                        className="bg-primary hover:bg-primary/80 text-white px-5 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 cursor-pointer shadow-md hover:shadow-primary/20"
                    >
                        Contact Me
                    </motion.button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu size={32} />
                </button>
            </div>
            
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40" 
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Sidebar Drawer */}
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-4/5 sm:w-80 bg-[#111827] z-50 lg:hidden p-8 flex flex-col shadow-2xl"
                        >
                            <button className="self-end text-white mb-10 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                                <X size={32} />
                            </button>
                            <ul className="flex flex-col gap-6">
                                {menuItems.map((item, index) => (
                                    <motion.li 
                                        key={item.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <button onClick={() => scrollToSection(item.href)} className="text-white hover:text-primary text-xl transition-colors cursor-pointer w-full text-left">
                                            {item.name}
                                        </button>
                                    </motion.li>
                                ))}
                                <motion.li 
                                    className="pt-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <button onClick={() => scrollToSection('#contact')} className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold cursor-pointer hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20" >
                                        Contact Me
                                    </button>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
export default Header;