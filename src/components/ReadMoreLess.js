import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import ReactDOM from 'react-dom';

const useStyles = makeStyles((theme) => ({
    text: {
        color: theme.palette.text.secondary,
        "& a": {
            textDecoration: 'none',
            color: '#007bff', 
            cursor: 'pointer'
        }
    },
}));

function Button(props) {
    const { label, onClick } = props;
    return(
        <a onClick={onClick} >
            {label}
        </a>
    );
}

export default function ReadMoreLess(props) {

    const { children, variant, charLimit, readMoreText, readLessText } = props;

    const classes = useStyles();
    
    const [showMore, setShowMore] = useState(false);

    let fullContent = children;
    let shortContent = children;
    let textContent = children;

    if(children.props) {
        textContent = children.props.children;
        if(Array.isArray(textContent)) {
            textContent = textContent[0];
        }
        shortContent = textContent.substr(0, charLimit);
    }

    function Content(props) {
        const { showMore } = props;
        if(textContent.length<charLimit) {
            return(
                <Typography className={classes.text} variant={variant}>
                    {fullContent}
                </Typography>
            );
        }
        if(showMore) {
            return(
                <Typography className={classes.text} variant={variant}>
                    {fullContent}
                    <Button label={readLessText} onClick={()=>setShowMore(false)}/>
                </Typography>
            );
        } else {
            return(
                <Typography className={classes.text} variant={variant}>
                    {shortContent}
                    <Button label={readMoreText} onClick={()=>setShowMore(true)}/>
                </Typography>
            );
        }
    }

    return(
        <Content showMore={showMore}/>
    );
}