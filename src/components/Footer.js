import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black',
    color: '#E7EAEF',
  },
}));

export default function Footer() {

  const classes = useStyles();

  return (
    <Typography className={classes.footer}>
      github.com/debihiga | linkedin.com/in/debihiga | debihiga.wordpress.com
    </Typography>
  );
}