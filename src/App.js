import './App.css';

import Box from '@material-ui/core/Box';
import Page from './components/Page';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme} from '@material-ui/core/styles';

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
    h4: {
      fontColor: '#F00'
    }
  },
});

function App(props) {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <Page>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
      <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
    </Page>
  );
}

export default App;