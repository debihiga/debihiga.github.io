import { ListSubheader } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { title } from '../../constants/Common';

const useStyles = makeStyles((theme) => ({
  /** Project folder */
  drawerHeader: {
    backgroundColor: '#353A4D',
    color: '#CCCCCC',
    padding: '16px 24px',
  },
}));

export default function DrawerHeader() {
  const classes = useStyles();
  return (
    /** ListSubHeader -> remains pinned
     * https://material-ui.com/components/lists/
     */
    <ListSubheader className={classes.drawerHeader}>
      <Typography variant="h6" noWrap>
        {title}
      </Typography>
    </ListSubheader>
  );
}