import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { CenteredFlexBox } from '@/components/styled';
import AbRecognitionAudioPlayerCtrl from '@/sections/AbRecognitionAudioPlayerCtrl';
import AbRecognitionCorrectionCtrl from '@/sections/AbRecognitionCorrectionCtrl';
import AbRecognitionProgressBarCtrl from '@/sections/AbRecognitionProgressBarCtrl';
import AbRecognitionRecordStopButtonsCtrl from '@/sections/AbRecognitionRecordStopButtonsCtrl';

interface AbRecognitionButtonsCtrlProps {
  showRecord: boolean;
}

const AbRecognitionButtonsCtrl = ({ showRecord = true }: AbRecognitionButtonsCtrlProps) => {
  return (
    <CenteredFlexBox sx={{ width: '100%', height: '100%', position: 'relative' }}>
      {showRecord && (
        <Box height={'3px'} width={'100%'} sx={{ position: 'absolute', top: 0 }}>
          <AbRecognitionProgressBarCtrl />
        </Box>
      )}
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <CenteredFlexBox>
            <AbRecognitionCorrectionCtrl />
          </CenteredFlexBox>
        </Grid>
        <Grid item xs={4}>
          {showRecord && <AbRecognitionRecordStopButtonsCtrl />}
        </Grid>
        <Grid item xs={4}>
          <CenteredFlexBox>
            <AbRecognitionAudioPlayerCtrl />
          </CenteredFlexBox>
        </Grid>
      </Grid>
    </CenteredFlexBox>
  );
};

export default AbRecognitionButtonsCtrl;
