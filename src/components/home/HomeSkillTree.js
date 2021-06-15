import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { SkillBranch } from './skillTree';
import gtm from '../../lib/gtm';
// import GiPlasticDuck from 'giPlasticDuck'
// import { FaBeer } from 'react-icons/fa';
import { GiPlasticDuck } from 'react-icons/gi';

const HomeSkillTree = () => {
  const theme = useTheme();
  const [, setIsLoading] = useState(true);
  const [, setImage] = useState('');

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `/static/pricing/pricing_${theme.palette.mode}.svg`
      );
      const blob = await response.blob();

      setImage(URL.createObjectURL(blob));
      setIsLoading(false);
    })();
  }, [theme.palette.mode]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          pb: 6,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.paper',
            py: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              alignItems="center"
              spacing={2}
              flexWrap="nowrap"
              borderBottom={1}
              pb={2}
            >
              <Grid
                item
                md={7}
                xs={12}
              >
                <Typography
                  color="brandColor.main"
                  variant="code h2"
                >
                  <GiPlasticDuck />
                  {' '}
                  Skill stack
                </Typography>
              </Grid>
              {/* <Grid
                item
                md={5}
                sx={{
                  display: {
                    md: 'block',
                    xs: 'none'
                  }
                }}
              /> */}
            </Grid>
          </Container>
        </Box>
        <Container
          maxWidth="lg"
          sx={{ py: 6 }}
        >
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <SkillBranch
                title="frontend"
                // currency="$"
                // description="To familiarize yourself with our tools."
                // features={['Create contracts', 'Chat support', 'Email alerts']}
                // image="/static/pricing/plan1.svg"
                // name="&#x3C;FrontEnd/&#x3E;"
                // price="0"
                sx={{
                  height: '100%',
                  maxWidth: 460,
                  mx: 'auto',
                }}
              />
            </Grid>

          </Grid>
        </Container>
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="caption"
        >
          30% of our income goes into Whale Charity
        </Typography>
      </Box>
    </>
  );
};

export default HomeSkillTree;
