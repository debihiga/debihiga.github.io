import React from 'react';
import About from './about/About';
import Footer from './footer/Footer';
import Hero from './hero/Hero';

export default function Home(props) {

    return (
        <React.Fragment>
            <Hero />
            <About />
            <Footer />
        </React.Fragment>
    );
}
