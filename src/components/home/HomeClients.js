import { Box, Card, Container, Grid, Link, Typography } from '@material-ui/core';

const HomeClients = (props) => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      py: 15
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Typography
        align="center"
        color="textPrimary"
        sx={{ pb: 6 }}
        variant="h3"
      >
        Noteworthy projects
      </Typography>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Card
            sx={{
              backgroundColor: 'primary.main',
              height: 'auto',
              px: 2,
              py: 10,
              position: 'relative'
            }}
          >
            <Typography
              sx={{ color: 'primary.contrastText' }}
              variant="h5"
            >
              Outrek
            </Typography>
            <Typography
              sx={{
                color: 'primary.contrastText',
                opacity: 0.56,
                pb: 2
              }}
              variant="body2"
            >
              Organize Your Next Trip Outdoors With

            </Typography>
            <Link
              href="https://outrek.herokuapp.com/"
              sx={{ color: 'primary.contrastText' }}
              variant="body2"
            >
              Outrek&apos;s Collaborative Packing List
            </Link>
            <Box
              sx={{
                height: '100%',
                p: 2,
                position: 'absolute',
                right: 0,
                top: 0,
                '& img': {
                  // height: '100%',
                  maxWidth: '100%',
                  objectFit: 'fit'
                }
              }}
            >
              <img
                width="100%"
                // height="auto"
                // sx={{ objectFit: 'cover' }}
                alt="Rocket"
                loading="lazy"
                src="/static/home/outrek.png"
              />
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Card
            sx={{
              backgroundColor: 'info.main',
              height: '100%',
              px: 2,
              py: 10,
              position: 'relative'
            }}
          >
            <Typography
              sx={{ color: 'primary.contrastText' }}
              variant="h5"
            >
              See live preview
            </Typography>
            <Typography
              sx={{
                color: 'primary.contrastText',
                opacity: 0.56,
                pb: 2
              }}
              variant="body2"
            >
              Browse through numerous screens
            </Typography>
            <Link
              href="https://rentrek-scionet.herokuapp.com/"
              sx={{ color: 'primary.contrastText' }}
              variant="body2"
            >
              Outrek&apos;s Collaborative Packing List
            </Link>
            <Box
              sx={{
                height: '100%',
                p: 2,
                position: 'absolute',
                right: 0,
                top: 0,
                '& img': {
                  // height: '100%',
                  maxWidth: '100%',
                  objectFit: 'fit'
                }
              }}
            >
              <img
                width="100%"
                // height="auto"
                // sx={{ objectFit: 'cover' }}
                alt="Rocket"
                loading="lazy"
                src="/static/home/rentrek.png"
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HomeClients;
