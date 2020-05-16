import React from 'react';
import Hero from './Hero';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
}));

function Home(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Hero></Hero>
        </React.Fragment>
    );
}
 
export default Home;