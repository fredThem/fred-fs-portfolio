import { AppBar, Box, /* Button, */ /* Chip, */ Divider, Link, Toolbar } from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import MenuIcon from '../icons/Menu';
import Logo from './Logo';

const MainNavbar = (/* props */) => (
  // const { onSidebarMobileOpen } = props;

  // eslint-disable-next-line implicit-arrow-linebreak
  <AppBar
    elevation={0}
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
            mr: 2,
            lineHeight: '1 rem'
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
        {/* <Chip
          color="primary"
          label="NEW"
          size="small"
          sx={{
            maxHeight: 20,
            ml: 1,
            mr: 2,
          }}
        /> */}
        {/* <Divider
          orientation="vertical"
          sx={{
            height: 32,
            mx: 2,
          }}
        /> */}
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
            display: 'flex'
          }}
        >
          <GitHubIcon
            color="primary"
            fontSize="large"
          />
        </Link>
        <Divider
          orientation="vertical"
          sx={{
            height: 32,
            mx: 1,
          }}
        />
        <Link
          color="textSecondary"
          component={RouterLink}
          to="/docs"
          underline="none"
          variant="body1"
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <LinkedInIcon
            color="primary"
            fontSize="large"
          />
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
);
// MainNavbar.propTypes = {
//   onSidebarMobileOpen: PropTypes.func
// };

export default MainNavbar;
