import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/components/styled';
import AbRecognitionProgressBarCtrl from '@/sections/AbRecognitionProgressBarCtrl';
import AbRecognitionRecordStopButtonsCtrl from '@/sections/AbRecognitionRecordStopButtonsCtrl';
import AbRecognitionVisualisationCtrl from '@/sections/AbRecognitionVisualisationCtrl';
import AbTranscriptionsCtrl from '@/sections/AbTranscriptionsCtrl';
import AbTranscriptionsListCtrl from '@/sections/AbTranscriptionsListCtrl';

function SpeechRecognition() {
  const { t } = useTranslation();

  return (
    <HorizontallyCenteredFlexBox sx={{ backgroundColor: 'warning.wafer', minHeight: '100vh' }}>
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <Meta title={t('pageTitles.recognition')} />
        <AbInfoHeader title={t('pageTitles.recognition')} variant="front" />
        <CenteredFlexBox sx={{ width: '100%', position: 'relative' }}>
          <Box sx={{ position: 'relative' }}>
            <AbRecognitionVisualisationCtrl />
          </Box>
        </CenteredFlexBox>
        <CenteredFlexBox sx={{ position: 'relative', height: 70 }}>
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
