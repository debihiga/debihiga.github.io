import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { title } from '../Constants';

const useStyles = makeStyles((theme) => ({
  /** Title bar */
  appBar: {
    backgroundColor: '#3C3C3C',
    color: '#CCCCCC',
  },
}));

function AppBarHidden(props) {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Hidden smUp implementation="css">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        {/** Below second Toolbar is necessary to add padding below the AppBar */}
        <Toolbar />
      </Hidden>
    </React.Fragment>
  );
}

export default AppBarHidden;