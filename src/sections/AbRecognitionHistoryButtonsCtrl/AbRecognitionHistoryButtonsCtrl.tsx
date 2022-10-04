import Grid from '@mui/material/Grid';

import { CenteredFlexBox } from '@/components/styled';
import AbRecognitionAudioPlayerCtrl from '@/sections/AbRecognitionAudioPlayerCtrl';
import AbRecognitionCorrectionCtrl from '@/sections/AbRecognitionCorrectionCtrl';

const AbRecognitionHistoryButtonsCtrl = () => {
  return (
    <CenteredFlexBox sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <CenteredFlexBox>
            <AbRecognitionCorrectionCtrl />
          </CenteredFlexBox>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <CenteredFlexBox>
            <AbRecognitionAudioPlayerCtrl />
          </CenteredFlexBox>
        </Grid>
      </Grid>
    </CenteredFlexBox>
  );
};

export default AbRecognitionHistoryButtonsCtrl;
