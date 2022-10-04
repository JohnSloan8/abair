import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';

import { gsap } from 'gsap';

import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox } from '@/components/styled';
import AbRecognitionCtrl from '@/sections/AbRecognitionCtrl';
import AbRecognitionImageCtrl from '@/sections/AbRecognitionImageCtrl';
import AbRecognitionInstructionsCtrl from '@/sections/AbRecognitionInstructionsCtrl ';
import AbRecognitionMediaCtrl from '@/sections/AbRecognitionMediaCtrl';
import AbSynthesisCtrl from '@/sections/AbSynthesisCtrl';
import AbSynthesisVoiceInfoCtrl from '@/sections/AbSynthesisVoiceInfoCtrl';
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
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        backgroundColor: frontPageTabs === 0 ? 'secondary.wafer' : 'warning.wafer',
      }}
    >
      <AbInfoHeader title="State-of-the-art Speech and Language Technologies for Irish" />
      <CenteredFlexBox mt={-1}>
        <AbTabsCtrl variation="frontpage" />
      </CenteredFlexBox>

      <Box
        sx={{
          width: '100%',
          position: 'relative',

          zIndex: 1,
        }}
        pb={14}
      >
        <CenteredFlexBox
          ref={mainSelectionBox}
          minHeight={{ sm: 380, xs: 310 }}
          height={'100%'}
          width={'100%'}
        >
          {frontPageTabs === 0 ? <AbSynthesisVoiceSelectionCtrl /> : <AbRecognitionImageCtrl />}
        </CenteredFlexBox>
      </Box>

      <Box sx={{ width: '100%', position: 'absolute', zIndex: 2 }}>
        <CenteredFlexBox mt={-15} ref={mainControlBox}>
          {frontPageTabs === 0 ? <AbSynthesisCtrl /> : <AbRecognitionCtrl />}
        </CenteredFlexBox>
      </Box>
      <Box
        pt={10}
        sx={{
          width: '100%',
          position: 'relative',
          backgroundColor: frontPageTabs === 0 ? 'secondary.dark' : 'warning.dark',
          color: 'background.default',
          zIndex: 1,
        }}
      >
        <Box pb={1} pt={1} minHeight={50} ref={mainAudioBox}>
          {frontPageTabs === 0 ? <AbSynthesisVoiceInfoCtrl /> : <AbRecognitionInstructionsCtrl />}
        </Box>
        <AbRecognitionMediaCtrl />
      </Box>
    </Box>
  );
};

export default AbHomePageSection1Ctrl;
