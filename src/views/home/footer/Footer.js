import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: darkTheme.palette.background.default,
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    icon: {
        margin: theme.spacing(1.5),
        color: darkTheme.palette.text.primary,
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
}));

export default function Footer(props) {

    const classes = useStyles();

    return (
        <ThemeProvider theme={darkTheme}>
            <section className={classes.root} >
                <a className={classes.icon} target="_blank" href="https://linkedin.com/in/debihiga" >
                    <LinkedInIcon fontSize="large" />
                </a>
                <a className={classes.icon} target="_blank" href="https://github.com/debihiga" >
                    <GitHubIcon fontSize="large" />
                </a>
            </section>
        </ThemeProvider>
    );
};
