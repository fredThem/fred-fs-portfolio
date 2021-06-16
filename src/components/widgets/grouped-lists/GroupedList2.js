// import Chart from 'react-apexcharts';
import propTypes from 'prop-types';
// import propTypes from 'prop-types';
// import { differenceInYears } from 'date-fns';
import LinearProgress from '@material-ui/core/LinearProgress';

// import numeral from 'numeral';

import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grow
} from '@material-ui/core';
// import ProgressLine from '../../home/ProgressLine';

// console.log(totalYearsOfExperience);
// const experience(percentage) =

const GroupedList2 = (props) => {
  const { referrals } = props;
  const now = new Date();
  const debutYear = 2012;
  const totalYearsOfExperience = now.getFullYear() - debutYear;
  console.log(totalYearsOfExperience);
  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  }

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
          {referrals.map((referral) => (
            <ListItem
              // divider={i < referrals.length - 1}
              key={referral.name}
              px={0}
              disableGutters
              divider={false}
              display="flex"
              sx={{
                flexDirection: 'column',
                justifyContent: 'end',
                alignItems: 'stretch'
              }}

            >

              <ListItemText
                primary={referral.name}
                primaryTypographyProps={{
                  color: 'textPrimary',
                  variant: 'h5'
                }}
              />

              <Typography
                color="textSecondary"
                variant="body2"
                mb={1}
                // display="block"
              >
                {/* {console.log(percentage(((now.getFullYear() - (new Date(referral.startYear))) * 100), totalYearsOfExperience))} */}
                {referral.technologies}
                {/* {now.getFullYear() - (new Date(referral.startYear))} */}
                {/* {numeral(referral.startYear).format('0,0')} */}
              </Typography>
              {/* <ProgressLine
                label="One visual percentage - changed background"
                backgroundColor="lightblue"
                visualParts={[
                  {
                    percentage: '23%',
                    color: 'indianred'
                  }
                ]}
              /> */}
              <Grow
                timeout={{
                  appear: 500,
                  enter: 300,
                  //  exit: 500,
                }}
                in
              >
                <LinearProgress
                // variant="determinate"
                  // value={ percentage(totalYearsOfExperience,((10 - (new Date(referral.startYear)))}
                  value={percentage(now.getFullYear() - (new Date(referral.startYear)), totalYearsOfExperience)}
                  variant="determinate"
                // color="red"
                // value="80"
                // width="100%"
                  sx={{ width: '100%' }}
                />

              </Grow>
              {/* <Chart
                // height="350"
                options={chartOptions}
                series={chartSeries}
                type="bar"
              /> */}
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
