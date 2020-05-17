import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import HeroLayout from './HeroLayout';
import { anchorAbout } from 'constants/Common';
import { scrollToAnchor } from 'components/ScrollToAnchor';

var ReactRotatingText = require('react-rotating-text');

const backgroundImage = '/images/hero.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  subtitle: {
    fontFamily: "Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace",
  },
  button: {
    minWidth: 200,
    marginTop: theme.spacing(8),
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
      <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.title}>
        Hey, hello! I'm <b>Debi Higa</b> :)
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.subtitle}>
        /* I'm a passionate
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.subtitle}>
        <ReactRotatingText items={['Java', 'React', 'Python']} />software engineer */
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={() => scrollToAnchor(anchorAbout)}
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