import { ListSubheader } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { title } from '../../constants/Common';

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    fontSize: 24,
    color: theme.palette.common.white,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
  },
}));

export default function DrawerHeader() {
  const classes = useStyles();
  return (
    /** ListSubHeader -> remains pinned
     * https://material-ui.com/components/lists/
     */
    <ListSubheader className={clsx(classes.drawerHeader)}>
      {title}
    </ListSubheader>
  );
}