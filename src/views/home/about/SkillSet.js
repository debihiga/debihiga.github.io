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
    <span>
      Backend developer of banking and 24/7 global cloud applications,
      using Spring Boot, Drools, Maven, Jules, Jenkins, REST, and WebSocket services. 
      Collaborated in Agile cross teams from the USA, UK, India, and Argentina. 
      Built from scratch, and completely by me, image processing projects for object detection and recognition.
      Responsible for the development, deployment, and support of each application. 
      <a target="_blank" href="https://leetcode.com/debihiga/" >
      LeetCode 
      </a> coding challenges lover &lt;3.
    </span>),
  createData("/images/logos/react.jpg", "React",
    <span>
      Frontend developer in React, using Material UI and Redux. 
      Focused on our costumers, their needs, and the enhancement of the UX side of our applications.
      Ah! Also, this website is built in React :)
    </span>),
  createData("/images/logos/python.jpg", "Python",
    <span>
      Developed image processing desktop applications using PyQt and OpenCV. 
      In addition to this, I have built small scripts for 
      data collection from sensors and transmission to servers in single-board computers, 
      like the Raspberry Pi, Beaglebone, Arduino, etc.
    </span>),
  createData("/images/logos/mysql.jpg", "MySQL",
    <span>
      Built complex relational tables and store procedures, 
      using also Pentaho transformations and jobs. 
      I have experience in Oracle SQL and SQLite, too.
    </span>),
  createData("/images/logos/opencv.jpg", "OpenCV",
    <span>
      This is one of my favourite fields :)
      I have used IP cameras and also LIDARs to analyze and process data for 
      object detection and recognition. 
    </span>),
  createData("/images/logos/android.jpg", "Android",
    <span>
      Developed from scratch and completely by me, 
      Android applications that some of them are currently in Google Play Store:
      <ul>
        <li>
          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ingesys.controlremotoba90ip" >
            Parking barrier remote control
          </a>
        </li>
        <li>
          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ingesys.carteltarifario" >
            Price table customizer
          </a>
        </li>
        <li>
          <a target="_blank" href="https://youtu.be/yxUsVv4iVQk" >
            Watering scheduler
          </a>
        </li>
      </ul>
    </span>),
  createData("/images/logos/reveng.jpg", "Reverse Engineering",
    <span>
      During an internship, I have done a firmware reverse engineering research, found 2 vulnerabilities, and presented them in the ekoparty Security Conference.
    </span>),
  createData("/images/logos/electronics.jpg", "Electronics",
    <span>
      Developed embedded electronic systems in C, connecting with sensors like GPS, ultrasounds, accelerometers, gyroscopes, and magnetometers.
      Furthermore, I have done the assembly, reparation, and testing of electronic boards. 
      I have experience also in single-board computers, like the Raspberry Pi, Beaglebone, Arduino, etc.
    </span>),
  createData("/images/logos/others.jpg", "Others",
    <span>
      In my first jobs, I have also developed from scratch and completely by me, projects in C++ and PHP. 
      I have also built small applications in Matlab.
    </span>),
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
