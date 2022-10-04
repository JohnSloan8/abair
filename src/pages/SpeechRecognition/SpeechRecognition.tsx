import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
import AbAudioPlayerCtrl from '@/sections/AbAudioPlayerCtrl';
import AbRecognitionButtonsCtrl from '@/sections/AbRecognitionButtonsCtrl';
import AbRecognitionMediaCtrl from '@/sections/AbRecognitionMediaCtrl';

function SpeechRecognition() {
  return (
    <FullSizeBox sx={{ backgroundColor: 'warning.wafer' }}>
      <CenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'sm' }}>
          <Meta title="speech recognition" />
          <AbInfoHeader title="Speech Recognition" />
          <CenteredFlexBox sx={{ boxShadow: 5, borderRadius: 2 }}>
            <AbRecognitionButtonsCtrl />
          </CenteredFlexBox>
          <AbAudioPlayerCtrl variant="recognition" />
          <AbRecognitionMediaCtrl />
        </Box>
      </CenteredFlexBox>
    </FullSizeBox>
  );
}
export default SpeechRecognition;
