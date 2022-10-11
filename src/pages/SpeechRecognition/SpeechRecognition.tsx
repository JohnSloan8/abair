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
          <Box
            my={4}
            mx={3}
            borderRadius={2}
            boxShadow={3}
            sx={{ backgroundColor: 'warning.light' }}
          >
            <CenteredFlexBox sx={{ position: 'relative', height: 50 }}>
              <AbRecognitionRecordStopButtonsCtrl />
              <Box height={'3px'} width={'100%'} sx={{ position: 'absolute', bottom: 0 }}>
                <AbRecognitionProgressBarCtrl />
              </Box>
            </CenteredFlexBox>

            <CenteredFlexBox sx={{ position: 'relative' }}></CenteredFlexBox>
          </Box>
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
