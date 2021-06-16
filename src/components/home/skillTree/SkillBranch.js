import { createTheme } from '@material-ui/core/styles';

import propTypes from 'prop-types';
import { Box, Divider, Typography, ThemeProvider } from '@material-ui/core';
// import CheckIcon from '../../icons/Check';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Code'
    ].join(','),
  },
});

const SkillBranch = (props) => {
  const { title, element, pictograms, sx, ...other } = props;
  // const Skill = skill;
  return (

    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ...sx
        }}
        mt={0}
        pt={0}
        {...other}
      >
        <Box
          // sx={{ p: 0 }}
          py={0}
          px={3}
        >
          <Box
            sx={{
              height: 52,
              width: 52,
              '& img': {
                height: 'auto',
                width: '100%'
              }
            }}
          />
          <Typography
            color="textPrimary"
            // sx={{ mt: 0 }}
            variant="h4"
            mt={0}
            pt={0}
            mb={1}
          >
            &#x3C;
            {title}
            /&#x3E;
            {/* debugger */}
          </Typography>
          {/* <img
              alt=""
              src={image}
            /> */}
          <Typography
            display="flex"
            gap={2}
            mb={2}
          >
            {pictograms}

          </Typography>
        </Box>
        <Divider />

        { }

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            py: 1
          }}
        >
          {element}
          {/* {skillApi.map((skill) => (
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                '& + &': {
                  mt: 2
                }
              }}
            >
              <Typography
                color="textPrimary"
                sx={{
                  fontWeight: 500,
                  ml: 2
                }}
                variant="body2"
              >
                {skill[0].name}
              </Typography>
            </Box>
          ))} */}
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

SkillBranch.propTypes = {
  title: propTypes.string.isRequired,
  element: propTypes.string.isRequired,
  pictograms: propTypes.array.isRequired,
  // features: propTypes.array.isRequired,
  // image: propTypes.string.isRequired,
  // name: propTypes.string.isRequired,
  // popular: propTypes.bool,
  // price: propTypes.string.isRequired,
  sx: propTypes.object
};

export default SkillBranch;
