import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Section from 'views/home/Section.js';
import Quote from './Quote';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
/** https://mui.wertarbyte.com/#material-auto-rotating-carousel */

const useStyles = makeStyles((theme) => ({
}));

export default function Feedback(props) {

  const classes = useStyles();

  return (
    <Section title="Feedback" >
        <AutoPlaySwipeableViews
            open={true}
            autoplay={true}
        >
            <Quote 
                quote="Definitely, all the tasks she had developed had been done with great professionalism and dedication, contributing all the time her knowledge and ideas with the only desire to achieve excellence in all the projects she led and/or participated."
                cite="J. Carvalho (Manager) > jcarvalho@ingesys.com.ar"
            />
            <Quote 
                quote="I do not know anyone that, during an internship, has found vulnerabilities and presented them in a workshop, nevermind in a conference like the Eko."
                cite="A. Blanco (Manager) > linkedin.com/in/6e726d/"
            />
            <Quote 
                quote="Deborah has her own initiative. She works in an orderly, methodical way to apply her baggage of knowledge in solving problems. This means that she has the ability to work independently and follow the guidelines without needing assistance or help from supervisors. She generates ideas and novel concepts to provide original solutions. She seeks information to explore and research on topics aligned with the interests of the business."
                cite="D. De Luca (Manager) > ddeluca@coresecurity.com"
            />
            <Quote 
                quote="Deborah is an excellent professional with whom I had the pleasure of working on the 4th year final project at the UTN. She is a very responsible and organized person, and together we form an excellent team making the project a complete success."
                cite="G. Sartoris (UTN classmate) > https://www.linkedin.com/in/gabriel-sartoris-0554a2173/"
            />
        </AutoPlaySwipeableViews>
    </Section>
  );
}