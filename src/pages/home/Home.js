import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
}));

function Home(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Hero/>
            <About/>
        </React.Fragment>
    );
}
 
export default Home;