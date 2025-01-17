import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

const Section = ({ id, className = '', children }: SectionProps) => {
    return (
        <section
            id={id}
            className={`py-20 md:py-28 ${className}`}
        >
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section; 