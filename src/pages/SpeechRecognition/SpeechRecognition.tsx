import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AbInfoHeader } from 'abair-components';

import AbRecognitionProgressBarCtrl from '@/sections/AbRecognitionProgressBarCtrl';
import AbRecognitionRecordStopButtonsCtrl from '@/sections/AbRecognitionRecordStopButtonsCtrl';
import AbRecognitionVisualisationCtrl from '@/sections/AbRecognitionVisualisationCtrl';
import AbTranscriptionsCtrl from '@/sections/AbTranscriptionsCtrl';
import AbTranscriptionsListCtrl from '@/sections/AbTranscriptionsListCtrl';
import { useVoiceRecording } from '@/store/recognition';
import Meta from '@/utils/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/utils/flex';

function SpeechRecognition() {
  const { t } = useTranslation();
  const { voiceRecording } = useVoiceRecording();

  return (
    <HorizontallyCenteredFlexBox sx={{ backgroundColor: 'warning.wafer', minHeight: '100vh' }}>
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <Meta title={t('pageTitles.recognition')} />
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pageTitles.recognition')} />
        </Box>
        <CenteredFlexBox sx={{ width: '100%', height: { sm: 100, xs: 75 }, position: 'relative' }}>
          {voiceRecording ? (
            <Box sx={{ position: 'relative', height: '100%' }}>
              <AbRecognitionVisualisationCtrl />
            </Box>
          ) : (
            <Box
              sx={{
                position: 'relative',
                backgroundColor: 'white',
                height: '100%',
                width: '484px',
              }}
            >
              <Box
                borderBottom={2}
                sx={{
                  position: 'relative',
                  backgroundColor: 'white',
                  height: '51%',
                  width: '482px',
                }}
              ></Box>
            </Box>
          )}
        </CenteredFlexBox>
        <CenteredFlexBox mt={1} sx={{ position: 'relative', height: 70 }}>
          <Box
            my={4}
            mx={3}
            borderRadius={2}
            boxShadow={3}
            width={52}
            height={52}
            sx={{ backgroundColor: 'warning.light' }}
          >
            <AbRecognitionRecordStopButtonsCtrl />
          </Box>
        </CenteredFlexBox>
        <CenteredFlexBox>
          <Box height={'3px'} width={'97.5%'} sx={{ position: 'relative' }}>
            <AbRecognitionProgressBarCtrl />
          </Box>
        </CenteredFlexBox>

        <CenteredFlexBox>
          <Grid container direction="column">
            <AbTranscriptionsListCtrl />
          </Grid>
        </CenteredFlexBox>
      </Box>

      <AbTranscriptionsCtrl />
    </HorizontallyCenteredFlexBox>
  );
}
export default SpeechRecognition;
