import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import ProfileImage from '@/components/ui/ProfileImage';
import FollowBanner from '@/components/sections/FollowBanner';
import { scrollToSection } from '@/utils/scroll';

const Home = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        scrollToSection(sectionId.replace('#', ''));
    };

    return (
        <Layout>
            <Head>
                <title>Mehmet Kamay - Portfolio</title>
                <meta name="description" content="Personal portfolio of Mehmet Kamay - Software Developer specializing in Mobile and Web Development" />
                <meta name="keywords" content="Mehmet Kamay, iOS Developer, Web Developer, Software Engineer, Portfolio" />
                <meta name="author" content="Mehmet Kamay" />
                <meta property="og:title" content="Mehmet Kamay - Portfolio" />
                <meta property="og:description" content="Personal portfolio of Mehmet Kamay - Software Developer specializing in Mobile and Web Development" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@kamaymehmet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <ProfileImage />
                    <h1 className="heading">
                        Hi, I'm <span className="text-primary">Mehmet Kamay</span>
                    </h1>
                    <p className="mt-4 subheading">
                        Software Developer specializing in Mobile and Web Development
                    </p>
                    <div className="flex justify-center gap-4 mt-8">
                        <a
                            href="#projects"
                            onClick={(e) => handleNavClick(e, '#projects')}
                            className="btn btn-primary"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="btn border-2 border-primary"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </section>

            <About />
            <Projects />
            <Contact />
            <FollowBanner />
        </Layout>
    );
};

export default Home;
