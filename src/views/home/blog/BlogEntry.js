import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from 'components/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions  from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', /** https://stackoverflow.com/questions/57818778/how-to-make-material-ui-cardactions-always-stick-to-the-bottom-of-parent */
        alignItems: 'center',
        textAlign: 'center',
        padding: theme.spacing(0, 2),
        height: '100%',
    },
    content: {
        padding: 0,
    },
    image: {
        marginTop: theme.spacing(2),
        width: '100%',
        maxWidth: '100%', 
        maxHeight: '100%',
    },
    title: {
        marginTop: theme.spacing(2),
        textTransform: 'uppercase',
        width: '100%',
        textAlign: 'center',
    },
    subtitle: {
        marginBottom: theme.spacing(2),
        width: '100%',
        textAlign: 'center',
        fontWeight: 400,
    },
    action: {
        display: 'flex',
        width: '100%',
    },
    button: {
        marginLeft: 'auto',
    }
}));

export default function BlogEntry(props) {

  const classes = useStyles();
  const { image, title, subtitle, description, link } = props;

  return (
    <Grid item xs={12} md={3}>
        <Card className={classes.card} >
            <CardContent className={classes.content} >
                {
                image==undefined ? null :
                <img
                    className={classes.image}
                    src={image}
                    alt={title}
                />
                }
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
                <Typography variant="h6" className={classes.subtitle}>
                    {subtitle}
                </Typography>
                <Typography variant="body" align='left' >
                    {description}
                </Typography>
            </CardContent>
            <CardActions className={classes.action} >
                <Button className={classes.button} size="small" color="primary" target="_blank" href={link}>
                    Read More
                </Button>
            </CardActions>
        </Card>
    </Grid>
  );
}