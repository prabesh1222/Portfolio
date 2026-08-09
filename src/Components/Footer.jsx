import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 px-4 text-white bg-[#0f1631]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-7xl border-t border-gray-800 pt-6"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand Logo styled like screenshot */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-black uppercase cursor-pointer tracking-wider text-white" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            PORTFOLIO<span className="text-primary">.</span>
          </motion.div>

          {/* Social Icons (GitHub, LinkedIn, Instagram) */}
          <div className="flex items-center gap-5">
            {[
              { icon: Github, link: "https://github.com/prabesh1222/", label: "GitHub" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/prabesh-bhandari-766a10361", label: "LinkedIn" },
              { icon: Instagram, link: "https://www.instagram.com/prabesh_bhandari123/", label: "Instagram" }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1, color: "#06a2c2" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Rights Reserved */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-sm text-gray-500"
          >
            All rights reserved &copy; {new Date().getFullYear()}
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;