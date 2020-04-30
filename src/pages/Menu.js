import React, { Component, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandLess';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemNav from '../components/ListItemNav';
import ListItemText from '@material-ui/core/ListItemText';
import { pages } from '../constants/Pages';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
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

  /**
   * this method sets the current state of a menu item 
   * i.e whether it is in expanded or collapsed or a collapsed state
   */
  function handleClick(item) {
    setState(prevState => (
      { [item]: !prevState[item] }
    ))
  }

  function getMenu(children) {
    return children.map((subOption) => {
      /**
       * if the menu item doesn't have any child, 
       * this method simply returns a clickable menu item that 
       * redirects to any location
       */
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem
              button
              key={subOption.name}>
              <Link
                to={subOption.url}
                className={classes.links}>
                <ListItemText
                  inset
                  primary={subOption.name}
                />
              </Link>
            </ListItem>
          </div>
        )
      }
      /** 
       * if there is no child this method uses recursion 
       * to go until the last level of children and then returns the item by the first condition.
       * */
      return (
        <div key={subOption.name}>
          <ListItem
            button
            onClick={() => handleClick(subOption.name)}>
            <ListItemText
              inset
              primary={subOption.name} />
            {state[subOption.name] ?
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>
          <Collapse
            in={state[subOption.name]}
            timeout="auto"
            unmountOnExit
          >
            {getMenu(subOption.children)}
          </Collapse>
        </div>
      )
    })
  }

  return (
    <List>
      {getMenu(pages)}
    </List>
  )
}
