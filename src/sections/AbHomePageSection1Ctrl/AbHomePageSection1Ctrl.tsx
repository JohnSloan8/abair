import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { gsap } from 'gsap';

import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
import AbRecognitionButtonsCtrl from '@/sections/AbRecognitionButtonsCtrl';
import AbRecognitionCtrl from '@/sections/AbRecognitionCtrl';
import AbRecognitionImageCtrl from '@/sections/AbRecognitionImageCtrl';
import AbRecognitionMediaCtrl from '@/sections/AbRecognitionMediaCtrl';
import AbSynthesisCtrl from '@/sections/AbSynthesisCtrl';
import AbSynthesisVoiceSelectionCtrl from '@/sections/AbSynthesisVoiceSelectionCtrl';
import AbTabsCtrl from '@/sections/AbTabsCtrl';
import { useFrontPageTabs } from '@/store/tabs';
import { useViewHeight } from '@/store/viewDimensions';

const AbHomePageSection1Ctrl = () => {
  const { viewHeight } = useViewHeight();
  const { frontPageTabs } = useFrontPageTabs();

  const mainSelectionBox = useRef(null);
  const mainControlBox = useRef(null);
  const mainAudioBox = useRef(null);
  const inputBoxTl = useRef(gsap.timeline());

  useEffect(() => {
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
      mainAudioBox.current,
      { opacity: '0%' },
      {
        opacity: '100%',
        ease: 'none',
        duration: 0.75,
      },
      '+=1',
    );
  }, [frontPageTabs]);

  useEffect(() => {
    console.log('viewHeight', viewHeight);
  }, [viewHeight]);

  return (
    <FullSizeBox
      sx={{
        width: '100%',
        position: 'relative',
        backgroundColor: frontPageTabs === 0 ? 'secondary.wafer' : 'warning.wafer',
      }}
    >
      <AbInfoHeader title="State-of-the-art Speech and Language Technologies for Irish" />
      <CenteredFlexBox mt={{ sm: 0, xs: -2 }}>
        <AbTabsCtrl variation="frontpage" />
      </CenteredFlexBox>

      <CenteredFlexBox ref={mainSelectionBox} height={'calc(100vh - 64px - 360px)'} width={'100%'}>
        {frontPageTabs === 0 ? <AbSynthesisVoiceSelectionCtrl /> : <AbRecognitionImageCtrl />}
      </CenteredFlexBox>

      <Box sx={{ width: '100%', position: 'absolute', zIndex: 2, bottom: { sm: '8%', xs: '6%' } }}>
        <CenteredFlexBox ref={mainControlBox}>
          {frontPageTabs === 0 ? (
            <AbSynthesisCtrl />
          ) : (
            <AbRecognitionCtrl>
              <AbRecognitionButtonsCtrl />
            </AbRecognitionCtrl>
          )}
        </CenteredFlexBox>
      </Box>
      <Box
        width="100%"
        height="18%"
        sx={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: frontPageTabs === 0 ? 'secondary.dark' : 'warning.dark',
          color: 'background.paper',
          zIndex: 1,
        }}
      >
        <Box
          ref={mainAudioBox}
          pb={{ xs: 1, sm: 2 }}
          width={'100%'}
          sx={{ position: 'absolute', bottom: 0 }}
        >
          <CenteredFlexBox>
            {frontPageTabs === 0 ? (
              <Typography
                px={1}
                sx={{ typography: { sm: 'body1', xs: 'body2' } }}
                align="center"
                color="default"
              >
                Dialect {'&'} Gender &nbsp;{'>'}&nbsp; Type &nbsp;{'>'}&nbsp; Synthesise
              </Typography>
            ) : (
              <Typography
                px={1}
                sx={{ typography: { sm: 'body1', xs: 'body2' } }}
                align="center"
                color="default"
              >
                Quiet space &nbsp;{'>'}&nbsp; Tap Microphone &nbsp;{'>'}&nbsp; Speak clearly
              </Typography>
            )}
          </CenteredFlexBox>
        </Box>
        <AbRecognitionMediaCtrl />
      </Box>
    </FullSizeBox>
  );
};

export default AbHomePageSection1Ctrl;
