import {
  Header,
  SidebarTrigger,
} from '@mui-treasury/layout';

import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { title } from '../Constants';

const useStyles = makeStyles((theme) => ({
  /** Title bar */
  appBar: {
    backgroundColor: '#3C3C3C',
    color: '#CCCCCC',
  },
}));

function AppBarHidden(props) {

  const classes = useStyles();

  return (
    <Header className={classes.appBar} >
      <Toolbar>
        <SidebarTrigger className={classes.appBar} >
          <MenuIcon />
        </SidebarTrigger>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
        {/** Below second Toolbar is necessary to add padding below the AppBar */}
      </Toolbar >
    </Header>
  );
}

export default AppBarHidden;