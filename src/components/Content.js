import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    direction: "row",
    height: "100%",
    spacing: 0
  },
  container: {
    paddingTop: '32px'
  },
}));

export default function Content(props) {

  const { content } = props;
  const classes = useStyles();

  return (
    <Grid className={classes.content} container>
      <Grid item xs={12} md={9}>
        <Container className={classes.container}>
          {content}
        </Container>
      </Grid>
      {/** TODO: right navigation bar */}
      <Grid item xs={0} md={3}>
      </Grid>
    </Grid>
  );
}