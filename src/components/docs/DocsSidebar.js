import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Drawer } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from '../Logo';
import NavSection from '../NavSection';

const sections = [
  {
    title: 'Absolunet Frontend Test',
    items: [
      {
        title: '1 : Écrire le HTML sémantique pour le contenu texte suivant',
        path: '/docs/entrevue/test_01'
      },
      {
        title: '2 : Écrire les styles',
        path: '/docs/entrevue/test_02'
      },
      {
        title: '3 : Améliorer ce code SCSS',
        path: '/docs/entrevue/test_03'
      },
      {
        title: '4 : Lequel est le meilleur sémantiquement et pourquoi?',
        path: '/docs/entrevue/test_04'
      },
      {
        title: '5 : Écrire un script qui change le texte A en B',
        path: '/docs/entrevue/test_05'
      },
      {
        title: '6 : Écrire un script qui change la couleur du texte du <p> selon le titre cliqué',
        path: '/docs/entrevue/test_06'
      },
      {
        title: '7 : Améliorer ce code JS',
        path: '/docs/entrevue/test_07'
      },
      {
        title: '8 : BINGO 🐶',
        path: '/docs/entrevue/test_08'
      }
    ]
  },
  // {
  //   title: 'Routing',
  //   items: [
  //     {
  //       title: 'Implementation',
  //       path: '/docs/routing/implementation'
  //     },
  //     {
  //       title: 'Code Splitting',
  //       path: '/docs/routing/code-splitting'
  //     }
  //   ]
  // },
  // {
  //   title: 'Authentication',
  //   items: [
  //     {
  //       title: 'Amplify',
  //       path: '/docs/authentication/amplify'
  //     },
  //     {
  //       title: 'Auth0',
  //       path: '/docs/authentication/auth0'
  //     },
  //     {
  //       title: 'Firebase',
  //       path: '/docs/authentication/firebase'
  //     },
  //     {
  //       title: 'JWT',
  //       path: '/docs/authentication/jwt'
  //     }
  //   ]
  // },
  // {
  //   title: 'Guards',
  //   items: [
  //     {
  //       title: 'Guest Guard',
  //       path: '/docs/guards/guest-guard'
  //     },
  //     {
  //       title: 'Auth Guard',
  //       path: '/docs/guards/auth-guard'
  //     },
  //     {
  //       title: 'Role Based Guard',
  //       path: '/docs/guards/role-based-guard'
  //     }
  //   ]
  // },
  // {
  //   title: 'Analytics',
  //   items: [
  //     {
  //       title: 'Introduction',
  //       path: '/docs/analytics/introduction'
  //     },
  //     {
  //       title: 'Configuration',
  //       path: '/docs/analytics/configuration'
  //     },
  //     {
  //       title: 'Event Tracking',
  //       path: '/docs/analytics/event-tracking'
  //     }
  //   ]
  // },
  // {
  //   title: 'Support',
  //   items: [
  //     {
  //       title: 'Changelog',
  //       path: '/docs/support/changelog'
  //     },
  //     {
  //       title: 'Contact',
  //       path: '/docs/support/contact'
  //     },
  //     {
  //       title: 'Further Support',
  //       path: '/docs/support/further-support'
  //     }
  //   ]
  // }
];

const DocsSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        sx={{
          display: {
            lg: 'none'
          },
          p: 2
        }}
      >
        <RouterLink to="#">
          <Logo />
        </RouterLink>
      </Box>
      <Box p={2}>
        {sections.map((section) => (
          <NavSection
            key={section.title}
            pathname={location.pathname}
            sx={{
              '& + &': {
                mt: 3
              }
            }}
            {...section}
          />
        ))}
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        variant="permanent"
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !important',
            width: 256
          }
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={openMobile}
      variant="temporary"
      PaperProps={{
        sx: {
          backgroundColor: 'background.default',
          width: 256
        }
      }}
    >
      {content}
    </Drawer>
  );
};

DocsSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default DocsSidebar;
