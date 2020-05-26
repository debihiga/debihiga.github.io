import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        backgroundColor: darkTheme.palette.background.default,
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        "& a": {
            margin: theme.spacing(1.5),
            color: darkTheme.palette.text.primary,
            '&:hover': {
                color: theme.palette.secondary.main,
            },    
        }
    },
    more: {
        textAlign: 'center',
        color: darkTheme.palette.text.secondary,
        fontSize: '9pt',
        margin: 0,
    }
}));

export default function Footer(props) {

    const classes = useStyles();

    return (
        <Container className={classes.root} component="section" maxWidth={false}>
            <Box className={classes.links}>
                <a target="_blank" href="https://linkedin.com/in/debihiga" >
                    <LinkedInIcon fontSize="large" />
                </a>
                <a target="_blank" href="https://github.com/debihiga" >
                    <GitHubIcon fontSize="large" />
                </a>
            </Box>
            <p className={classes.more}>
                DEBI HIGA
            </p>
        </Container>
    );
};
