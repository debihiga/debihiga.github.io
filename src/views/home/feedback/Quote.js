import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from 'components/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions  from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

/** From: https://codemyui.com/pure-css-material-quotation-cards/ */

const useStyles = makeStyles((theme) => ({
    quote: {
        background: 'inherit',
        /*color: $defaultTextColor,*/
        padding: theme.spacing(5),
        position: 'relative',
        overflow: 'hidden',
        minHeight: '120px',
        textAlign: 'center',
        width: '70%',
        margin: 'auto', /** align center horizontally */
        '& p': {
            fontSize: '1rem',
            lineHeight: '1.5',
            margin: '0',
        },
        '& cite': {
            fontSize: '16px',
            marginTop: '10px',
            display: 'block',
            fontWeight: '200',
            opacity: '0.8',
        },
        '&::before': {
            fontFamily: 'Georgia, serif',
            content: `'“'`,
            position: 'absolute',
            top: '10px',
            left: '10px',
            fontSize: '5em',
            fontWeight: 'normal',
            opacity: '0.15',
        },
        '&::after': {
            fontFamily: 'Georgia, serif',
            content: "'”'",
            position: 'absolute',
            bottom: '-110px',
            lineHeight: '100px',
            right: '-32px',
            fontSize: '25em',
            fontWeight: 'normal',
            opacity: '0.15',
        }  
    },
}));

export default function Quote(props) {

  const classes = useStyles();
  const { quote, cite } = props;

  return (
    <blockquote className={classes.quote} >
        <p>
            {quote} 
        </p>        
        <cite>
            {cite}
        </cite>
    </blockquote>        
  );
}