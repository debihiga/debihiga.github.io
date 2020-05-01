import React, { Component, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemNav from '../components/ListItemNav';
import ListItemText from '@material-ui/core/ListItemText';
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { pages } from '../constants/Pages';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  links: {
    textDecoration: 'none',
  },
  menuHeader: {
    paddingLeft: '30px'
  }
}));

export default function Menu(props) {

  const [state, setState] = useState({});
  const classes = useStyles();

  function handleDrawerToggle() {
    props.handleDrawerToggle();
  }

  /**
   * this method sets the current state of a menu item 
   * i.e whether it is in expanded or collapsed or a collapsed state
   */
  function handleClick(item) {
    setState(prevState => (
      {
        ...prevState, // Spread notation, keeps all prev states except current. 
        [item]: !prevState[item]
      }
    ));
  }

  function getMenu(pages) {
    return pages.map((page) => {
      /**
       * if the menu item doesn't have any child, 
       * this method simply returns a clickable menu item that 
       * redirects to any location
       */
      if (!page.children) {
        return (
          <ListItemNested
            key={page.name}
            page={page}
            handleClick={handleDrawerToggle}
          />
        )
      }
      /** 
       * if there is no child this method uses recursion 
       * to go until the last level of children and then returns the item by the first condition.
       * */
      return (
        <ListItemNested
          key={page.name}
          page={page}
          handleClick={handleClick}
          state={state}
          getMenu={getMenu} />

      )
    })
  }

  return (
    <List className={classes.list}>
      {getMenu(pages)}
    </List>
  )
}

const stylesListItemNested = makeStyles((theme) => ({
  // https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router
  //link: {
  //  textDecoration: 'none',
  //},
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'baseline'
  },
  listItemText: {
    fontSize: '0.9rem',
    paddingLeft: 8,
    color: '#BCBFC8',
  },
  collapse: {
    paddingLeft: 16,
  }
}));

function ListItemNested(props) {

  const { state, page, handleClick, getMenu } = props;
  const classes = stylesListItemNested();
  const hasChildren = state == undefined ? false : true;

  return (
    <Link
      to={page.url}
      style={{ textDecoration: 'none' }}>
      <ListItem
        button
        className={classes.listItem}
        onClick={() => handleClick(page.name)}>
        <ListItemText
          className={classes.listItemText}
          primary={page.name} />
      </ListItem>
      {hasChildren ?
        <Collapse
          className={classes.collapse}
          in={state[page.name]}
          timeout="auto"
          unmountOnExit
        >
          {getMenu(page.children)}
        </Collapse>
        :
        <div />
      }
    </Link>
  )
}
