import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AbInfoHeader, AbInteractionContainer } from 'abair-components';

import SynthesisButtons from '@/sections/SynthesisButtons';
import GenderChoices from '@/state-control/GenderChoices';
import Map from '@/state-control/Map';
import SynthesisHistoryItems from '@/state-control/SynthesisHistoryItems';
import SynthesisModel from '@/state-control/SynthesisModel';
import SynthesisPitch from '@/state-control/SynthesisPitch';
import SynthesisSpeed from '@/state-control/SynthesisSpeed';
import SynthesisTextField from '@/state-control/SynthesisTextField';
import SynthesisVoiceButtons from '@/state-control/SynthesisVoiceButtons';
import { useBreakpointSize } from '@/store/viewDimensions';
import Meta from '@/utils/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/utils/flex';

function SpeechSynthesis() {
  const { t } = useTranslation();
  const { breakpointSize } = useBreakpointSize();

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
                <SynthesisVoiceButtons />
              </Box>
              <GenderChoices />
              <Box width={'90%'}>
                <Box minHeight={{ sm: '62px', xs: '52px' }}>
                  <SynthesisSpeed />
                </Box>
                <Box minHeight={{ sm: '62px', xs: '52px' }}>
                  <SynthesisPitch />
                </Box>
              </Box>
              <Box minHeight={'77px'}>
                <SynthesisModel />
              </Box>
            </Grid>
          </Grid>
        </CenteredFlexBox>

        <CenteredFlexBox>
          <AbInteractionContainer
            textbox={<SynthesisTextField rows={breakpointSize === 'xs' ? 3 : 4} />}
            buttons={<SynthesisButtons />}
            color="secondary.light"
          />
        </CenteredFlexBox>
        <CenteredFlexBox>
          <SynthesisHistoryItems />
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default SpeechSynthesis;
