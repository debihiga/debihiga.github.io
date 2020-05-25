import { Button, Card, CardActions, CardContent, CardHeader, Divider, ListItemAvatar } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { default as React } from 'react';
import ReadMoreAndLess from 'react-read-more-less';

function createData(logoPath, name, description) {
  return {
    logoPath,
    name,
    description
  };
}

const skills = [
  createData("/images/logos/java.jpg", "Java",
    "Backend developer of image processing, banking and 24/7 global, desktop and cloud applications, " +
    "using Spring Boot, Drools, Maven, Jules, Jenkins, REST and websocket services. " +
    "I have been part of Agile cross teams from USA, UK, India and Argentina. " +
    "I also love solving coding challenges in LeetCode using Java."),
  createData("/images/logos/react.jpg", "React",
    "Frontend developer in React, using Material UI and Redux. " +
    "I focus on the costumers and their needs, " +
    "trying to enhance also the UX side of the applications. " +
    "Ah! Also this website is built in React :)"),
  createData("/images/logos/python.jpg", "Python",
    "Backend developer of image processing desktop applications using PyQT and OpenCV."),
  createData("/images/logos/mysql.jpg", "MySQL",
    "Database developer of relational tables and store procedures, "+
    "using also Pentaho transformations and jobs. " +
    "I have experience in Oracle SQL and SQLite, too."),
  createData("/images/logos/opencv.jpg", "OpenCV",
    "I have used IP cameras and also LIDARs to analyze and process data for object recognition and detection. "+
    "This is one of my favourite fields :)"),
  createData("/images/logos/android.jpg", "Android",
    "For one of my previous jobs, I developed two Android applications that are currently in Google Play Store."),
  createData("/images/logos/reveng.jpg", "Reverse Engineering",
    "During an internship, I have done a firmware reverse engineer, found 2 vulnerabilities and presented them in the ekoparty Security Conference."),
  createData("/images/logos/electronics.jpg", "Electronics",
    "On my previous jobs, I have developed embedded electronic systems in C connecting with sensors like GPS, ultrasounds, accelerometers, gyroscopes & magnetometers. " +
    "I have experience in Raspberry, Beaglebone and Andruino, too."),
  createData("/images/logos/others.jpg", "Others",
    "In my previous jobs, I have also developed entire projects in C++ and PHP on my own. " +
    "I have also built small applications in Matlab."),
];

const styles = (theme) => ({
  item: {
    alignItems: 'start',
  },
  image: {
    height: theme.spacing(5),
    width: theme.spacing(5),
    paddingTop: theme.spacing(1),
  },
  more: {
    textAlign: 'right',
  }
});

function SkillList(props) {

  const { classes } = props;

  return (
    <Card >
      <CardHeader title="Skills" />
      <Divider />
      <CardContent>
        <List>
          {skills.map((skill, i) => (
            <ListItem
              className={classes.item}
              divider={i < skill.length - 1}
              key={skill.id}
            >
              <ListItemAvatar>
                <img
                  alt="Skill"
                  className={classes.image}
                  src={skill.logoPath}
                />
              </ListItemAvatar>
              <ListItemText
                primary={skill.name}
                secondary={
                  <ReadMoreAndLess
                    className="read-more-content"
                    charLimit={100}
                    readMoreText=" Read more"
                    readLessText=" Read less"
                  >
                    {skill.description}
                  </ReadMoreAndLess>}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(SkillList);