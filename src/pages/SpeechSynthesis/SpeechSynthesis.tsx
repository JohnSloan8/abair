import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AbInfoHeader } from 'abair-components';

import AbGenderChoicesCtrl from '@/sections/AbGenderChoicesCtrl';
import AbMapCtrl from '@/sections/AbMapCtrl';
import AbSynthesisAudiosCtrl from '@/sections/AbSynthesisAudiosCtrl';
import AbSynthesisButtonsCtrl from '@/sections/AbSynthesisButtonsCtrl';
import AbSynthesisCtrl from '@/sections/AbSynthesisCtrl';
import AbSynthesisModelCtrl from '@/sections/AbSynthesisModelCtrl';
import AbSynthesisPitchCtrl from '@/sections/AbSynthesisPitchCtrl';
import AbSynthesisSpeedCtrl from '@/sections/AbSynthesisSpeedCtrl';
import AbSynthesisVoiceButtonsCtrl from '@/sections/AbSynthesisVoiceButtonsCtrl';
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
                  <AbMapCtrl />
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
              <AbGenderChoicesCtrl />
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
            <AbSynthesisButtonsCtrl />
          </AbSynthesisCtrl>
        </CenteredFlexBox>
        <CenteredFlexBox>
          <AbSynthesisAudiosCtrl />
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default SpeechSynthesis;
