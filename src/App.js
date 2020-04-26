import './App.css';

import { AnchorBackToTop } from './components/ButtonScrollTop';
import AppBarHidden from './components/AppBarHidden';
import Box from '@material-ui/core/Box';
import ButtonScrollTop from './components/ButtonScrollTop';
import Container from '@material-ui/core/Container';
import DrawerResponsive from './components/DrawerResponsive';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

// TODO: Create a theme
export const drawerWidth = 240;
export const drawerBackgroundColor = '#252526';
export const drawerH6Color = '#FFF';
export const title = "Debi Higa";

function App(props) {

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <DrawerResponsive handleDrawerToggle={handleDrawerToggle}
                        mobileOpen={mobileOpen} />
      <main className={classes.content}>
        <div id={AnchorBackToTop} />
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
  );
}

export default App;
