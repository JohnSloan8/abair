import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AbInfoHeader } from 'abair-components';

import RecognitionConsentPopup from '@/display/controllers/RecognitionConsentPopup';
import RecognitionProgressBar from '@/display/controllers/RecognitionProgressBar';
import RecognitionRecordStopButtons from '@/display/controllers/RecognitionRecordStopButtons';
import RecognitionWaveVisual from '@/display/controllers/RecognitionWaveVisual';
import Transcriptions from '@/display/controllers/Transcriptions';
import TranscriptionsList from '@/display/controllers/TranscriptionsList';
import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { useVoiceRecording } from '@/store/recognition';

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
            <RecognitionWaveVisual />
          ) : (
            // </Box>
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
            <RecognitionRecordStopButtons />
          </Box>
        </CenteredFlexBox>
        <CenteredFlexBox>
          <Box height={'3px'} width={'97.5%'} sx={{ position: 'relative' }}>
            <RecognitionProgressBar />
          </Box>
        </CenteredFlexBox>

        <CenteredFlexBox>
          <Grid container direction="column">
            <TranscriptionsList />
          </Grid>
        </CenteredFlexBox>
      </Box>

      <Transcriptions />
      <RecognitionConsentPopup />
    </HorizontallyCenteredFlexBox>
  );
}
export default SpeechRecognition;
