import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import PolicyIcon from '@material-ui/icons/Policy';
import ExtensionIcon from '@material-ui/icons/Extension';
// import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import BugReportIcon from '@material-ui/icons/BugReport';
import ForumIcon from '@material-ui/icons/Forum';
import MemoryIcon from '@material-ui/icons/Memory';
import StorageIcon from '@material-ui/icons/Storage';
// import SecurityIcon from '@material-ui/icons/Security';
import StyleIcon from '@material-ui/icons/Style';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import CategoryIcon from '@material-ui/icons/Category';

// import EqualizerIcon from '@material-ui/icons/Equalizer';
import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, LinearProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// import { GroupedList2 } from '../widgets/grouped-lists';
import GroupedList2 from '../widgets/grouped-lists/GroupedList2';

// eslint-disable-next-line no-unused-vars
import { SkillBranch } from './skillTree';
import gtm from '../../lib/gtm';
// import GiPlasticDuck from 'giPlasticDuck'
import { GiPlasticDuck } from 'react-icons/gi';

const skillsApi = {
  FrontEnd: { title: 'Frontend' },
  BackEnd: { title: 'BackEnd' },
  Design: { title: 'Design' },
};

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
      name: 'HTML',
      technologies:
        '[Semantics, Forms & Validation, Accessibility, Best practices]',
      startYear: 2021 - 9,
    },
    {
      name: 'CSS',
      technologies: '[Layouts, Responsive design and Media Queries]',
      startYear: 2021 - 9,
    },
    {
      name: 'CSS Frameworks',
      technologies: '[Bootstrap, Material UI, Tailwind CSS]',
      startYear: 2021 - 5,
    },

    {
      name: 'Javascript',
      technologies: '[DOM manipulation, Fetch API / Ajax, Es6+]',
      startYear: 2021 - 3,
    },
    {
      name: 'Version Control Systems',
      technologies: '[Git, GitHub, Git-Kraken]',
      startYear: 2021 - 3,
    },
    {
      name: 'Mailing',
      technologies: '[Acoustic automated campaign, External content retrieval, Dynamic rules, Task running : Grunt(scss inlining, content build, image hosting)]',
      startYear: 2021 - 3,
    },
    {
      name: 'CSS Preprocessors',
      technologies: '[Sass, PostCSS]',
      startYear: 2021 - 3,
    },
    {
      name: 'Framework',
      technologies: '[React.js, Ruby on Rails]',
      startYear: 2021 - 2,
    },
    {
      name: 'Modern CSS',
      technologies: '[CSS Modules, Styled Components, Emotion]',
      startYear: 2021 - 2,
    },
    {
      name: 'Build Tools',
      technologies: '[npm scripts, Linters and Formatters(Prettier, Eslint), Task Runners(Grunt), Module Bundlers(Webpack)]',
      startYear: 2021 - 2,
    },
    {
      name: 'Test Driven Developement',
      technologies: '[Jest, react-testing-library, Storybook.js, Mocha]',
      startYear: 2021 - 2,
    },
    {
      name: 'Type Checkers',
      technologies: '[Flow, TypeScript]',
      startYear: 2021 - 1,
    },
    {
      name: 'GraphQL',
      technologies: '[Apollo]',
      startYear: 2021 - 1,
    },
    {
      name: 'SSG',
      technologies: '[Create React App, GatsbyJS]',
      startYear: 2021 - 1,
    },
    // {GraphQL [Apollo]}
  ];

  const BackEndReferrals = [
    {
      name: 'Internet',
      technologies: '[DNS, Hosting, Web Security, HTTPS, Content Security Policy]',
      startYear: 2021 - 2,
    },
    {
      name: 'Languages',
      technologies: '[Ruby, JavaScript]',
      startYear: 2021 - 2,
    },
    {
      name: 'Terminal',
      technologies: '[zsh, brew]',
      startYear: 2021 - 2,
    },
    {
      name: 'Hosting and storage',
      technologies: '[Heroku, Firebase, AWS]',
      startYear: 2021 - 2,
    },
    {
      name: 'Web app frameworks',
      technologies: '[Node.js(Express), Ruby on Rails]',
      startYear: 2021 - 2,
    },
    {
      name: 'Relational Databases',
      technologies: '[PostgreSQL]',
      startYear: 2021 - 2,
    },
    {
      name: 'NoSQL Databases',
      technologies: '[MongoDB]',
      startYear: 2021 - 1,
    },
    {
      name: 'Object???relational mapping',
      technologies: '',
      startYear: 2021 - 2,
    },
    {
      name: 'MVC design patterns',
      technologies: '',
      startYear: 2021 - 2,
    },
    {
      name: 'CI / CD',
      technologies:
        '[Storybook (Chromatic PR), Heroku pipeline, Gitflow, Git-Slack, GitLens, GitKraken, CodeStream]',
      startYear: 2020,
    },
    // {
    //   name: 'Caching',
    //   technologies: '[CDN]',
    //   startYear: 2020,
    // },
    {
      name: 'Search Engines',
      technologies: '[Elasticsearch]',
      startYear: 2020,
    },
    {
      name: 'API',
      technologies: '',
      startYear: 2020,
    },
    {
      name: 'Design and Development Principles',
      technologies: '[TDD, DRY]',
      startYear: 2020,
    },
    {
      name: 'Progressive Web Apps',
      technologies:
        '[DevTools, Performance, Metric, Storage, Location, WebSockets, Geocoding]',
      startYear: 2020,
    },
  ];

  const DesignReferrals = [
    { name: 'Agile Methodology', technologies: '', startYear: 2020 - 8 },
    { name: 'Assets optimization', technologies: '', startYear: 2020 - 8 },
    { name: 'Design systems', technologies: '', startYear: 2020 - 8 },
    { name: 'Campaign Design', technologies: '', startYear: 2020 - 8 },
    { name: 'Motion Design', technologies: '', startYear: 2020 - 8 },
    { name: 'Typography', technologies: '', startYear: 2020 - 8 },
    { name: 'Illustration', technologies: '', startYear: 2020 - 8 },
    { name: 'Print', technologies: '', startYear: 2020 - 8 },
    { name: 'Photoshop', technologies: '', startYear: 2020 - 8 },
    { name: 'Illustrator', technologies: '', startYear: 2020 - 8 },
    { name: 'Wire-framing', technologies: '', startYear: 2020 - 5 },
    { name: 'Functional mockups', technologies: '', startYear: 2020 - 5 },
    { name: 'User Experience', technologies: '', startYear: 2020 - 5 },
    {
      name: 'Branding, Advertising, Marketing',
      technologies: '',
      startYear: 2020 - 5,
    },
    { name: 'After Effect', technologies: '', startYear: 2020 - 5 },
    { name: 'Figma, Sketch', technologies: '', startYear: 2020 - 5 },
    { name: 'Video editing', technologies: '', startYear: 2020 - 3 },
    { name: 'Photography', technologies: '', startYear: 2020 - 3 },
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
            pb: 2,
            position: 'sticky',
            top: 0,
            zIndex: 1000,
          }}
          // elevation={2}
        >
          <Container
            maxWidth="lg"
            sx={{
              backgroundColor: 'background.paper',
              // py: 6,

              // position: 'sticky',
              // top: 0,
            }}
          >
            <Grid
              container
              alignItems="center"
              spacing={2}
              flexWrap="nowrap"
              // borderBottom={1}
              pb={1}
              pt="60px"
            >
              <Grid
                item
                md={12}
                xs={12}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  // color="brandColor.main"
                  variant="h1"
                  // pb={1}
                  display="flex"
                  gap={1}
                >
                  <GiPlasticDuck />
                  {' '}
                  Skill Stack
                </Typography>
                <Box>

                  <Typography
                    // color="brandColor.main"
                    // variant="h1"
                    variant="body1"
                    display="flex"
                    gap={1}
                    pb={1}
                    textAlign="center"
                    fontFamily="Fira Code"
                  >
                    {/* <FormatAlignLeftIcon fontSize="small" /> */}
                    * Years experience / professional career
                    &#123;&nbsp;Est.2014&nbsp;&#125;
                    {' '}
                  </Typography>
                  <LinearProgress
                    // pt={3}/
                    sx={{ width: '100%', opacity: '40%' }}
                  />
                </Box>

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
                  <Brightness4Icon />,
                ]}
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
                  <StorageIcon />,
                  <MemoryIcon />,
                  <ForumIcon />,
                  <BugReportIcon />,
                  <TrackChangesIcon />,
                  <PolicyIcon />,
                  <GroupAddIcon />

                ]}
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
                title={skillsApi.Design.title}
                pictograms={[
                  <LocalPrintshopIcon />,
                  <ColorLensIcon />,
                  <FormatShapesIcon />,
                  <MovieFilterIcon />,
                  <ExtensionIcon />,
                ]}
                sx={{
                  height: '100%',
                  maxWidth: 460,
                  mx: 'auto',
                }}
                element={<GroupedList2 referrals={DesignReferrals} />}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomeSkillTree;
