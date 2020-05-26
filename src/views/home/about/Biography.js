import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from 'components/Typography';
import Avatar from '@material-ui/core/Avatar';

const photo = 'images/photo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  photo: {
    margin: 'auto', /** Center image */
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

export default function Biography(props) {

  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
        <Avatar className={classes.photo} src={photo} />
        <Typography variant="body1">
            <br/>
            <br/>
            {"I'm a "}<b>{"Full-Stack Software Engineer"}</b>{" for J.P.Morgan Chase & Co. in Buenos Aires, Argentina."}
            <br/>
            <br/>
            {"I've graduated as an "}<b>{"Electronics Engineer"}</b>{" at UTN."}
            <br/>
            <br/>
            {"For me, "}<i>{"programming is an art form."}</i>
            <br/>
            {"That's why, I'm very detail oriented and I love to deliver neat, clean and good quality code."}
        </Typography>
    </Container>
  );
}
