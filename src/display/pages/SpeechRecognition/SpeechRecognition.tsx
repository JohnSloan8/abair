import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AbInfoHeader } from 'abair-components';

import RecognitionConsentPopup from '@/display/controllers/Recognition/RecognitionConsentPopup';
import RecognitionProgressBar from '@/display/controllers/Recognition/RecognitionProgressBar';
import RecognitionRecordStopButtons from '@/display/controllers/Recognition/RecognitionRecordStopButtons';
import RecognitionWaveVisual from '@/display/controllers/Recognition/RecognitionWaveVisual';
import Transcriptions from '@/display/controllers/Transcriptions';
import TranscriptionsList from '@/display/controllers/TranscriptionsList';
import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { useBreakpointSize } from '@/store/viewDimensions';

function SpeechRecognition() {
  const { t } = useTranslation();
  const { breakpointSize } = useBreakpointSize();

  return (
    <HorizontallyCenteredFlexBox sx={{ backgroundColor: 'warning.wafer', minHeight: '100vh' }}>
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <Meta title={t('pageTitles.recognition')} />
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pageTitles.recognition')} />
        </Box>
        <CenteredFlexBox sx={{ width: '100%', height: { sm: 110, xs: 80 }, position: 'relative' }}>
          <Box
            sx={{
              position: 'relative',
              backgroundColor: 'white',
              height: '100%',
              width: '400px',
            }}
            pt={{ sm: 3 }}
          >
            <CenteredFlexBox height={'100%'} width={400} sx={{ position: 'absolute', zIndex: 2 }}>
              <Box>
                <RecognitionWaveVisual width={400} height={breakpointSize === 'xs' ? 75 : 110} />
              </Box>
            </CenteredFlexBox>
            <Box
              borderBottom={2}
              sx={{
                position: 'absolute',
                backgroundColor: 'white',
                height: { sm: '54%', xs: '46%' },
                width: '100%',
                top: 0,
                zIndex: 1,
              }}
            ></Box>
          </Box>
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
