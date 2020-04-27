import './App.css';

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

import AppBarHidden from './components/AppBarHidden';
import Box from '@material-ui/core/Box';
import ButtonScrollTop from './components/ButtonScrollTop';
import Container from '@material-ui/core/Container';
import DrawerResponsive from './components/DrawerResponsive';
import React from 'react';
import { anchorScrollToTop } from './constants/Constants';

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

/**
 naranja: #ffcb6b
azul: #7da3f3
gris claro (flechita del menu) + el texto: #adadad 
color del menu: #414450
rosa: #ff79c6
celeste claro: #8be9fd

    <!-- Icons -->
    <link rel="stylesheet" href="https://fontawesome.com/icons/folder?style=solid"/>
    <link rel="stylesheet" href="https://fontawesome.com/icons/folder?style=regular"/>
    <link rel="stylesheet" href="https://fontawesome.com/icons/arrow-right?style=solid"/>

 */

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"IBM Plex Mono", monospace',
    ].join(','),
  },
});

function App(props) {

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
          <div id={anchorScrollToTop} />
          <AppBarHidden handleDrawerToggle={handleDrawerToggle} />
          <Container>
            <Box my={2}>
              {[...new Array(30)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')}
            </Box>
          </Container>
          <ButtonScrollTop {...props}>

          </ButtonScrollTop>
        </main>
      </div>

    </ThemeProvider>
  );
}

export default App;
