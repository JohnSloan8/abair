import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AbInfoHeader } from 'abair-components';

import AbSynthesisModelCtrl from '@/sections/AbSynthesisModelCtrl';
import AbSynthesisPitchCtrl from '@/sections/AbSynthesisPitchCtrl';
import AbSynthesisSpeedCtrl from '@/sections/AbSynthesisSpeedCtrl';
import AbSynthesisVoiceButtonsCtrl from '@/sections/AbSynthesisVoiceButtonsCtrl';
import SynthesisButtons from '@/sections/SynthesisButtons';
import AbSynthesisCtrl from '@/state-control/AbSynthesisCtrl';
import GenderChoices from '@/state-control/GenderChoices';
import Map from '@/state-control/Map';
import SynthesisHistoryItems from '@/state-control/SynthesisHistoryItems';
import Meta from '@/utils/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/utils/flex';

function SpeechSynthesis() {
  const { t } = useTranslation();
  return (
    <HorizontallyCenteredFlexBox
      pb={8}
      sx={{ backgroundColor: 'secondary.wafer', minHeight: '100vh' }}
    >
      <Box sx={{ maxWidth: 'sm', width: '100%' }}>
        <Meta title={t('pageTitles.synthesis')} />
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pageTitles.synthesis')} />
        </Box>
        <CenteredFlexBox m={{ sm: 2, xs: 0 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} my={-2}>
              <CenteredFlexBox>
                <Box>
                  <Map />
                </Box>
              </CenteredFlexBox>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box minHeight={'69px'}>
                <AbSynthesisVoiceButtonsCtrl />
              </Box>
              <GenderChoices />
              <Box width={'90%'}>
                <Box minHeight={{ sm: '62px', xs: '52px' }}>
                  <AbSynthesisSpeedCtrl />
                </Box>
                <Box minHeight={{ sm: '62px', xs: '52px' }}>
                  <AbSynthesisPitchCtrl />
                </Box>
              </Box>
              <Box minHeight={'77px'}>
                <AbSynthesisModelCtrl />
              </Box>
            </Grid>
          </Grid>
        </CenteredFlexBox>

        <CenteredFlexBox>
          <AbSynthesisCtrl>
            <SynthesisButtons />
          </AbSynthesisCtrl>
        </CenteredFlexBox>
        <CenteredFlexBox>
          <SynthesisHistoryItems />
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default SpeechSynthesis;
