import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { anchorAbout } from 'constants/Common';
import React from 'react';
import Section from 'views/home/Section.js';
import Biography from './Biography';
import SkillSet from './SkillSet';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#F4F6F8',
  },
  subSection: {
    marginTop: theme.spacing(5),
  }
}));

export default function About(props) {

  const classes = useStyles();

  return (
    <Section title="About Me" className={classes.container} anchor={anchorAbout}>
        {/** Grid spacing=5(x4px) between grids */}
        <Grid container spacing={5}>
          {/** Biography */}
          <Grid className={classes.subSection} item xs={12} md={6} >
            <Biography/>
          </Grid>
          {/** Skill set */}
          <Grid className={classes.subSection} item xs={12} md={6} >
            <SkillSet/>
          </Grid>
        </Grid>
    </Section>
  );
}
