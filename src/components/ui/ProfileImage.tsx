import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProfileImage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8"
        >
            <div className="absolute inset-0 rounded-full bg-primary/20 backdrop-blur-sm transform -rotate-6" />
            <div className="absolute inset-0 rounded-full bg-primary/20 backdrop-blur-sm transform rotate-6" />
            <div className="relative rounded-full overflow-hidden border-4 border-primary/50">
                <Image
                    src="/profile_pic.jpeg"
                    alt="Mehmet Kamay"
                    width={192}
                    height={192}
                    className="rounded-full"
                    priority
                />
            </div>
        </motion.div>
    );
};

export default ProfileImage; 