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
    anchor: {
      position: 'relative',
      '& a' :{
        position: 'absolute',
        top:'220px'
       },      
    },
});

function Section(props) {

  const { classes, backgroundImagePath, anchor, title, children } = props;

  return (
    <Container className={classes.root} component="section">
      {/** Anchor */}
      {/** https://dev.to/gajus/offsetting-named-anchor-and-scrollintoview-position-7jm */}
      <div className={classes.anchor}>
        <a id={anchor}/>  
      </div>
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