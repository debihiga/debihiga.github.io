import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 400,
    '&:hover,&:focus': {
      color: '#FF78C4 !important',
    },
  },
  collapse: {
    paddingLeft: 16,
  },
  listItemActive: {
    color: '#FF78C4',
  },
}));

export default function ListItemNested(props) {

  const { state, page, handleClick, getList } = props;
  const classes = useStyles();
  const hasChildren = state == undefined ? false : true;

  return (
    <Link
      to={page.url}
      style={{ textDecoration: 'none' }}>
      <ListItem
        button
        className={clsx(classes.listItem, page.isActive && classes.listItemActive)}
        onClick={() => handleClick(page.name)}>
        <ListItemText>
            {page.name}
        </ListItemText>
      </ListItem>
      {hasChildren ?
        <Collapse
          className={classes.collapse}
          in={state[page.name]}
          timeout="auto"
          unmountOnExit
        >
          {getList(page.children)}
        </Collapse>
        :
        <div />
      }
    </Link>
  )
}