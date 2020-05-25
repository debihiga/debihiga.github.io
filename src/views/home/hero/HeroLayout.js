import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const backgroundImage = '/images/hero.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.7,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
}));

export default function HeroLayout(props) {

  const { children } = props;

  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/** Background image */}
        <div className={classes.backdrop} /> {/** Darkens image */}
        <div className={classes.background} />
        {/** Content */}
        {children}
      </Container>
    </section>
  );
}

HeroLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
