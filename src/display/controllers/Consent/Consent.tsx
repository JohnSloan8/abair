/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/display/utils/flex';

import consentForm from './consentForm.json';

interface ConsentProps {
  group: 'over 16' | 'under 16' | 'parent';
  title: string;
}

const Consent = ({ group = 'over 16', title }: ConsentProps) => {
  return (
    <Box>
      <Typography my={2} variant="h6" align="center">
        {title}
      </Typography>
      <Box p={2} sx={{ backgroundColor: 'background.paper' }}>
        {consentForm[group].map((c, i) => (
          <Box key={i} my={2}>
            <Grid container spacing={2}>
              <Grid item xs={8} sm={10} md={11}>
                <Typography variant="body1">{c.content}</Typography>
              </Grid>
              <Grid item xs={4} sm={2} md={1}>
                <CenteredFlexBox>
                  <Checkbox
                  // onChange={(e) => {
                  //   setConsent({ ...consent, e.target.value });
                  // }}
                  />
                </CenteredFlexBox>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Consent;
