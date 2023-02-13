/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

// import { Calculate } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AbInfoHeader } from 'abair-components';
import { AbInteractionContainer } from 'abair-components';

// import { gsap } from 'gsap';
// import { headerHeight } from '@/config';
import RecognitionButtons from '@/display/controllers/Recognition/RecognitionButtons';
import RecognitionConsentPopup from '@/display/controllers/Recognition/RecognitionConsentPopup';
import RecognitionImage from '@/display/controllers/Recognition/RecognitionImage';
import RecognitionTextField from '@/display/controllers/Recognition/RecognitionTextField';
import RecognitionWaveVisual from '@/display/controllers/Recognition/RecognitionWaveVisual';
import SynthesisButtons from '@/display/controllers/Synthesis/SynthesisButtons';
import SynthesisTextField from '@/display/controllers/Synthesis/SynthesisTextField';
import SynthesisVoiceSelection from '@/display/controllers/Synthesis/SynthesisVoiceSelection';
// import Tabs from '@/display/controllers/Tabs';
import Transcriptions from '@/display/controllers/Transcriptions';
import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/display/utils/flex';
// import { useSynthesisPitch, useSynthesisSpeed } from '@/store/synthesis';
// import { useFrontPageTabs } from '@/store/tabs';
import { useBreakpointSize } from '@/store/viewDimensions';

const Recognition = () => {
  // const { frontPageTabs } = useFrontPageTabs();
  const { breakpointSize } = useBreakpointSize();
  // const { setSynthesisSpeed } = useSynthesisSpeed();
  // const { setSynthesisPitch } = useSynthesisPitch();
  // const mainSelectionBox = useRef(null);
  // const mainControlBox = useRef(null);
  const instructions = useRef(null);
  // const inputBoxTl = useRef(gsap.timeline());
  const { t } = useTranslation();
  // useEffect(() => {
  //   setSynthesisSpeed(1);
  //   setSynthesisPitch(1);
  //   inputBoxTl.current && inputBoxTl.current.kill();
  //   inputBoxTl.current = gsap.timeline().fromTo(
  //     mainSelectionBox.current,
  //     { opacity: '0%' },
  //     {
  //       opacity: '100%',

  //       ease: 'none',
  //       duration: 1,
  //     },
  //   );
  //   inputBoxTl.current = gsap.timeline().fromTo(
  //     mainControlBox.current,
  //     { opacity: '0%', y: 50 },
  //     {
  //       opacity: '100%',
  //       y: 0,
  //       ease: 'none',
  //       duration: 0.5,
  //     },
  //     '+=0.25',
  //   );
  //   inputBoxTl.current = gsap.timeline().fromTo(
  //     instructions.current,
  //     { opacity: '0%' },
  //     {
  //       opacity: '100%',
  //       ease: 'none',
  //       duration: 1,
  //     },
  //     '+=1',
  //   );
  // }, []);

  return (
    <Box height={{ md: `calc(100vh - 64px)`, sm: `calc(200vh - 64px)` }}>
      <Grid container height={'100%'}>
        <Box
          height={{ md: '84px', sm: '64px' }}
          width={'100%'}
          sx={{ position: 'absolute', zIndex: 15 }}
        >
          <FullSizeCenteredFlexBox>
            <AbInfoHeader title={t('infoHeader.home.main.title')} />
          </FullSizeCenteredFlexBox>
        </Box>

        <Grid
          width={'100%'}
          item
          sm={12}
          md={5.5}
          sx={{ backgroundColor: '#e3f2fd', position: 'relative' }}
          pt={{ md: '84px', sm: '64px' }}
        >
          <Box sx={{ position: 'relative', zIndex: 10 }}>
            <Box ml={{ sm: 0, md: 12 }}>
              <CenteredFlexBox>
                <Typography variant={'h5'} sx={{ color: 'secondary.dark' }}>
                  {t('pages.home.speak')}
                </Typography>
              </CenteredFlexBox>

              <CenteredFlexBox>
                <SynthesisVoiceSelection />
              </CenteredFlexBox>
              <CenteredFlexBox>
                <Box width={'100%'} maxWidth={500} minWidth={250}>
                  <AbInteractionContainer
                    textbox={<SynthesisTextField rows={breakpointSize === 'xs' ? 3 : 4} />}
                    buttons={<SynthesisButtons />}
                    variation="synthesis"
                  />
                </Box>
              </CenteredFlexBox>
            </Box>
          </Box>
          <Box
            height={'130px'}
            sx={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: 'secondary.wafer',
              color: 'secondary.dark',
              zIndex: 0,
              width: '100%',
            }}
          >
            <Box pb={{ xs: 2, sm: 3, position: 'absolute', bottom: 0 }} width={'100%'}>
              <CenteredFlexBox sx={{ bottom: 0 }}>
                <Typography
                  px={1}
                  sx={{ typography: { sm: 'body1', xs: 'body2' } }}
                  align="center"
                  color="default"
                  ref={instructions}
                  ml={{ sm: 0, md: 12 }}
                >
                  {t('pages.home.speakInstructions')}
                </Typography>
              </CenteredFlexBox>
            </Box>

            <Transcriptions />
          </Box>
        </Grid>
        <Grid
          item
          sm={0}
          md={1}
          sx={{ background: 'linear-gradient(to right, #e3f2fd, #ffebee)', position: 'relative' }}
          pt={{ md: '84px', sm: '64px' }}
        >
          <Box
            height={'130px'}
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}
          ></Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={5.5}
          sx={{ backgroundColor: '#ffebee', position: 'relative' }}
          pt={{ md: '84px', sm: '64px' }}
          width={'100%'}
        >
          <Box mr={{ sm: 0, md: 12 }} sx={{ position: 'relative', zIndex: 10 }}>
            <CenteredFlexBox>
              <Typography variant={'h5'} sx={{ color: 'warning.dark' }}>
                {t('pages.home.listen')}
              </Typography>
            </CenteredFlexBox>
            <CenteredFlexBox>
              <RecognitionImage />
            </CenteredFlexBox>
            <CenteredFlexBox>
              <Box width={'100%'} maxWidth={500} minWidth={250}>
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
                          width={breakpointSize === 'xs' ? 296 : 384}
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
          </Box>
          <Box
            height={'130px'}
            sx={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: 'warning.wafer',
              color: 'warning.dark',
              zIndex: 0,
              width: '100%',
            }}
          >
            <Box pb={{ xs: 2, sm: 3, position: 'absolute', bottom: 0 }} width={'100%'}>
              <CenteredFlexBox sx={{ bottom: 0 }}>
                <Typography
                  px={1}
                  mr={{ sm: 0, md: 12 }}
                  sx={{ typography: { sm: 'body1', xs: 'body2' } }}
                  align="center"
                  color="default"
                  ref={instructions}
                >
                  {t('pages.home.speakInstructions')}
                </Typography>
              </CenteredFlexBox>
            </Box>

            <Transcriptions />
          </Box>
        </Grid>
      </Grid>

      {/* <Box sx={{ width: '100%', position: 'absolute', zIndex: 2, bottom: { sm: 55, xs: 50 } }}>
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
      </Box> */}
      {/* <Box
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
      </Box> */}
      <RecognitionConsentPopup />
    </Box>
  );
};

export default Recognition;
