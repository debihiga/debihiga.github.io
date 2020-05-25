import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Logo } from "../../../svg/java.svg";
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme) => ({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
    logo: {
        margin: 'auto', /** Center image */
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    description: {
        paddingBottom: 0, 
        paddingTop: 0,
        '& Collapse' :{
            top:'220px'
        }, 
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
});

function SkillRow(props) {

    const { classes, row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow className={classes.row} onClick={() => setOpen(!open)}>
          {/** Arrow button */}
          <TableCell width="24px" className={classes.row}>
            <IconButton aria-label="row" size="small">
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          {/** Logo */}
          { row.logoPath=="" ?
            <div/> :
            <Avatar variant="square" src={row.logoPath} className={classes.logo}>
                Java
            </Avatar>
          }
          {/** Skill */}
          <TableCell style={{ paddingLeft: 0 }} component="th" scope="row">
            {row.name}
          </TableCell>
        </TableRow>
        <TableRow className={classes.row} onClick={() => setOpen(!open)}>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand)}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        </TableRow>
        <TableRow>
            {/** Description */}
          <TableCell className={classes.description} colSpan={3}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Typography variant="body">
                    {row.description}
                </Typography>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  SkillRow.propTypes = {
    row: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

  export default withStyles(styles)(SkillRow);