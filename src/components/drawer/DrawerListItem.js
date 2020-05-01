import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router
  //link: {
  //  textDecoration: 'none',
  //},
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 4,
    alignItems: 'baseline'
  },
  listItemText: {
    fontSize: '0.9rem',
    paddingTop: '0px !important',
    paddingBottom: 0,
    color: '#BCBFC8',
  },
  collapse: {
    paddingLeft: 16,
  }
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
        className={classes.listItem}
        onClick={() => handleClick(page.name)}>
        <ListItemText
          className={classes.listItemText}>
          <Typography className={classes.listItemText}>
            {page.name}
          </Typography>
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