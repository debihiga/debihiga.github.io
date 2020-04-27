import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

import AppBarHidden from './AppBarHidden';
import ButtonScrollTop from './ButtonScrollTop';
import Container from '@material-ui/core/Container';
import DrawerResponsive from './DrawerResponsive';
import React from 'react';
import { anchorScrollToTop } from '../constants/Constants';

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#1E1E1E',
    color: '#CCCCCC',
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    ].join(','),
    h4: {
      color: '#f73378'
    },
    h5: {
      color: '#ff6333'
    },
    button: {
      color: '#5393ff'
    },
  },
});

function Page(props) {

  const {children} = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <DrawerResponsive handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen} />
        <main className={classes.content}>
          <AppBarHidden handleDrawerToggle={handleDrawerToggle} />
          <div id={anchorScrollToTop} />
          <Container>
            {children}
          </Container>
          <ButtonScrollTop {...props}/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Page;