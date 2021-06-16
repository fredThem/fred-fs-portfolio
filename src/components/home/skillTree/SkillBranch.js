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
  const { title, element, sx, ...other } = props;
  // const Skill = skill;
  return (

    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ...sx
        }}
        {...other}
      >
        <Box sx={{ p: 3 }}>
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
            sx={{ mt: 2 }}
            variant="h4"
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
        </Box>
        <Divider />

        { }

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            p: 1
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
  // description: propTypes.string.isRequired,
  // features: propTypes.array.isRequired,
  // image: propTypes.string.isRequired,
  // name: propTypes.string.isRequired,
  // popular: propTypes.bool,
  // price: propTypes.string.isRequired,
  sx: propTypes.object
};

export default SkillBranch;
