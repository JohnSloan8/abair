import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
import AbRecognitionMediaCtrl from '@/sections/AbRecognitionMediaCtrl';
import AbRecognitionProgressBarCtrl from '@/sections/AbRecognitionProgressBarCtrl';
import AbRecognitionRecordStopButtonsCtrl from '@/sections/AbRecognitionRecordStopButtonsCtrl';
import AbTranscriptionsCtrl from '@/sections/AbTranscriptionsCtrl';
import AbTranscriptionsListCtrl from '@/sections/AbTranscriptionsListCtrl';

function SpeechRecognition() {
  return (
    <FullSizeBox sx={{ backgroundColor: 'warning.wafer' }}>
      <CenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'sm' }}>
          <Meta title="speech recognition" />
          <AbInfoHeader title="Speech Recognition" />

          <CenteredFlexBox>
            <AbRecognitionRecordStopButtonsCtrl />
          </CenteredFlexBox>

          <CenteredFlexBox sx={{ position: 'relative' }}>
            <Box height={'3px'} width={'90%'} sx={{ position: 'absolute', top: 0 }}>
              <AbRecognitionProgressBarCtrl />
            </Box>
          </CenteredFlexBox>

          <CenteredFlexBox>
            <Grid container direction="column">
              <AbTranscriptionsListCtrl />
            </Grid>
          </CenteredFlexBox>
          <AbRecognitionMediaCtrl />
        </Box>
      </CenteredFlexBox>
      <AbTranscriptionsCtrl />
    </FullSizeBox>
  );
}
export default SpeechRecognition;
