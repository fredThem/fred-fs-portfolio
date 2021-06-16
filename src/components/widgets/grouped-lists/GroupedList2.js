import propTypes from 'prop-types';
// import propTypes from 'prop-types';
// import { differenceInYears } from 'date-fns';

// import numeral from 'numeral';
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';

const now = new Date();
// const yearTotal = ()

const GroupedList2 = (props) => {
  const { referrals } = props;

  // console.log(
  //   now
  // );

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        // p: 3
      }}
    >
      <Container
        maxWidth="sm"
        gap={0}
        gutter={0}
      >

        <List disablePadding>
          {referrals.map((referral, i) => (
            <ListItem
              divider={i < referrals.length - 1}
              key={referral.name}
              px={0}
              disableGutters
            >

              <ListItemText
                primary={referral.name}
                primaryTypographyProps={{
                  color: 'textPrimary',
                  variant: 'subtitle1'
                }}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {now.getFullYear() - (new Date(referral.startYear))}
                {/* {numeral(referral.startYear).format('0,0')} */}
              </Typography>
            </ListItem>
          ))}
        </List>

      </Container>
    </Box>
  );
};

GroupedList2.propTypes = {
  // element: propTypes.string.isRequired,
  // description: propTypes.string.isRequired,
  // features: propTypes.array.isRequired,
  // image: propTypes.string.isRequired,
  // name: propTypes.string.isRequired,
  // popular: propTypes.bool,
  // price: propTypes.string.isRequired,
  // sx: propTypes.object
  // referrals: propTypes.string.isRequired,
  referrals: propTypes.object
};
export default GroupedList2;
