import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { scrollToAnchor } from 'components/ScrollToAnchor';

const useStyles = makeStyles((theme) => ({
  btn: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ButtonScrollTop(props) {

  const { window } = props;
  
  const classes = useStyles();
  
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div onClick={() => scrollToAnchor()} role="presentation" className={classes.btn}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
}

export default ButtonScrollTop;