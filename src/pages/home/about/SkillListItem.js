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
import SkillRow from './SkillRow';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = (theme) => ({
    t: {

    }
});

function SkillListItem(props) {

  const { classes, logoPath, name, description } = props;

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <div>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
            <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!open} timeout="auto" unmountOnExit>
            {description}
        </Collapse>
    </div>
  );
}

export default withStyles(styles)(SkillListItem);