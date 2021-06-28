// import Image from 'material-ui-image';
// import { useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import ParallaxBannerStyles from './ParallaxBanner.module.css';
import './parallaxHero.css';
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import { Box, Typography, Grid, Container } from '@material-ui/core';
import '@fontsource/fira-code'; // Defaults to weight 400.
// import { Typography } from '@material-ui/core/Typography';
// import { shadows } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // sm: {
    //   marginTop: '-25%',
    // }
    // marginTop: '-25%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: 'Fira Code',
    fontWeight: '700',
    // fontSize: '1.2 em',
    color: 'white',
    // textShadow: '2px 1px 0px rgba(0,0,180,0.7), 2px 3px 0px rgba(0,0,180,0.7)',
    textShadow: '-1px -1px 0 #2c65ad, 1px -1px 0 #2c65ad, -1px 1px 0 #2c65ad, 1px 1px 0 #2c65ad',
    // marginBottom: "10px",
  },
}));

const HomeHero = (/* props */) => {
  // const [spacing, setSpacing] = React.useState(2);
  // const classes = useStyles();
  const classes = useStyles();

  const layers = [
    {
      image:
      'https://res.cloudinary.com/hjtkps4jr/image/upload/v1623299221/hero/clouds_ba2bum.svg',
      amount: 0,
    },
    {
      image:
      'https://res.cloudinary.com/hjtkps4jr/image/upload/v1623410463/hero/mountain-background_crop_syugir.png',
      amount: 0.25,
    },
    // {
    //   image:
    //   'https://res.cloudinary.com/hjtkps4jr/image/upload/v1623367369/hero/mountain-foregroundNme_v2_pgilmp.png',
    //   amount: 0,
    // },
  ];
  return (
    <>
      <ParallaxProvider>
        <div className="vertical">
          <div className={ParallaxBannerStyles.bannerContainer}>

            <ParallaxBanner
              className={ParallaxBannerStyles.bannerBg}
              layers={layers}
              style={{ height: '640px' }}
            >
              <div
                className={ParallaxBannerStyles.parallaxChildren}
              >
                <Container
                  maxWidth="md"
                  sx={{
                    zIndex: 1000,
                  }}
                >
                  <div className={classes.root}>
                    <Grid
                      container
                      spacing={3}
                    >
                      {/* <Grid item xs={12}>
                      <Paper className={classes.paper}>xs=12</Paper>
                    </Grid> */}
                      <Grid
                        item
                        // xs={12}
                        sm={8}
                        md={8}
                      >
                        <Box
                          sx={{ backgroundColor: 'rgba(0,0,50, 0)' }}
                          p={2}
                        >
                          <Typography
                            variant="h5"
                                      // component="h2"
                            className={classes.typography}
                          >
                            #
                            {' '}
                            Freshly certified 🎉
                            {' '}
                          </Typography>
                          <Typography
                            variant="h4"
                                      // component="h2"
                            mb={3}
                            className={classes.typography}
                          >
                            {'`<FullStackWebDeveloper/>`'}
                          </Typography>
                          <Typography
                            className={classes.typography}
                            // style={{ margin: '16px' }}
                            variant="subtitle1"
                            my={3}
                          >
                            {'>'}
                            {' '}
                            With a technical background in web & graphic design.
                            {' '}
                          </Typography>
                          <Typography
                            variant="body1"
                                      // component="h2"
                            className={classes.typography}
                          >
                            I_LOVE: [
                            Coding with a clear and practical style &#x1F47E;,
                            <Box
                              component="span"
                              pl="2em"
                              display="block"
                            >
                              Solving problems &#x1F680;,
                            </Box>
                            <Box
                              component="span"
                              pl="2em"
                              display="block"
                            >
                              Being outdoors &#x26F0;&#x200D;,
                            </Box>
                            <Box
                              component="span"
                              pl="2em"
                              display="block"
                            >
                              Hard rock &#x1F479;]
                            </Box>
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid
                        // backgroundColor="background.default"
                        item
                        // xs={12}
                        sm={4}
                        md={4}
                      >
                        <Box
                          sx={{ backgroundColor: 'rgba(0,0,50, 0.0)' }}
                          p={2}
                        >

                          <Typography
                            variant="h6"
                                    // component="h2"
                            className={classes.typography}
                          >
                            Hello world, I’m Fred
                            {'\u2009'}
                            🖐
                          </Typography>
                          <Typography className={classes.typography}>
                            {'>'}
                            {' '}
                            BASED IN MTL
                          </Typography>
                          <Typography className={classes.typography}>
                            {'>'}
                            {' '}
                            EN/FR BILINGUAL
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </div>
                </Container>
                <img
                  className="heroBanner"
                  src="https://res.cloudinary.com/hhdcknvdc/image/upload/v1623709331/landingPage/mountain-foregroundNme__xcbhjo.png"
                  // onClick={() => console.log('onClick')}
                  // aspectRatio={(16 / 9)}
                  // style={{ width: '100%', height: 'auto', marginTop: '-80%' }}
                  // disableSpinner
                  alt="me"
                  // sx={{
                  //   sm: {
                  //     objectFit: 'cover',
                  //     objectPosition: '80% top',
                  //     marginTop: '-80%',
                  //     height: '40%'
                  //   } }}
                />
              </div>
            </ParallaxBanner>

          </div>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default HomeHero;
