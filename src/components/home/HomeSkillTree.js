import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// import { GroupedList2 } from '../widgets/grouped-lists';
import GroupedList2 from '../widgets/grouped-lists/GroupedList2';

// eslint-disable-next-line no-unused-vars
import { SkillBranch } from './skillTree';
import gtm from '../../lib/gtm';
// import GiPlasticDuck from 'giPlasticDuck'
// import { FaBeer } from 'react-icons/fa';
import { GiPlasticDuck } from 'react-icons/gi';

const skillsApi = { FrontEnd: { title: 'Frontend', }, BackEnd: { title: 'BackEnd' }, Design: { title: 'Design' } };

console.log(skillsApi);
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

  const testReferrals = [
    {
      color: '#455a64',
      initials: 'GT',
      name: 'GitHub',
      value: 53032
    }
    // {
    //   color: '#00bcd4',
    //   initials: 'TW',
    //   name: 'Twitter',
    //   value: 39551
    // },
    // {
    //   color: '#3949ab',
    //   initials: 'HN',
    //   name: 'Hacker News',
    //   value: 23150
    // },
    // {
    //   color: '#f44336',
    //   initials: 'SO',
    //   name: 'Stack Overflow',
    //   value: 14093
    // },
    // {
    //   color: '#e65100',
    //   initials: 'RD',
    //   name: 'Reddit.com',
    //   value: 7251
    // },
    // {
    //   color: '#263238',
    //   initials: 'DE',
    //   name: 'Dev.to',
    //   value: 5694
    // },
    // {
    //   color: '#0d47a1',
    //   initials: 'FB',
    //   name: 'Facebook',
    //   value: 3643
    // },
    // {
    //   color: '#263238',
    //   initials: 'MD',
    //   name: 'Medium',
    //   value: 1654
    // }
  ];
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
              pb={1}
            >
              <Grid
                item
                md={7}
                xs={12}
              >
                <Typography
                  color="brandColor.main"
                  variant="h1"
                  display="flex"
                  gap={1}
                >
                  <GiPlasticDuck />
                  {' '}
                  Skill Stack
                </Typography>
              </Grid>

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
                title={skillsApi.FrontEnd.title}
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
                element={<GroupedList2 referrals={testReferrals} />}
              />
            </Grid>

            <Grid
              item
              md={4}
              xs={12}
            >
              <SkillBranch
                title={skillsApi.BackEnd.title}
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

            <Grid
              item
              md={4}
              xs={12}
            >
              <SkillBranch
                title={skillsApi.Design.title}
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
