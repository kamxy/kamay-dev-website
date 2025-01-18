import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { SKILLS, ACHIEVEMENTS, PERSONAL_DATA } from '@/lib/constants';
import { SectionIcons, SkillIcons } from '@/utils/icons';
import {
    IconBrandSwift,
    IconBrandFlutter,
    IconBrandFirebase,
    IconBrandReact,
    IconBrandNextjs,
    IconBrandTypescript,
    IconBrandJavascript,
    IconBrandGit,
    IconBrandAws,
    IconBrandTailwind,
    IconBrandHtml5,
    IconBrandCss3,
    IconDatabase,
    IconApi,
    IconCode
} from '@tabler/icons-react';

const getSkillIcon = (skill: string) => {
    const skillLower = skill.toLowerCase();
    if (skillLower.includes('swift')) return <IconBrandSwift className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('flutter')) return <IconBrandFlutter className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('firebase')) return <IconBrandFirebase className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('react')) return <IconBrandReact className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('next')) return <IconBrandNextjs className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('typescript')) return <IconBrandTypescript className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('javascript')) return <IconBrandJavascript className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('git')) return <IconBrandGit className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('aws')) return <IconBrandAws className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('tailwind')) return <IconBrandTailwind className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('html')) return <IconBrandHtml5 className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('css')) return <IconBrandCss3 className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('sql')) return <IconDatabase className="w-5 h-5" stroke={1.5} />;
    if (skillLower.includes('rest') || skillLower.includes('api')) return <IconApi className="w-5 h-5" stroke={1.5} />;
    return <IconCode className="w-5 h-5" stroke={1.5} />;
};

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
                            Computer Engineering with <span className="font-bold">4+ years</span> of experience in <span className="font-bold">Mobile</span> 📱 and <span className="font-bold">Web</span> 🌐 development. Based in <span className="font-bold">Istanbul</span> 🇹🇷, specializing in creating <span className="font-bold">user-friendly</span> ✨, efficient mobile applications that solve real-world problems. 🚀
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
                                        <li key={skill} className="text-text-light flex items-center gap-2">
                                            <span>{getSkillIcon(skill)}</span>
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;