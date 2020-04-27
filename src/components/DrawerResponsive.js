import { drawerWidth, title } from '../constants/Constants';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { faFolder } from '@fortawesome/free-regular-svg-icons'

/** Drawer Header */

const stylesDrawerHeader = makeStyles((theme) => ({
  /** Project folder */
  drawerHeader: {
    backgroundColor: '#383838',
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

/** Drawer Items */

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'baseline'
  },
  listItemText: {
    fontSize: '0.9rem',
    paddingLeft: 8
  }
}));

function ListItem1(props) {
  const classes = useStyles();
  return (
    <ListItem classes={{ root: classes.listItem }}
      button
      key={props.name} >
      <FontAwesomeIcon icon={faFolder} color={"#ffcb6b"} />
      <ListItemText classes={{ primary: classes.listItemText }} primary={props.name} />
    </ListItem>
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
    backgroundColor: '#252525',
    color: '#CCCCCC',
  },
}));

function DrawerResponsive(props) {

  const classes = stylesDrawer();
  const theme = useTheme();

  const drawer = (
    <div>
      <DrawerHeader />
      <Divider />
      <List>
        <ListItem1 name={'About'} />
        <ListItem1 name={'Reverse Engineering: Huawei SmartAX MT882'} />
        <ListItem1 name={'JPEG: A picture with fewer words is worth the same'} />
        <ListItem1 name={'Autostereogram: A picture that is worth more than itself'} />
        <ListItem1 name={'MQTT Baselines'} />
        <ListItem1 name={'BeagleBone Black Troubleshooting'} />
        <ListItem1 name={'University Projects'} />
        <ListItem1 name={'Android Apps'} />
        <ListItem1 name={'Git Cheatsheet'} />
      </List>
    </div>
  );

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
          {drawer}
        </Drawer>
      </Hidden>
      {/* Desktop Drawer */}
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default DrawerResponsive;