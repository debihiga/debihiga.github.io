import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/Button';
import { scrollToAnchor } from 'components/ScrollToAnchor';
import Typography from 'components/Typography';
import { anchorAbout } from 'constants/Common';
import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import HeroLayout from './HeroLayout';

const useStyles = makeStyles((theme) => ({
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
}));

export default function Hero(props) {

  const classes = useStyles();

  return (
    <HeroLayout>
      {/* Title */}
      <Typography className={classes.title} color="inherit" align="center" variant="h2" marked="center">
        Hey, hello! I'm <b>Debi Higa</b> :)
      </Typography>
      {/* Subtitle */}
      <Typography className={classes.subtitle} color="inherit" align="center" variant="h5">
        /* I'm a passionate
        <br/>
        <ReactRotatingText items={['Java', 'React', 'Python']} />
        <br/>
        Software Engineer */
      </Typography>
      {/* Button */}
      <Button
        className={classes.button}
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        onClick={() => scrollToAnchor(anchorAbout)}
      >
        View my work
      </Button>
      {/* More */}
      <Typography className={classes.more} variant="body2" color="inherit" >
        Let's peer program!
      </Typography>
    </HeroLayout>
  );
}
