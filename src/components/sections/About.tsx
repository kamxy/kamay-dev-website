import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { SKILLS, ACHIEVEMENTS, PERSONAL_DATA } from '@/lib/constants';
import { SectionIcons, SkillIcons } from '@/utils/icons';

const About = () => {
    return (
        <Section id="about">
            <div className="grid gap-12 md:gap-16">
                {/* Professional Summary */}
                <div className="text-center">
                    <h2 className="heading">
                        {SectionIcons.about} About Me
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="soft-bg p-6 mt-6 max-w-3xl mx-auto"
                    >
                        <p className="text-text-light">
                            {PERSONAL_DATA.education} with {PERSONAL_DATA.experience}.
                            Based in {PERSONAL_DATA.location}, specializing in creating user-friendly,
                            efficient mobile applications that solve real-world problems.
                        </p>
                    </motion.div>
                </div>

                {/* Skills */}
                <div className="grid gap-8">
                    <h3 className="text-2xl font-bold text-center">
                        {SectionIcons.skills} Skills & Expertise
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {SKILLS.map((skillGroup, index) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="soft-bg p-6"
                            >
                                <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                                    {SkillIcons[skillGroup.category.toLowerCase().split(' ')[0] as keyof typeof SkillIcons]}
                                    {skillGroup.category}
                                </h4>
                                <ul className="mt-4 space-y-2">
                                    {skillGroup.items.map((skill) => (
                                        <li key={skill} className="text-text-light">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Additional Achievements */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">
                        {SectionIcons.trophy} Achievements
                    </h3>
                    <div className="grid gap-4 max-w-3xl mx-auto">
                        {ACHIEVEMENTS.map((achievement, index) => (
                            <motion.div
                                key={achievement.text}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="soft-bg p-4 flex items-center justify-center gap-2 text-text-light"
                            >
                                <span className="text-xl">{achievement.icon}</span>
                                <span>{achievement.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About; 