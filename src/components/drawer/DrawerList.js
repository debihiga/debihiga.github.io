import React, { useState } from 'react';

import DrawerListItem from './DrawerListItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { pages } from '../../constants/Pages';

const useStyles = makeStyles((theme) => ({
  // https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router
  links: {
    textDecoration: 'none',
  },
}));

export default function DrawerList(props) {

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

  function getList(pages) {
    return pages.map((page) => {
      /**
       * if the menu item doesn't have any child, 
       * this method simply returns a clickable menu item that 
       * redirects to any location
       */
      if (!page.children) {
        return (
          <DrawerListItem
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
        <DrawerListItem
          key={page.name}
          page={page}
          handleClick={handleClick}
          state={state}
          getList={getList} />
      )
    })
  }

  return (
    <List className={classes.list}>
      {getList(pages)}
    </List>
  )
}
