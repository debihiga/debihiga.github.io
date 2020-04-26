import { drawerBackgroundColor, drawerH6Color, drawerWidth, title } from '../App';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import PropTypes from 'prop-types';
import React from 'react';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { faFolder } from '@fortawesome/free-regular-svg-icons'

const useStyles = makeStyles((theme) => ({
  appBarDrawer: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    color: drawerH6Color,
  },
  drawerPaper: {
    width: drawerWidth,
    background: drawerBackgroundColor,
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'baseline'
  },
  listItemText:{
    fontSize:'0.9rem',
    color: '#adadad',
    paddingLeft: 8
  }
}));

function ListItem1(props) {
  const classes = useStyles();
  return (
    <ListItem classes={{root:classes.listItem}} 
              button 
              key={props.name} >
          <FontAwesomeIcon icon={faFolder} color={"#ffcb6b"} />
      <ListItemText classes={{primary:classes.listItemText}} primary={props.name} />
    </ListItem>
  );
}

function DrawerResponsive(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
      <Divider />
      <List>
          <ListItem1 name={'About'}/>
          <ListItem1 name={'Reverse Engineering: Huawei SmartAX MT882'}/>
          <ListItem1 name={'JPEG: A picture with fewer words is worth the same'}/>
          <ListItem1 name={'Autostereogram: A picture that is worth more than itself'}/>
          <ListItem1 name={'MQTT Baselines'}/>
          <ListItem1 name={'BeagleBone Black Troubleshooting'}/>
          <ListItem1 name={'University Projects'}/>
          <ListItem1 name={'Android Apps'}/>
          <ListItem1 name={'Git Cheatsheet'}/>
      </List>
    </div>
  );

  return (
    <div className={classes.appBarDrawer}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

DrawerResponsive.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default DrawerResponsive;