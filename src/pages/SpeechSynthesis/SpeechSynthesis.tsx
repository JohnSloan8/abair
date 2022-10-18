import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
import AbGenderChoicesCtrl from '@/sections/AbGenderChoicesCtrl';
import AbMapCtrl from '@/sections/AbMapCtrl';
import AbSynthesisButtonsCtrl from '@/sections/AbSynthesisButtonsCtrl';
import AbSynthesisCtrl from '@/sections/AbSynthesisCtrl';
import AbSynthesisModelCtrl from '@/sections/AbSynthesisModelCtrl';
import AbSynthesisPitchCtrl from '@/sections/AbSynthesisPitchCtrl';
import AbSynthesisSpeedCtrl from '@/sections/AbSynthesisSpeedCtrl';
import AbSynthesisVoiceButtonsCtrl from '@/sections/AbSynthesisVoiceButtonsCtrl';

function SpeechSynthesis() {
  return (
    <FullSizeBox sx={{ backgroundColor: 'secondary.wafer' }}>
      <CenteredFlexBox>
        <Box sx={{ maxWidth: 'sm', width: '100%' }}>
          <Meta title="speech synthesis" />
          <AbInfoHeader title="Speech Synthesis" variant="front" />
          <CenteredFlexBox m={{ sm: 2, xs: 0 }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
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
                <AbGenderChoicesCtrl />
                <Box height={'48px'}>
                  <AbSynthesisVoiceButtonsCtrl />
                </Box>
                <Box width={'90%'}>
                  <AbSynthesisSpeedCtrl />
                  <AbSynthesisPitchCtrl />
                </Box>
                <Box height={'54px'}>
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
        </Box>
      </CenteredFlexBox>
    </FullSizeBox>
  );
}

export default SpeechSynthesis;
