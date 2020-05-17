import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../../../components/Typography';
import CollapsibleTableSkillSet from './CollapsibleTableSkillSet';

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
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
  description: {
    textAlign: 'center',
  }
});

function About(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/** Background image */}
        <img
          src="/static/themes/onepirate/productCurvyLines.png" 
          className={classes.curvyLines}
          alt="curvy lines"
        />
        {/** Grid spacing=5(x4px) between grids */}
        <Grid container spacing={5}>
            {/** About */}
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              {/*
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
              />
              */}
              <Typography variant="h6" className={classes.title}>
                ABOUT ME
              </Typography>
              <Typography variant="body" className={classes.description}>
                {"I'm a "}<b>{"Full-Stack Software Engineer"}</b>{" for J.P.Morgan Chase & Co. in Buenos Aires, Argentina."}
                <br/>
                <br/>
                {"I've graduated as an "}<b>{"Electronics Engineer"}</b>{" at UTN."}
                <br/>
                <br/>
                {"For me, "}<i>{"programming is an art form."}</i>
                <br/>
                {"That's why, I'm very detail oriented and I love to deliver neat, clean and good quality code."}
              </Typography>
            </div>
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
      </Container>
    </section>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);