import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '../../components/Typography';

const styles = (theme) => ({
    root: {
      marginTop: theme.spacing(14),
    },
    backgroundImage: {
      pointerEvents: 'none',
      position: 'absolute',
      top: -180,
    },
    title: {
      paddingBottom: theme.spacing(4),
    },
});

function Section(props) {

  const { classes, backgroundImagePath, title, children } = props;

  return (
    <Container className={classes.root} component="section">
      {/** Background image */}
      <img
        src={backgroundImagePath}
        className={classes.backgroundImage}
        alt="background image"
      />
      {/** Title */}
      <Typography className={classes.title} variant="h4" marked="center" align="center" component="h2">
        {title}  
      </Typography>
      {/** Content */}
      {children}
    </Container>
  );
}

Section.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Section);