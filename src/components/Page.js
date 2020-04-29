import {
  CollapseBtn,
  Content,
  Footer,
  Header,
  Root,
  Sidebar,
  SidebarTrigger,
} from '@mui-treasury/layout';
import {
  ContentMockUp,
  FooterMockUp,
  HeaderMockUp,
  NavContentMockUp,
  NavHeaderMockUp,
} from '@mui-treasury/mockup/layout';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

import AppBarHidden from './AppBarHidden';
import ButtonScrollTop from './ButtonScrollTop';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import DrawerResponsive from './DrawerResponsive';
import React from 'react';
import { anchorScrollToTop } from '../Constants';

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#282A36',
    color: '#E7EAEF',
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    ].join(','),
    h1: {
      color: '#F0FF79'
    },
    h2: {
      color: '#EBB16E'
    },
    h3: {
      color: '#FF78C4'
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
  },
});

/** https://mui-treasury.com/ */
const config = {
  "autoCollapseDisabled": false,
  "collapsedBreakpoint": "sm",
  "heightAdjustmentDisabled": false,
  /** Mobile */
  "xs": {
    "sidebar": {
      "anchor": "left",
      "hidden": false,
      "inset": false,
      "variant": "temporary",             /** Opened from AppBar */
      "width": 240,
      "collapsible": false,
      "collapsedWidth": 64
    },
    "header": {
      "position": "sticky",               /** Fixed at top */
      "offsetHeight": 56,
      "persistentBehavior": "flexible"
    },
    "content": {
      "persistentBehavior": "flexible"
    },
    "footer": {
      "persistentBehavior": "flexible"
    }
  },
  /** Laptop */
  "sm": {
    "sidebar": {
      "anchor": "left",
      "hidden": false,
      "inset": false,
      "variant": "permanent",
      "width": 256,
      "collapsible": false,
      "collapsedWidth": 64
    },
    "header": {
      /** Hidden */
    },
    "content": {
      "persistentBehavior": "flexible"
    },
    "footer": {
      "persistentBehavior": "flexible"
    }
  },
  /** Desktop */
  "md": {
    "sidebar": {
      "anchor": "left",
      "hidden": false,
      "inset": false,
      "variant": "permanent",
      "width": 256,
      "collapsible": false,
      "collapsedWidth": 64
    },
    "header": {
      /** Hidden */
    },
    "content": {
      "persistentBehavior": "flexible"
    },
    "footer": {
      "persistentBehavior": "flexible"
    }
  }
};

function Page(props) {

  const { children } = props;
  const classes = useStyles();

  return (
    <Root config={config} theme={theme}>
      {({ sidebarStyles, collapsed }) => (
        <>
          <CssBaseline />
          <AppBarHidden />
          <div id={anchorScrollToTop} />
          <DrawerResponsive
            collapsed={collapsed}
            sidebarStyles={sidebarStyles} />
          <Content className={classes.content}>
              {children}
            <ButtonScrollTop {...props} />
          </Content>
          <Footer>
            <FooterMockUp />
          </Footer>
        </>
      )}
    </Root>
  );
}

export default Page;