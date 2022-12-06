import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

import SynthesisPlayStopButtons from '@/display/controllers/SynthesisPlayStopButtons';
import SynthesisSpeakButton from '@/display/controllers/SynthesisSpeakButton';
import { CenteredFlexBox } from '@/utils/flex';

const SynthesisButtons = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <Grid container direction="row" height="100%">
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <SynthesisSpeakButton />
        </Grid>
        <Grid item xs={4}>
          <CenteredFlexBox>
            <SynthesisPlayStopButtons />
          </CenteredFlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SynthesisButtons;
