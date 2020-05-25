import React from 'react';
import About from './about/About';
import Footer from './footer/Footer';
import Hero from './hero/Hero';
import ButtonScrollTop from 'components/ButtonScrollTop';
import { anchorAbout } from 'constants/Common';

export default function Home(props) {

    return (
        <React.Fragment>
            <Hero />
            <About />
            <Footer />
            <ButtonScrollTop anchor={anchorAbout} {...props} />
        </React.Fragment>
    );
}
