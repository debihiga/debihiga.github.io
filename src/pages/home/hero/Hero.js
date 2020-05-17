import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import HeroLayout from './HeroLayout';
var ReactRotatingText = require('react-rotating-text');

const backgroundImage = '/images/hero.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  subtitle: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    fontFamily: "Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace",
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Hero(props) {
  const { classes } = props;

  return (
    <HeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Hey, hello! I'm Debi :)
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.subtitle}>
        /* I'm a passionate <ReactRotatingText items={['Java', 'React', 'Python']} /> software engineer */
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        View my work
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Let's peer program!
      </Typography>
    </HeroLayout>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);