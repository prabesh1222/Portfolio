import React from "react";
import { motion } from "framer-motion";
import edu from '../assets/edu.jpg'
import { GraduationCap, Calendar, Clock } from "lucide-react";

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: 'Higher Secondary Level',
            institute: 'Sukuna Secondary School',
            duration: "2022 – 2024",
            status: "completed",
            details: "Completed Higher Secondary Level with a focus on the science stream."
        },
        {
            id: 2,
            degree: 'Bachelor of Information Technology',
            institute: 'Ithari International College',
            duration: "2024 – 2027",
            status: "in-progress",
            details: "Currently in year three of BIT, focused on software development, data structures, and algorithms. Active participant in hackathons and coding challenges."
        },
    ]

    return (
        <section className="text-white py-20 overflow-hidden" id='education'>
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center lg:text-left"
                >
                    <p className="text-primary text-sm mb-2 font-semibold">
                        Learning path
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Education</h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-start gap-16">
                    {/* Photo, styled as a framed portrait with a caption plate */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full lg:w-4/12 flex justify-center lg:justify-start lg:sticky lg:top-24"
                    >
                        <figure className="w-64 md:w-80">
                            <div className="border border-[#1f1641] rounded-sm overflow-hidden">
                                <img
                                    src={edu}
                                    alt="Education"
                                    className="w-full h-72 md:h-96 object-cover"
                                />
                            </div>
                            <figcaption className="mt-3 border-t border-primary/30 pt-2 text-xs text-gray-400 tracking-wide">
                                Ithari International College · est. 2024
                            </figcaption>
                        </figure>
                    </motion.div>

                    {/* Timeline */}
                    <div className="w-full lg:w-8/12 relative pl-10">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            style={{ transformOrigin: "top" }}
                            className="absolute left-[7px] top-2 bottom-2 w-px bg-primary/25"
                        />

                        <div className="space-y-14">
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5, delay: index * 0.25 + 0.3 }}
                                    className="relative"
                                >
                                    {/* Node */}
                                    <span
                                        className={`absolute -left-10 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                                            item.status === "in-progress"
                                                ? "bg-primary border-primary"
                                                : "bg-[#050816] border-primary/60"
                                        }`}
                                    />

                                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                                        <h3 className="font-serif text-xl md:text-2xl text-white">
                                            {item.degree}
                                        </h3>
                                        <span className="flex items-center gap-1.5 text-xs text-gray-400">
                                            <Calendar size={12} className="text-primary" />
                                            {item.duration}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                                        <GraduationCap size={14} className="text-primary" />
                                        {item.institute}
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-3">
                                        {item.details}
                                    </p>

                                    {item.status === "in-progress" && (
                                        <span className="inline-flex items-center gap-1.5 text-xs text-primary">
                                            <Clock size={12} />
                                            In progress
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
