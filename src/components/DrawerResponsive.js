import {
  CollapseBtn,
  Content,
  Footer,
  Header,
  Root,
  Sidebar,
  SidebarTrigger
} from '@mui-treasury/layout';
import { drawerWidth, title } from '../Constants';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { pages } from '../pages/Pages';

/** Drawer content */

const drawerContent = (
  <div>
    <DrawerHeader />
    <Divider />
    <List>
      {pages.map((page) => (
        <ListItem1 key={page.name} name={page.name} path={page.path} />
      ))}
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
  /** Project folders */
  drawerPaper: {
    backgroundColor: '#46474F',
  },
}));

function DrawerResponsive(props) {

  const classes = stylesDrawer();

  return (
    <Sidebar>
      <div className={classes.drawerPaper+' '+props.sidebarStyles.container}>
        {drawerContent}
      </div>
      <CollapseBtn className={props.sidebarStyles.collapseBtn}>
        {props.collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </CollapseBtn>
    </Sidebar>
  );
}

export default DrawerResponsive;