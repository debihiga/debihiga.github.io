import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Section from 'views/home/Section.js';
import Quote from './Quote';

/** From: https://codemyui.com/pure-css-material-quotation-cards/ */

const useStyles = makeStyles((theme) => ({
}));

export default function Feedback(props) {

  const classes = useStyles();

  return (
    <Section title="Feedback" >
        <Quote 
            quote="Definitely, all the tasks she had developed had been done with great professionalism and dedication, contributing all the time her knowledge and ideas with the only desire to achieve excellence in all the projects she led and/or participated."
            cite="José Carvalho (Manager) > jcarvalho@ingesys.com.ar"
        />
    </Section>
  );
}