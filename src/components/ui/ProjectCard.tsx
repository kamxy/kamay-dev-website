import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/outline';

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
    const getLinkText = () => {
        if (appStore) return 'View on App Store';
        if (playStore) return 'View on Play Store';
        if (website) return 'Visit Website';
        return 'Live Demo';
    };

    const getLinkIcon = () => {
        if (appStore) return '📱';
        if (playStore) return '🤖';
        if (website) return '🌐';
        return <ExternalLinkIcon className="w-4 h-4" />;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm group"
        >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-dimWhite">{description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-white/10 text-dimWhite"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors"
                        >
                            {typeof getLinkIcon() === 'string' ? (
                                <span>{getLinkIcon()}</span>
                            ) : (
                                getLinkIcon()
                            )}
                            {getLinkText()}
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors"
                        >
                            <CodeIcon className="w-4 h-4" />
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard; 