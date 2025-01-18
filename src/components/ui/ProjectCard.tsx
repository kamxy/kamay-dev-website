import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CodeIcon } from '@heroicons/react/outline';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    category: string;
    appStore?: boolean;
    playStore?: boolean;
    website?: boolean;
}

const ProjectCard = ({
    title,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
    category,
    appStore,
    playStore,
    website,
}: ProjectCardProps) => {
    const handleClick = () => {
        if (liveUrl) {
            window.open(liveUrl, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <motion.div
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm group hover:shadow-2xl hover:shadow-primary/20 cursor-pointer"
        >
            {/* Oval Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl" />

            {/* Image Container */}
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-6 z-10">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl font-bold"
                >
                    {title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-2 text-dimWhite"
                >
                    {description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 mt-4"
                >
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-200/10 text-dimWhite backdrop-blur-sm border border-gray-200/20 shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>

                {/* Store/Platform Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2"
                >
                    {appStore && <span className="text-lg">📱</span>}
                    {playStore && <span className="text-lg">🤖</span>}
                    {website && <span className="text-lg">🌐</span>}
                    {githubUrl && <CodeIcon className="w-5 h-5" />}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectCard; 