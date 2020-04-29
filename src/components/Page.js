import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

import AppBarHidden from './AppBarHidden';
import Box from '@material-ui/core/Box';
import ButtonScrollTop from './ButtonScrollTop';
import Container from '@material-ui/core/Container';
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
    backgroundColor: '#282A36',
    color: '#E7EAEF',
    width: '100%',
    minHeight: "100vh"
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

function Page(props) {

  const { children } = props;
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
          <Box height="100%" display="flex" flexDirection="column">
            <Box p={1} flexGrow={1}>
              <Container>
                {children}
              </Container>
            </Box>
            <Box p={1} bgcolor="black">
            linkedin.com/in/debihiga | debihiga.wordpress.com
            </Box>
          </Box>
          <ButtonScrollTop {...props} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Page;