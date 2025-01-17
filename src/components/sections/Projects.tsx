import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import ProjectCard from '../ui/ProjectCard';
import { PROJECTS, PERSONAL_DATA, SOCIAL_LINKS, PROJECT_CATEGORIES } from '@/lib/constants';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = PROJECTS.filter(
        (project) => selectedCategory === 'All' || project.category === selectedCategory
    );

    return (
        <Section id="projects">
            <div className="grid gap-12">
                {/* Header */}
                <div className="text-center">
                    <h2 className="heading">Featured Projects</h2>
                    <p className="mt-4 subheading max-w-2xl mx-auto">
                        {PERSONAL_DATA.experience}. From mobile apps to technical writing,
                        here's a showcase of my work.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4">
                    {PROJECT_CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === category
                                ? 'bg-primary text-white'
                                : 'bg-white/5 text-dimWhite hover:bg-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Additional Info */}
                <div className="text-center mt-8">
                    <p className="text-dimWhite">
                        {PERSONAL_DATA.achievement}
                    </p>
                    <div className="mt-4 space-y-2">
                        <a
                            href={SOCIAL_LINKS.medium}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-white transition-colors block"
                        >
                            ✍️ Read my articles on Medium
                        </a>
                        <a
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-white transition-colors block"
                        >
                            💻 View more projects on GitHub
                        </a>
                        <a
                            href={SOCIAL_LINKS.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-white transition-colors block"
                        >
                            🐦 Follow @buildwithswift on Twitter
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Projects; 