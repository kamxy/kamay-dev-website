import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '@/components/layout/Footer';

const Home = () => {
    return (
        <>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default Home; 