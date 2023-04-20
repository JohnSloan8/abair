/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// import { Calculate } from '@mui/icons-material';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AbInteractionContainer } from 'abair-components';
import { AbButton } from 'abair-components';

import { basePath } from '@/config';
import RecognitionButtons from '@/display/controllers/Recognition/RecognitionButtons';
import RecognitionImage from '@/display/controllers/Recognition/RecognitionImage';
import RecognitionTempConsentPopup from '@/display/controllers/Recognition/RecognitionTempConsentPopup';
import RecognitionTextField from '@/display/controllers/Recognition/RecognitionTextField';
import RecognitionWaveVisual from '@/display/controllers/Recognition/RecognitionWaveVisual';
import Transcriptions from '@/display/controllers/Transcriptions';
import { CenteredFlexBox } from '@/display/utils/flex';
import { useBreakpointSize } from '@/store/viewDimensions';

const Recognition = () => {
  const { breakpointSize } = useBreakpointSize();

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box pt={4}>
      <Typography variant={'h5'} align="center" sx={{ color: 'warning.dark' }}>
        {t('pages.home.listen')}
      </Typography>

      <Typography
        p={1}
        sx={{ typography: { sm: 'body1', xs: 'body2' } }}
        color={'warning.dark'}
        align="center"
        height={50}
      >
        {t('pages.home.listenInstructions')}
      </Typography>
      <CenteredFlexBox>
        <RecognitionImage />
      </CenteredFlexBox>
      <CenteredFlexBox>
        <Box width={'100%'} maxWidth={500} minWidth={350}>
          <AbInteractionContainer
            textbox={<RecognitionTextField rows={breakpointSize === 'xs' ? 3 : 4} />}
            visualisation={
              <CenteredFlexBox
                height={'100%'}
                width={'100%'}
                sx={{ position: 'relative', zIndex: 2 }}
              >
                <Box px={2} sx={{ position: 'absolute', top: { sm: 6, md: 10 } }}>
                  <RecognitionWaveVisual
                    width={breakpointSize === 'xs' ? 256 : 256}
                    height={breakpointSize === 'xs' ? 80 : 90}
                  />
                </Box>
              </CenteredFlexBox>
            }
            buttons={<RecognitionButtons />}
            variation="recognition"
          />
        </Box>
      </CenteredFlexBox>

      <Transcriptions />

      <RecognitionTempConsentPopup />
      <CenteredFlexBox p={4}>
        <AbButton
          label={'advanced recognition options'}
          onClick={() => navigate(`${basePath}speech-recognition`)}
          selected={false}
          color={'warning'}
        />
      </CenteredFlexBox>
    </Box>
  );
};

export default Recognition;
