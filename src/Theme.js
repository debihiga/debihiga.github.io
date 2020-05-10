import { createMuiTheme } from '@material-ui/core/styles';

/** https://github.com/mui-org/material-ui/blob/master/docs/src/pages/premium-themes/paperbase/Paperbase.js */

export let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
     h1: {
      color: '#F0FF79'
    },
    h2: {
      color: '#EBB16E'
    },
    h3: {
      color: '#FF78C4',
      paddingTop: '16px',
      paddingBottom: '16px'
    },
    h4: {
      color: '#616BE8'
    },
    h5: {
      color: '#66FFC8'
    },
    body2: {
      color: '#9294A3'
    },
    button: {
      color: '#5393ff'
    },
    shape: {
      borderRadius: 8,
    },
    props: {
      MuiTab: {
        disableRipple: true,
      },
    },
    mixins: {
      toolbar: {
        minHeight: 48,
      },
    },
  },
});

theme = {
  ...theme,
  overrides: {
    /** start: Drawer */
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c', /** Background color */
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightSmall,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    /** end: Drawer */
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};