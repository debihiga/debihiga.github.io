import { drawerWidth, title } from '../constants/Common';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Menu from '../pages/Menu';
import React from 'react';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

/** Drawer content */

function DrawerContent(props) {
  return (
    <React.Fragment>
      <DrawerHeader />
      <Divider />
      <Menu handleDrawerToggle={props.handleDrawerToggle}/>
    </React.Fragment>
  );
}

/** Drawer Header */

const stylesDrawerHeader = makeStyles((theme) => ({
  /** Project folder */
  drawerHeader: {
    backgroundColor: '#353A4D',
    color: '#CCCCCC',
  },
}));

function DrawerHeader() {
  const classes = stylesDrawerHeader();
  return (
    <Toolbar className={classes.drawerHeader}>
      <Typography variant="h6" noWrap>
        {title}
      </Typography>
    </Toolbar>
  );
}

/** Drawer */

const stylesDrawer = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth, // Shifts page content
      flexShrink: 0,
    },
  },
  /** Project folders */
  drawerPaper: {
    width: drawerWidth, // Adjust drawer width
    backgroundColor: '#414350',
  },
}));

function DrawerResponsive(props) {

  const classes = stylesDrawer();
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="menu">
      <CssBaseline />
      {/* Mobile Drawer */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerContent handleDrawerToggle={props.handleDrawerToggle}/>
        </Drawer>
      </Hidden>
      {/* Desktop Drawer */}
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
          open
        >
          <DrawerContent handleDrawerToggle={()=>{}}/>
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default DrawerResponsive;