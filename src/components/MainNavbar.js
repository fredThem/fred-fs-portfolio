import { AppBar, Box, /* Button, */ /* Chip, */ Divider, Link, Toolbar, ThemeProvider } from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import MenuIcon from '../icons/Menu';
import Logo from './Logo';
// import { createTheme } from '@material-ui/core/styles';

import { createCustomTheme } from '../theme/index';
// import { createTheme } from '@material-ui/core/styles';

const MainNavbar = (/* props */) => {
  // const { onSidebarMobileOpen } = props;
  const themeDark = createCustomTheme({
    theme: 'DARK'
  });
  return (
  // eslint-disable-next-line implicit-arrow-linebreak
    <ThemeProvider theme={themeDark}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.secondary',
        }}
      >
        <Toolbar sx={{ minHeight: 64 }}>
          {/* <IconButton
            color="inherit"
            onClick={onSidebarMobileOpen}
            sx={{
              display: {
                md: 'none',
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton> */}
          <RouterLink
            to="/"
            style={{
              display: 'flex',
            }}
          >
            <Logo
              sx={{
                display: {
                  md: 'inline',
                // xs: 'none',
                },
                mt: '3px',
                height: 40,
                width: 'auto',
              }}
            />
          </RouterLink>
          <Box sx={{ flexGrow: 1, }} />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Link
              color="textSecondary"
              variant="body1"
              underline="none"
              target="_blank"
              component="a"
              href="https://github.com/fredThem/CV/raw/main/CV_FredericDesmarais_FullStackDev_ENG.pdf"
              download
              sx={{
              // maxHeight: 20,
                height: '100%',
                // ml: 1,
                mr: 3,
                lineHeight: '1 rem',
                '&:hover': {
                  // backgroundColor: 'common.white',
                  color: 'brandColor.accent'
                }
              }}
            >
              <Box
                component="span"
              // display="inline"
                display={{ xs: 'none', sm: 'none', md: 'inline' }}
              >
                Download my
                {' '}
              </Box>
              {' '}
              CV
            </Link>

            <Link
              color="textSecondary"
            // component={RouterLink}
            // to="https://github.com/fredThem"
              underline="none"
              target="_blank"
              component="a"
              href="https://github.com/fredThem"
            // size="small"
              variant="body1"
              sx={{
                alignItems: 'center',
                display: 'flex',
                '&:hover': {
                  // backgroundColor: 'common.white',
                  color: 'brandColor.accent'
                }
              }}
            >
              <GitHubIcon />
            </Link>
            <Divider
              orientation="vertical"
              sx={{
                height: 32,
                mx: 2,
              }}
            />
            <Link
              color="textSecondary"
              underline="none"
              target="_blank"
              component="a"
              href="https://www.linkedin.com/in/fredericDesmarais/"
              variant="body1"
              sx={{
                alignItems: 'center',
                display: 'flex',
                '&:hover': {
                  // backgroundColor: 'common.white',
                  color: 'brandColor.accent'
                }
              }}
            >
              <LinkedInIcon />
            </Link>
            {/* <Button
            color="primary"
            component="a"
            href="https://material-ui.com/store/items/devias-kit-pro"
            size="small"
            target="_blank"
            variant="contained"
          >
            Get the kit
          </Button> */}
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
    </ThemeProvider>
  );
};
// MainNavbar.propTypes = {
//   onSidebarMobileOpen: PropTypes.func
// };

export default MainNavbar;
