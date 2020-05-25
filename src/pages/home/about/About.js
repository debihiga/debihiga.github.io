import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from 'components/Typography';
import SkillSet from './SkillSet';
import Section from '../Section.js';
import { anchorAbout } from 'constants/Common';
import Biography from './Biography';

const styles = (theme) => ({
  container: {
    backgroundColor: '#F4F6F8'
  },
  subSection: {
    marginTop: theme.spacing(5),
  }
});

function About(props) {
  const { classes } = props;

  return (
    <Section title="About Me" className={classes.container} anchor={anchorAbout}>
        {/** Grid spacing=5(x4px) between grids */}
        <Grid container spacing={5}>
          {/** Biography */}
          <Grid item xs={12} md={6} className={classes.subSection}>
            <Biography/>
          </Grid>
          {/** Skill set */}
          <Grid item xs={12} md={6} className={classes.subSection}>
            <SkillSet/>
          </Grid>
        </Grid>
    </Section>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);