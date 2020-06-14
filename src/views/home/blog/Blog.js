import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Section from 'views/home/Section.js';
import BlogEntry from './BlogEntry';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#F4F6F8',
  },
  subSection: {
    marginTop: theme.spacing(5),
  }
}));

export default function Blog(props) {

  const classes = useStyles();

  return (
    <Section title="Blog" className={classes.container} >
        {/** Grid spacing=5(x4px) between grids */}
        <Grid container spacing={5}>
          <BlogEntry 
            image="/images/blog/reverse-engineering/reverse-engineering.png"
            title="Reverse Engineering"
            subtitle="Huawei SmartAX MT882"
            description=
                {["Playing around with an old modem, I have found 2 new vulnerabilities doing firmware reverse engineering (▰˘◡˘▰) Do you want to learn how? Check it out!", 
                <br/>,<br/>,
                <i>Presented in the workshop “How much do you trust in your ISP?” in the ekoparty Security Conference 2015.</i>]}
            link="https://debihiga.wordpress.com/reverse-engineering-huawei-smartax-mt882/"
            >
          </BlogEntry>
          <BlogEntry 
            image="/images/blog/jpeg/jpeg.png"
            title="JPEG"
            subtitle="An image with fewer words has the same meaning"
            description="Have you ever wondered how the JPEG compression works? You will find it amazing (✧u✧) it involves interesting things like the Huffman coding and the Discrete Cosine Transformation. Learn how it works!"
            link="https://debihiga.wordpress.com/jpeg/"
            >
          </BlogEntry>
          <BlogEntry
            image="/images/blog/autostereogram/autostereogram.png"
            title="Autoestereogram"
            subtitle="An image is worth more than only one image"
            description="From this kind of 2D images you should be able to see another 3D image. Can you? Cuz I can't (ಠ_ಥ) so I coded a program to do it for me! ᕙ(⇀‸↼‶)ᕗ Check it out!"
            link="https://debihiga.wordpress.com/autoestereogramas/"
            >
          </BlogEntry>
        </Grid>
    </Section>
  );
}