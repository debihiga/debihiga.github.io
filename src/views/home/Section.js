import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from 'components/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: theme.spacing(14),
      paddingBottom: theme.spacing(14),
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
}));

export default function Section(props) {

  const { className, backgroundImagePath, anchor, title, children } = props;

  const classes = useStyles();

  return (
    <section className={clsx(classes.root, className)} >
      <Container>
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
    </section>
  );
}
