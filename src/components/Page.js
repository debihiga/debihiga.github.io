import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import AppBarHidden from './AppBarHidden';
import Box from '@material-ui/core/Box';
import ButtonScrollTop from './ButtonScrollTop';
import Content from './Content';
import DrawerResponsive from './drawer/DrawerResponsive';
import Footer from './Footer';
import React from 'react';
import { anchorScrollToTop } from '../constants/Common';
import { theme } from '../Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    display: 'flex',
  },
  main: {
    width: '100%',
    minHeight: "100vh"
  },
  box: {
    padding: 0,
  },
  boxMain: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

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
        <main className={classes.main}>
          <AppBarHidden handleDrawerToggle={handleDrawerToggle} />
          <div id={anchorScrollToTop} />
          {/** https://material-ui.com/system/flexbox/ */}
          <Box className={classes.box+' '+classes.boxMain}>
            <Box p={1} flexGrow={1} className={classes.box}>
              <Content content={children}/>
            </Box>
            <Box p={1} className={classes.box}>
              <Footer/>
            </Box>
          </Box>
          <ButtonScrollTop {...props} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Page;