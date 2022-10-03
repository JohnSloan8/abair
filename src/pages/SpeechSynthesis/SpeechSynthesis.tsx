import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
import AbAudioPlayerCtrl from '@/sections/AbAudioPlayerCtrl';
import AbGenderChoicesCtrl from '@/sections/AbGenderChoicesCtrl';
import AbMapCtrl from '@/sections/AbMapCtrl';
import AbSynthesisCtrl from '@/sections/AbSynthesisCtrl';
import AbSynthesisPitchCtrl from '@/sections/AbSynthesisPitchCtrl';
import AbSynthesisSpeedCtrl from '@/sections/AbSynthesisSpeedCtrl';
import AbSynthesisVoiceButtonsCtrl from '@/sections/AbSynthesisVoiceButtonsCtrl';

function SpeechSynthesis() {
  return (
    <FullSizeBox sx={{ backgroundColor: 'secondary.wafer' }}>
      <CenteredFlexBox>
        <Box sx={{ maxWidth: 'sm', width: '100%' }}>
          <Meta title="speech synthesis" />
          <AbInfoHeader title="Speech Synthesis" />
          <CenteredFlexBox m={2}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
                <AbMapCtrl />
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
                <AbSynthesisSpeedCtrl />
                <AbSynthesisPitchCtrl />
              </Grid>
            </Grid>
          </CenteredFlexBox>
          <AbSynthesisVoiceButtonsCtrl />
          <CenteredFlexBox>
            <AbSynthesisCtrl />
          </CenteredFlexBox>
          <CenteredFlexBox p={4}>
            <AbAudioPlayerCtrl variant="synthesis" />
          </CenteredFlexBox>
        </Box>
      </CenteredFlexBox>
    </FullSizeBox>
  );
}

export default SpeechSynthesis;
