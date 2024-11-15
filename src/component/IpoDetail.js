import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Download as DownloadIcon } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { fontWeight } from '@mui/system';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Custom connector with green color
const GreenConnector = styled(StepConnector)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    borderColor: '#4CAF50',
  },
}));

// Custom step icon
const GreenStepIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    color: '#4CAF50',
    fontSize: 28,
  },
}));

// Custom StepIcon component
const CustomStepIcon = (props) => {
  return (
    <GreenStepIcon>
      <CheckCircleIcon />
    </GreenStepIcon>
  );
};

// const ipoDetails = {
//   1: {
//     id: 3,
//     logo: 'https://i.imgur.com/lImrAGL.png',
//     name: 'OYO',
//     companyType: 'OYO Private Limited',
//     issueSize: '₹3,600 - 3,700 Cr.',
//     priceRange: '₹100 - 200',
//     minInvest: '₹50,000',
//     lotSize: '150 shares/lots',
//     issueDates: '12 Dec - 15 Dec 22',
//     listedOn: '15 Dec 22',
//     listedPrice: '₹150',
//     listingGains: '₹10 (10.0%)',
//   },
// };

const IpoDetail = ({ ipoData }) => {
  const { id } = useParams();
  // const ipo = ipoDetails[id];
  const ipo = ipoData.find(ipo => ipo.id === parseInt(id));
  const lastKeyName = Object.keys(ipo)[Object.keys(ipo).length - 1];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  console.log("ipo",ipo[lastKeyName]);

  const timelineSteps = [
    { label: 'Bidding starts', date: '12 Dec 2023' },
    { label: 'Bidding ends', date: '18 Dec 2023' },
    { label: 'Allotment finalization', date: '18 Dec 2023' },
    { label: 'Refund initiation', date: '18 Dec 2023' },
    { label: 'Demat transfer', date: '18 Dec 2023' },
    { label: 'Listing date', date: '21 Dec 2023' }
  ];

  if (!ipo) {
    return <Typography variant="h6">IPO not found</Typography>;
  }

  return (
    <Box p={3}>
      <Link to="/">Home</Link> {'>'} <span>Market watch</span>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Grid display="flex" flexDirection="column" justifyContent="space-between">
          <Grid container display="flex" justifyContent="space-between" alignItems="center" spacing={2}>
            <Grid item display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center">
              <Grid item>
                <Link to="/"><ChevronRightIcon /></Link>
              </Grid>
              <Grid item>
                <Avatar src={ipo.logo} alt={`${ipo.name} logo`} sx={{ width: 60, height: 60 }} />
              </Grid>
              <Grid item>
                <Typography variant="h4">{ipo.name}</Typography>
                <Typography color="textSecondary">{ipo.companyType}</Typography>
              </Grid>
            </Grid>
            <Grid item xs display="flex" justifyContent="flex-end" alignItems="center">
              <DownloadIcon />
              <Button
                variant="contained"
                color="primary"
                fullWidth
              >
                Apply now
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Paper elevation={4} sx={{ p: 3, mt: 3 }}>
          <Typography variant="h4" gutterBottom>
            IPO Details
          </Typography>

          <Grid container justifyContent="space-between" spacing={2}>
            {/* First Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ '& > *:not(:last-child)': { mb: 3 } }}>
                <Box>
                  <Typography variant="body2">Issue size</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {ipo.issueSize}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">Issue dates</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {ipo.issueDates}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Second Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ '& > *:not(:last-child)': { mb: 3 } }}>
                <Box>
                  <Typography variant="body2">Price range</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {ipo.priceRange}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">Listed on</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {ipo.listedOn}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Third Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ '& > *:not(:last-child)': { mb: 3 } }}>
                <Box>
                  <Typography variant="body2">Minimum amount</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {ipo.minInvest}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">Listed price</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {ipo.listedPrice}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Fourth Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ '& > *:not(:last-child)': { mb: 3 } }}>
                <Box>
                  <Typography variant="body2">Lot size</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {ipo.lotSize}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="error">Listing gains</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }} color="error">
                    {ipo.listingGains}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={4} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h6" gutterBottom>IPO Timeline</Typography>
          <Box sx={{ width: '100%', mt: 2 }}>
            <Stepper
              activeStep={6}
              orientation={isMobile ? 'vertical' : 'horizontal'}
              alternativeLabel
              connector={<GreenConnector />}
            >
              {timelineSteps.map((step, index) => (
                <Step key={step.label} completed={true}>
                  <StepLabel
                    StepIconComponent={CustomStepIcon}
                    sx={{
                      '& .MuiStepLabel-label': {
                        mt: 1,
                        ...(isMobile && {
                          mt: 2,
                        }),
                      },
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {step.label}
                    </Typography>
                    <Typography variant="body1">{step.date}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Paper>

        <Paper elevation={4} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h6" gutterBottom>
            About the company {lastKeyName}
          </Typography>
          <Box sx={{ color: 'text.secondary' }}>
            <Typography variant="body1">
              {ipo[lastKeyName]}
            </Typography>

            <Typography variant="body1">
              {ipo[lastKeyName]}
            </Typography>
          </Box>
        </Paper>
      </Paper>


    </Box>
  );
};

export default IpoDetail;
