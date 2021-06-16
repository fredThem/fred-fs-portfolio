import { FaCodeBranch } from 'react-icons/fa';
import { createCustomTheme } from '../../theme/index';

// import { useState, useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  // Skeleton,
  Typography,
  ThemeProvider,
  Link
} from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';
// import ExternalLinkIcon from '../../icons/ExternalLink';

const HomeRoles = (props) => {
  // const theme = useTheme();
  // const [isLoading, setIsLoading] = useState(true);
  // const [images, setImages] = useState([]);
  const themeDark = createCustomTheme({
    theme: 'DARK'
  });
  // useEffect(() => {
  //   (async () => {
  //     const responses = await Promise.all([
  //       fetch(`/static/home/developers_${theme.palette.mode}.png`),
  //       fetch(`/static/home/designers_${theme.palette.mode}.png`)
  //     ]);

  //     // const blobs = await Promise.all([
  //     //   responses[0].blob(),
  //     //   responses[1].blob()
  //     // ]);

  //     // setImages(blobs.map((blob) => URL.createObjectURL(blob)));
  //     setIsLoading(false);
  //   })();
  // }, [theme.palette.mode]);

  return (
    <ThemeProvider theme={themeDark}>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          pt: 15
        }}
        {...props}
      >
        <Container maxWidth="md">
          <Typography
            align="center"
            color="textPrimary"
            sx={{ pb: 6 }}
            variant="h1"
          >
            <FaCodeBranch />
            {' '}
            Noteworthy projects
          </Typography>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <Card
                sx={{
                  alignItems: 'center',
                  backgroundColor: 'background.default',
                  display: 'flex',
                  flexDirection: 'column',
                  pt: 3,
                  px: 3
                }}
                variant="outlined"
              >
                <Typography
                  color="textPrimary"
                  variant="h1"
                >
                  Outrek
                </Typography>
                <Typography
                  align="center"
                  color="textSecondary"
                  sx={{ py: 2 }}
                  variant="h4"
                >
                  Organize Your Next Trip Outdoors With Outrek&apos;s Collaborative smart Packing List.
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  href="https://outrek.herokuapp.com/"
                  target="_blank"
                >
                  Overplan and go with the flow
                </Button>
                {/* https://whimsical.com/outrek-vision-13zpu2jn9TTB7LqSdChmGi */}
                <Link
                  href="https://whimsical.com/outrek-vision-13zpu2jn9TTB7LqSdChmGi/"
                  sx={{ color: 'primary.contrastText', pt: 1, m: 0 }}
                  variant="caption"
                >
                  Vision board
                </Link>
                <Box
                  sx={{
                    width: {
                      // sm: '60%',
                      // md: 460,
                      xs: '90%'
                    }
                  }}
                >

                  <img
                    alt="outrek"
                    src="https://res.cloudinary.com/hhdcknvdc/image/upload/v1623845465/landingPage/outrek_trips_il8lbi.png"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      paddingTop: '30px'
                    }}
                  />
                  <img
                    alt="outrek"
                    src="https://res.cloudinary.com/hhdcknvdc/image/upload/v1623845465/landingPage/outrek_tripOne_ff55bi.png"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      paddingTop: '30px'
                    }}
                  />

                </Box>
              </Card>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <Card
                sx={{
                  alignItems: 'center',
                  backgroundColor: 'background.default',
                  display: 'flex',
                  flexDirection: 'column',
                  pt: 3,
                  px: 3
                }}
                variant="outlined"
              >
                <Typography
                  color="textPrimary"
                  variant="h1"
                >
                  Rentrek
                </Typography>
                <Typography
                  align="center"
                  color="textSecondary"
                  sx={{ py: 2 }}
                  variant="h4"
                >
                  Rent outdoors gear from nearby community.
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  href="https://rentrek-scionet.herokuapp.com/"
                  target="_blank"
                >
                  Adventure awaits
                </Button>
                <Box
                  sx={{
                    width: {
                      // sm: '60%',
                      // md: 460,
                      xs: '90%'
                    }
                  }}
                >

                  <img
                    alt="outrek"
                    src="https://res.cloudinary.com/hhdcknvdc/image/upload/v1623846894/landingPage/Screen_Shot_2021-06-16_at_3.18.43_AM_rjkkp5.png"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      paddingTop: '30px'
                    }}
                  />

                </Box>
              </Card>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <Card
                sx={{
                  alignItems: 'center',
                  backgroundColor: 'background.default',
                  display: 'flex',
                  flexDirection: 'column',
                  pt: 3,
                  px: 3
                }}
                variant="outlined"
              >
                <Typography
                  color="textPrimary"
                  variant="h1"
                >
                  Web design portfolio
                </Typography>
                <Typography
                  align="center"
                  color="textSecondary"
                  sx={{ py: 2 }}
                  variant="h4"
                />

                <Button
                  variant="contained"
                  color="primary"
                  href="https://www.behance.net/gallery/105239413/Sites-and-mobile-apps-design"
                  target="_blank"
                >
                  Check it out
                </Button>
                <Box
                  sx={{
                    width: {
                      // sm: '60%',
                      // md: 460,
                      xs: '90%'
                    }
                  }}
                >

                  <img
                    alt="design portfolio"
                    src="https://res.cloudinary.com/hhdcknvdc/image/upload/v1623848034/landingPage/a308d8105239413.5f7498aeeb64c_1_inh4gj.png"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      paddingTop: '30px'
                    }}
                  />
                  <img
                    alt="design portfolio"
                    src="https://res.cloudinary.com/hhdcknvdc/image/upload/v1623848651/landingPage/cdcae6105239413.5f7498aeebbd5_upcmau.png"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      paddingTop: '30px'
                    }}
                  />
                  <img
                    alt="design portfolio"
                    src="https://res.cloudinary.com/hhdcknvdc/image/upload/v1623848949/landingPage/95988035692071.570051c0c4020_jow0fb.jpg"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      paddingTop: '30px'
                    }}
                  />
                  {/* https://res.cloudinary.com/hhdcknvdc/image/upload/v1623848949/landingPage/95988035692071.570051c0c4020_jow0fb.jpg */}
                </Box>
              </Card>
            </Grid>

          </Grid>
          <Divider sx={{ pt: 15 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HomeRoles;
