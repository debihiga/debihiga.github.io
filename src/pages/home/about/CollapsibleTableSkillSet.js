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

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(logo, name, description) {
  return {
    logo,
    name,
    description
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        {/** Arrow button */}
        <TableCell width="24px">
          <IconButton aria-label="row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {/** Logo */}
        { row.logo=="" ?
          <div/> :
          /**https://stackoverflow.com/questions/38510443/how-to-use-an-svg-file-in-a-svgicon-in-material-ui/56418369#56418369 */
          <img src={Logo} />
        }
        {/** Skill */}
        <TableCell style={{ paddingLeft: 0 }} component="th" scope="row">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {row.description}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData("/images/logos/java.svg","Java", 
  "I have developed many kinds of applications using Spring Boot, Maven, REST and websocket services. I love solving coding challenges in LeetCode using Java, also."),
  createData("","React", 
  "I have developed features in both front and backend side, using Material UI and Redux. Even this website is built in React :)"),
  createData("","MySQL", 
  "In most of the projects I used databases to persist data. In particular, in one of them, the amount of procedures was so much, that we managed them with Pentaho transformers and jobs."),
  createData("","Python", 
  "I have developed desktop applications with PyQT."),
  createData("","OpenCV", 
  "This is one of my favourites fields :) I love image processing. I have used IP cameras and also LIDARs to analyze data."),
  createData("","Arduino/RaspberryPi", 
  "I have used this embedded systems as prototypes before building electronic boards."),
  createData("","Reverse Engineering", 
  "During an internship, I did an extensive investigation and did a firmware reverse engineer, found 2 vulnerabilities and presented them in the ekoparty Security Conference."),
  createData("","Others", 
  "I also have projects in C++, C, PHP and Matlab, but nowadays I don't use them."),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}