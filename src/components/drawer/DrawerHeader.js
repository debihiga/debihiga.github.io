import React from 'react';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { title } from '../../constants/Common';

const useStyles = makeStyles((theme) => ({
  /** Project folder */
  drawerHeader: {
    backgroundColor: '#353A4D',
    color: '#CCCCCC',
  },
}));

export default function DrawerHeader() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.drawerHeader}>
      <Typography variant="h6" noWrap>
        {title}
      </Typography>
    </Toolbar>
  );
}