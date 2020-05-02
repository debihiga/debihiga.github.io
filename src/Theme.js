import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
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
    body1: {
      color: '#E7EAEF',
      paddingTop: '16px',
    },
    body2: {
      color: '#9294A3'
    },
    button: {
      color: '#5393ff'
    },
  },
});