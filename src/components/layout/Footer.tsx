import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, PERSONAL_DATA } from '@/lib/constants';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandMedium } from '@tabler/icons-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center space-x-6 mb-6">
                    <motion.a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        <IconBrandGithub size={24} />
                    </motion.a>
                    <motion.a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        <IconBrandLinkedin size={24} />
                    </motion.a>
                    <motion.a
                        href={SOCIAL_LINKS.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        <IconBrandTwitter size={24} />
                    </motion.a>
                    <motion.a
                        href={SOCIAL_LINKS.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        <IconBrandMedium size={24} />
                    </motion.a>
                </div>

                <div className="flex justify-center space-x-8 mb-6">
                    <a href="#about" className="text-gray-500 hover:text-gray-800 transition-colors">
                        About
                    </a>
                    <a href="#projects" className="text-gray-500 hover:text-gray-800 transition-colors">
                        Projects
                    </a>
                    <a href="#contact" className="text-gray-500 hover:text-gray-800 transition-colors">
                        Contact
                    </a>
                </div>

                <div className="text-center text-gray-400 text-sm">
                    <p>© {currentYear} {PERSONAL_DATA.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;