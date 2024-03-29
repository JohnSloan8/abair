import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import RecognitionCorrection from '@/display/controllers/Recognition/RecognitionCorrection';
import RecognitionPlayStopButtons from '@/display/controllers/Recognition/RecognitionPlayStopButtons';
import RecognitionProgressBar from '@/display/controllers/Recognition/RecognitionProgressBar';
import RecognitionRecordStopButtons from '@/display/controllers/Recognition/RecognitionRecordStopButtons';
import { CenteredFlexBox } from '@/display/utils/flex';

interface RecognitionButtonsProps {
  showRecord?: boolean;
}

const RecognitionButtons = ({ showRecord = true }: RecognitionButtonsProps) => {
  return (
    <CenteredFlexBox sx={{ width: '100%', height: '100%', position: 'relative' }}>
      {showRecord && (
        <Box height={'3px'} width={'100%'} sx={{ position: 'absolute', top: 0 }}>
          <RecognitionProgressBar />
        </Box>
      )}
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <CenteredFlexBox>
            <RecognitionCorrection />
          </CenteredFlexBox>
        </Grid>
        <Grid item xs={4}>
          {showRecord && <RecognitionRecordStopButtons />}
        </Grid>
        <Grid item xs={4}>
          <CenteredFlexBox>
            <RecognitionPlayStopButtons />
          </CenteredFlexBox>
        </Grid>
      </Grid>
    </CenteredFlexBox>
  );
};

export default RecognitionButtons;
