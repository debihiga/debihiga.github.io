import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from 'components/Typography';
import CollapsibleTableSkillSet from './CollapsibleTableSkillSet';
import Section from '../Section.js';
import { anchorAbout } from 'constants/Common';
import Biography from './Biography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.white,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  description: {
    textAlign: 'center',
  },
  subSection: {
    marginTop: theme.spacing(5),
  }
});

function About(props) {
  const { classes } = props;

  return (
    <Section title="About Me" anchor={anchorAbout}>
        {/** Grid spacing=5(x4px) between grids */}
        <Grid container spacing={5}>
          {/** Biography */}
          <Grid item xs={12} md={6} className={classes.subSection}>
            <Biography/>
          </Grid>
          {/** Skill set */}
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <Typography variant="h6" className={classes.title}>
                SKILL SET
              </Typography>
              <CollapsibleTableSkillSet/>
            </div>
          </Grid>
        </Grid>
    </Section>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);