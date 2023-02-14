/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// import { Calculate } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AbInteractionContainer } from 'abair-components';
import { AbButton } from 'abair-components';

import { basePath } from '@/config';
// import { headerHeight } from '@/config';
import SynthesisButtons from '@/display/controllers/Synthesis/SynthesisButtons';
import SynthesisTextField from '@/display/controllers/Synthesis/SynthesisTextField';
import SynthesisVoiceSelection from '@/display/controllers/Synthesis/SynthesisVoiceSelection';
import { CenteredFlexBox } from '@/display/utils/flex';
import { useSynthesisPitch, useSynthesisSpeed } from '@/store/synthesis';
import { useBreakpointSize } from '@/store/viewDimensions';

const Synthesis = () => {
  const { breakpointSize } = useBreakpointSize();
  const { setSynthesisSpeed } = useSynthesisSpeed();
  const { setSynthesisPitch } = useSynthesisPitch();
  const navigate = useNavigate();

  const { t } = useTranslation();
  useEffect(() => {
    setSynthesisSpeed(1);
    setSynthesisPitch(1);
  }, []);

  return (
    <Box>
      <Typography variant={'h5'} align="center" sx={{ color: 'secondary.dark' }}>
        {t('pages.home.speak')}
      </Typography>

      <Typography
        p={1}
        sx={{ typography: { sm: 'body1', xs: 'body2' } }}
        color={'secondary.dark'}
        align="center"
      >
        {t('pages.home.speakInstructions')}
      </Typography>

      <CenteredFlexBox>
        <SynthesisVoiceSelection />
      </CenteredFlexBox>
      <Box width={'100%'} sx={{ position: 'absolute', bottom: 0 }}>
        <CenteredFlexBox>
          <Box maxWidth={500} width={'100%'} minWidth={250}>
            <AbInteractionContainer
              textbox={<SynthesisTextField rows={breakpointSize === 'xs' ? 3 : 4} />}
              buttons={<SynthesisButtons />}
              variation="synthesis"
            />
          </Box>
        </CenteredFlexBox>
        <CenteredFlexBox p={2}>
          <AbButton
            label={'More synthesis options'}
            onClick={() => navigate(`${basePath}speech-synthesis`)}
            selected={false}
            color={'secondary'}
          />
        </CenteredFlexBox>
      </Box>
    </Box>
  );
};

export default Synthesis;
