import StyleIcon from '@material-ui/icons/Style';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import CategoryIcon from '@material-ui/icons/Category';
import EqualizerIcon from '@material-ui/icons/Equalizer';
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

  const frontEndReferrals = [
    {
      color: '#455a64',
      initials: 'GT',
      name: 'HTML',
      value: 53032,
      technologies: '[Semantics, Forms & Validation, Accessibility]',
      startYear: 2013,
    },
    {
      name: 'CSS',
      technologies: '[Semantics, Forms &#x26; Validation, Accessibility]',
      startYear: 2011,
    }
  ];
  const BackEndReferrals = [
    {
      name: 'Internet',
      technologies: '[DNS, Hosting, Web Security]',
      startYear: 2020,
    },
    {
      name: 'Terminal',
      technologies: '[zsh, brew]',
      startYear: 2020,
    }
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          pb: 0,
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
                md={12}
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
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
                <Typography
                  color="brandColor.main"
                  // variant="h1"
                  variant="caption"
                  display="flex"
                  gap={1}
                >

                  Show&apos;s years experience since over professional career
                  {' '}
                  <EqualizerIcon fontSize="large" />
                </Typography>
              </Grid>

            </Grid>
          </Container>
        </Box>
        <Container
          maxWidth="lg"
          sx={{ py: 0 }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <SkillBranch
                title={skillsApi.FrontEnd.title}
                pictograms={[
                  <StyleIcon />,
                  <DevicesOtherIcon />,
                  <CategoryIcon />,
                  <AccessibilityIcon />,
                  <DonutSmallIcon />,
                  <Brightness4Icon />
                ]}
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
                element={<GroupedList2 referrals={frontEndReferrals} />}
              />
            </Grid>

            <Grid
              item
              md={4}
              xs={12}
            >
              <SkillBranch
                title={skillsApi.BackEnd.title}
                pictograms={[
                  <StyleIcon />,
                  <DevicesOtherIcon />,
                  <CategoryIcon />,
                  <AccessibilityIcon />,
                  <DonutSmallIcon />,
                  <Brightness4Icon />
                ]}
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
                element={<GroupedList2 referrals={BackEndReferrals} />}
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
        {/* <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="caption"
        >
          30% of our income goes into Whale Charity
        </Typography> */}
      </Box>
    </>
  );
};

export default HomeSkillTree;
