/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AbInfoHeader } from 'abair-components';
import { AbInteractionContainer } from 'abair-components';
import { gsap } from 'gsap';

import RecognitionButtons from '@/display/controllers/Recognition/RecognitionButtons';
import RecognitionConsentPopup from '@/display/controllers/Recognition/RecognitionConsentPopup';
import RecognitionImage from '@/display/controllers/Recognition/RecognitionImage';
import RecognitionTextField from '@/display/controllers/Recognition/RecognitionTextField';
import RecognitionWaveVisual from '@/display/controllers/Recognition/RecognitionWaveVisual';
import SynthesisButtons from '@/display/controllers/Synthesis/SynthesisButtons';
import SynthesisTextField from '@/display/controllers/Synthesis/SynthesisTextField';
import SynthesisVoiceSelection from '@/display/controllers/Synthesis/SynthesisVoiceSelection';
import Tabs from '@/display/controllers/Tabs';
import Transcriptions from '@/display/controllers/Transcriptions';
import { CenteredFlexBox } from '@/display/utils/flex';
import { useSynthesisPitch, useSynthesisSpeed } from '@/store/synthesis';
import { useFrontPageTabs } from '@/store/tabs';
import { useBreakpointSize } from '@/store/viewDimensions';

const Main = () => {
  const { frontPageTabs } = useFrontPageTabs();
  const { breakpointSize } = useBreakpointSize();
  const { setSynthesisSpeed } = useSynthesisSpeed();
  const { setSynthesisPitch } = useSynthesisPitch();
  const mainSelectionBox = useRef(null);
  const mainControlBox = useRef(null);
  const instructions = useRef(null);
  const inputBoxTl = useRef(gsap.timeline());
  const { t } = useTranslation();
  useEffect(() => {
    setSynthesisSpeed(1);
    setSynthesisPitch(1);
    inputBoxTl.current && inputBoxTl.current.kill();
    inputBoxTl.current = gsap.timeline().fromTo(
      mainSelectionBox.current,
      { opacity: '0%' },
      {
        opacity: '100%',

        ease: 'none',
        duration: 1,
      },
    );
    inputBoxTl.current = gsap.timeline().fromTo(
      mainControlBox.current,
      { opacity: '0%', y: 50 },
      {
        opacity: '100%',
        y: 0,
        ease: 'none',
        duration: 0.5,
      },
      '+=0.25',
    );
    inputBoxTl.current = gsap.timeline().fromTo(
      instructions.current,
      { opacity: '0%' },
      {
        opacity: '100%',
        ease: 'none',
        duration: 1,
      },
      '+=1',
    );
  }, [frontPageTabs]);

  return (
    <Box
      height={'100%'}
      sx={{ backgroundColor: frontPageTabs === 0 ? 'secondary.wafer' : 'warning.wafer' }}
    >
      <CenteredFlexBox height={{ sm: '84px', xs: '64px' }}>
        <AbInfoHeader title={t('infoHeader.home.main.title')} />
      </CenteredFlexBox>
      <CenteredFlexBox height={{ sm: '48px', xs: '48px' }} mb={1}>
        <Tabs />
      </CenteredFlexBox>

      <CenteredFlexBox ref={mainSelectionBox}>
        {frontPageTabs === 0 ? <SynthesisVoiceSelection /> : <RecognitionImage />}
      </CenteredFlexBox>

      <Box sx={{ width: '100%', position: 'absolute', zIndex: 2, bottom: { sm: 55, xs: 50 } }}>
        <CenteredFlexBox ref={mainControlBox}>
          <Box width={'100%'} maxWidth={550} minWidth={250}>
            {frontPageTabs === 0 ? (
              <AbInteractionContainer
                textbox={<SynthesisTextField rows={breakpointSize === 'xs' ? 3 : 4} />}
                buttons={<SynthesisButtons />}
                variation="synthesis"
              />
            ) : (
              <AbInteractionContainer
                textbox={<RecognitionTextField rows={breakpointSize === 'xs' ? 3 : 4} />}
                visualisation={
                  <CenteredFlexBox
                    height={'100%'}
                    width={'100%'}
                    sx={{ position: 'relative', zIndex: 2 }}
                  >
                    <Box px={2} sx={{ position: 'absolute', top: { xs: 6, sm: 10 } }}>
                      <RecognitionWaveVisual
                        width={breakpointSize === 'xs' ? 296 : 384}
                        height={breakpointSize === 'xs' ? 80 : 90}
                      />
                    </Box>
                  </CenteredFlexBox>
                }
                buttons={<RecognitionButtons />}
                variation="recognition"
              />
            )}
          </Box>
        </CenteredFlexBox>
      </Box>
      <Box
        width="100%"
        height={breakpointSize === 'xs' ? '150px' : '180px'}
        sx={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: frontPageTabs === 0 ? 'secondary.dark' : 'warning.dark',
          color: 'background.paper',
          zIndex: 1,
        }}
      >
        <Box pb={{ xs: 1, sm: 2 }} width={'100%'} sx={{ position: 'absolute', bottom: 0 }}>
          <CenteredFlexBox>
            {frontPageTabs === 0 ? (
              <Typography
                px={1}
                sx={{ typography: { sm: 'body1', xs: 'body2' } }}
                align="center"
                color="default"
                ref={instructions}
              >
                {t('pages.home.speakInstructions')}
              </Typography>
            ) : (
              <Typography
                px={1}
                sx={{ typography: { sm: 'body1', xs: 'body2' } }}
                align="center"
                color="default"
                ref={instructions}
              >
                {t('pages.home.listenInstructions')}
              </Typography>
            )}
          </CenteredFlexBox>
        </Box>

        <Transcriptions />
      </Box>
      <RecognitionConsentPopup />
    </Box>
  );
};

export default Main;
