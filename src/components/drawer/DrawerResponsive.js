import { makeStyles, useTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import DrawerHeader from './DrawerHeader'
import DrawerList from './DrawerList';
import Hidden from '@material-ui/core/Hidden';
import React from 'react';
import { drawerWidth } from '../../constants/Common';

const useStyles = makeStyles((theme) => ({
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

  const classes = useStyles();
  const theme = useTheme();

  function DrawerContent(props) {
    return (
      <React.Fragment>
        <DrawerHeader />
        <Divider />
        <DrawerList handleDrawerToggle={props.handleDrawerToggle}/>
      </React.Fragment>
    );
  }

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
          ModalProps={{ keepMounted: true }} // Better open performance on mobile.
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