import { Card, CardContent, CardHeader, Divider, ListItemAvatar } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ReadMoreLess from 'components/ReadMoreLess';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    alignItems: 'start',
    padding: theme.spacing(0.5),
  },
  image: {
    height: theme.spacing(5),
    width: theme.spacing(5),
    paddingTop: theme.spacing(1),
  },
  more: {
    textAlign: 'right',
  }
}));

function createData(logoPath, name, description) {
  return {
    logoPath,
    name,
    description
  };
}

const skills = [
  createData("/images/logos/java.jpg", "Java",
    <span>Backend developer of image processing, banking and 24/7 global, desktop and cloud applications,
    using Spring Boot, Drools, Maven, Jules, Jenkins, REST and websocket services. 
    I have been part of Agile cross teams from USA, UK, India and Argentina. 
    I also love solving coding challenges in <a target="_blank" href="https://leetcode.com/debihiga/" >
    LeetCode
    </a> using Java.</span>),
  createData("/images/logos/react.jpg", "React",
    <span>Frontend developer in React, using Material UI. 
    I focus on the costumers and their needs, 
    trying to enhance also the UX side of the applications. 
    Ah! Also this website is built in React :)</span>),
  createData("/images/logos/python.jpg", "Python",
    <span>Backend developer of image processing desktop applications using PyQT and OpenCV.</span>),
  createData("/images/logos/mysql.jpg", "MySQL",
    <span>Database developer of relational tables and store procedures, 
    using also Pentaho transformations and jobs. 
    I have experience in Oracle SQL and SQLite, too.</span>),
  createData("/images/logos/opencv.jpg", "OpenCV",
    <span>I have used IP cameras and also LIDARs to analyze and process data for object recognition and detection. 
    This is one of my favourite fields :)</span>),
  createData("/images/logos/android.jpg", "Android",
    <span>For one of my previous jobs, I developed two Android applications that are currently in Google Play Store.</span>),
  createData("/images/logos/reveng.jpg", "Reverse Engineering",
    <span>During an internship, I have done a firmware reverse engineering research, found 2 vulnerabilities and presented them in the ekoparty Security Conference.</span>),
  createData("/images/logos/electronics.jpg", "Electronics",
    <span>On my previous jobs, I have developed embedded electronic systems in C connecting with sensors like GPS, ultrasounds, accelerometers, gyroscopes and magnetometers. 
    I have experience in Raspberry, Beaglebone and Andruino, too.</span>),
  createData("/images/logos/others.jpg", "Others",
    <span>In my previous jobs, I have also developed entire projects in C++ and PHP. 
    I have also built small applications in Matlab.</span>),
];

export default function SkillSet(props) {

  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
      <Card >
        {/** Header */}
        <CardHeader title="Skills" />
        <Divider />
        {/** List */}
        <CardContent>
          <List>
            {/** Skill */}
            {skills.map((skill, i) => (
              <ListItem
                className={classes.item}
                divider={i < skill.length - 1}
                key={skill.name}
              >
                <ListItemAvatar>
                  <img
                    alt="Skill"
                    className={classes.image}
                    src={skill.logoPath}
                  />
                </ListItemAvatar>
                <Box>
                  <Typography variant="body1">
                    {skill.name}
                  </Typography>
                  <ReadMoreLess
                        variant="body2"
                        charLimit={100}
                        readMoreText="... Read more"
                        readLessText=" Read less"
                      >
                        {skill.description}
                  </ReadMoreLess>
                </Box>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}
