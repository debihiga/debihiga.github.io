
// https://material-ui.com/styles/basics/

import { makeStyles } from '@material-ui/core/styles';

export const drawerWidth = 240;
export const drawerBackgroundColor = '#414450';
export const drawerH6Color = '#FFF';

export const useStyles = makeStyles((theme) => ({
  /** Drawer */
  /** Button Scroll to Top */
  buttonScrollToTop: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));