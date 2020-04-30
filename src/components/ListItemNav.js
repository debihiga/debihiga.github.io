import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { makeStyles } from '@material-ui/core/styles';

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

export default function ListItemNav(props) {
  const classes = useStyles();
  return (
    <NavLink to={props.path}>
      <ListItem classes={{ root: classes.listItem }}
        button
        key={props.name} >
        {props.children!=undefined ? <ExpandMore /> : <FontAwesomeIcon icon={faFolder} color={"#ffcb6b"} />}
        <ListItemText classes={{ primary: classes.listItemText }} primary={props.name} />
      </ListItem>
    </NavLink>
  );
}