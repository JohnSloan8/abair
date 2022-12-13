import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AbInfoHeader, AbInteractionContainer } from 'abair-components';

import GenderChoices from '@/display/controllers/GenderChoices';
import Map from '@/display/controllers/Map';
import SynthesisButtons from '@/display/controllers/Synthesis/SynthesisButtons';
import SynthesisHistoryItems from '@/display/controllers/Synthesis/SynthesisHistoryItems';
import SynthesisModel from '@/display/controllers/Synthesis/SynthesisModel';
import SynthesisPitch from '@/display/controllers/Synthesis/SynthesisPitch';
import SynthesisSpeed from '@/display/controllers/Synthesis/SynthesisSpeed';
import SynthesisTextField from '@/display/controllers/Synthesis/SynthesisTextField';
import SynthesisVoiceButtons from '@/display/controllers/Synthesis/SynthesisVoiceButtons';
import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { useBreakpointSize } from '@/store/viewDimensions';

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
