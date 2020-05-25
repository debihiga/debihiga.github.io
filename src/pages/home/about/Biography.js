import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from 'components/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = (theme) => ({
    root: {
        textAlign: 'center',
    },
    photo: {
        margin: 'auto', /** Center image */
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
});

function Biography(props) {

  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
        <Avatar src="images/photo.jpg" className={classes.photo} />
        <Typography variant="body">
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

Biography.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Biography);