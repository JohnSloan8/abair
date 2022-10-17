import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { gsap } from 'gsap';

import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
// import AbRecognitionMediaCtrl from '@/sections/AbRecognitionMediaCtrl';
// import AbMediaCtrl from '@/sections/AbMediaCtrl';
import AbRecognitionButtonsCtrl from '@/sections/AbRecognitionButtonsCtrl';
import AbRecognitionCtrl from '@/sections/AbRecognitionCtrl';
import AbRecognitionImageCtrl from '@/sections/AbRecognitionImageCtrl';
import AbRecognitionTextFieldCtrl from '@/sections/AbRecognitionTextFieldCtrl/AbRecognitionTextFieldCtrl';
import AbSynthesisButtonsCtrl from '@/sections/AbSynthesisButtonsCtrl';
import AbSynthesisCtrl from '@/sections/AbSynthesisCtrl';
import AbSynthesisVoiceSelectionCtrl from '@/sections/AbSynthesisVoiceSelectionCtrl';
import AbTabsCtrl from '@/sections/AbTabsCtrl';
import AbTranscriptionsCtrl from '@/sections/AbTranscriptionsCtrl';
import { useFrontPageTabs } from '@/store/tabs';
import { frontPageSelectionBoxSize, useBreakpointSize } from '@/store/viewDimensions';

import AbRecognitionVisualisationCtrl from '../AbRecognitionVisualisationCtrl';

// import initMediaRecorder from './utils';

const AbHomePageSection1Ctrl = () => {
  const frontPageSelectionBoxSizeValue = useRecoilValue(frontPageSelectionBoxSize);
  const { frontPageTabs } = useFrontPageTabs();
  const { breakpointSize } = useBreakpointSize();

  const mainSelectionBox = useRef(null);
  const mainControlBox = useRef(null);
  const instructions = useRef(null);
  const inputBoxTl = useRef(gsap.timeline());

  useEffect(() => {
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
    <FullSizeBox
      sx={{
        width: '100%',
        position: 'relative',
        backgroundColor: frontPageTabs === 0 ? 'secondary.wafer' : 'warning.wafer',
      }}
    >
      <CenteredFlexBox>
        <AbInfoHeader
          variant="front"
          title="State-of-the-art Speech and Language Technologies for Irish"
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={{ sm: '64px', xs: '48px' }}>
        <AbTabsCtrl variation="frontpage" />
      </CenteredFlexBox>

      <CenteredFlexBox ref={mainSelectionBox} height={frontPageSelectionBoxSizeValue}>
        {frontPageTabs === 0 ? <AbSynthesisVoiceSelectionCtrl /> : <AbRecognitionImageCtrl />}
      </CenteredFlexBox>

      <Box sx={{ width: '100%', position: 'absolute', zIndex: 2, bottom: { sm: 55, xs: 40 } }}>
        <CenteredFlexBox ref={mainControlBox}>
          <Box width={'100%'} maxWidth={550} minWidth={250}>
            {frontPageTabs === 0 ? (
              <AbSynthesisCtrl>
                <AbSynthesisButtonsCtrl />
              </AbSynthesisCtrl>
            ) : (
              <AbRecognitionCtrl
                textbox={<AbRecognitionTextFieldCtrl rows={breakpointSize === 'xs' ? 3 : 4} />}
                visualisation={<AbRecognitionVisualisationCtrl />}
                buttons={<AbRecognitionButtonsCtrl />}
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
                <span>Choose dialect {'&'} gender</span>
                <span> &nbsp;{'>'}&nbsp; Type</span>
                <span> &nbsp;{'>'}&nbsp; Synthesise</span>
              </Typography>
            ) : (
              <Typography
                px={1}
                sx={{ typography: { sm: 'body1', xs: 'body2' } }}
                align="center"
                color="default"
                ref={instructions}
              >
                <span>Go to a quiet space</span>
                <span> &nbsp;{'>'}&nbsp; Tap Microphone</span>
                <span> &nbsp;{'>'}&nbsp; Speak</span>
              </Typography>
            )}
          </CenteredFlexBox>
        </Box>

        <AbTranscriptionsCtrl />
      </Box>
    </FullSizeBox>
  );
};

export default AbHomePageSection1Ctrl;
