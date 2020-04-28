import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import { NavLink } from 'react-router-dom';
import React from 'react';
import ReverseEngineeringHuaweiSmartAXMT882 from '../pages/ReverseEngineeringHuaweiSmartAXMT882/ReverseEngineeringHuaweiSmartAXMT882';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { faFolder } from '@fortawesome/free-regular-svg-icons'

/** Drawer content */

const drawerContent = (
  <div>
    <DrawerHeader />
    <Divider />
    <List>
      <ListItem1 name={'Reverse Engineering: Huawei SmartAX MT882'} path={"/ReverseEngineeringHuaweiSmartAXMT882"} />
      <ListItem1 name={'JPEG: A picture with fewer words is worth the same'} path={"/sample"} />
      <ListItem1 name={'Autostereogram: A picture that is worth more than itself'} path={"/sample"} />
      <ListItem1 name={'MQTT Baselines'} path={"/sample"} />
      <ListItem1 name={'BeagleBone Black Troubleshooting'} path={"/sample"} />
      <ListItem1 name={'University Projects'} path={"/sample"} />
      <ListItem1 name={'Android Apps'} path={"/sample"} />
      <ListItem1 name={'Git Cheatsheet'} path={"/sample"} />
    </List>
  </div>
);

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

/** Drawer Items */

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'baseline'
  },
  listItemText: {
    fontSize: '0.9rem',
    paddingLeft: 8,
    color: '#BCBFC8',
  }
}));

function ListItem1(props) {
  const classes = useStyles();
  return (
    <ListItem classes={{ root: classes.listItem }}
      button
      key={props.name} >
      <FontAwesomeIcon icon={faFolder} color={"#ffcb6b"} />
      <NavLink to={props.path}>
        <ListItemText classes={{ primary: classes.listItemText }} primary={props.name} />
      </NavLink>
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
    backgroundColor: '#46474F',
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
          {drawerContent}
        </Drawer>
      </Hidden>
      {/* Desktop Drawer */}
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
          open
        >
          {drawerContent}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default DrawerResponsive;