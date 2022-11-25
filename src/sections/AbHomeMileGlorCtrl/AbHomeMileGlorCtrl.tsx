import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AbButton } from 'abair-components';
import Image from 'mui-image';

import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/components/styled';
import { useBreakpointSize } from '@/store/viewDimensions';

import mileGlorLogo from '/assets/images/misc/míleglor.png';
import recordingStudio from '/assets/images/misc/recording-studio-drawing.webp';

const AbHomeMileGlorCtrl = () => {
  const { t } = useTranslation();
  const { breakpointSize } = useBreakpointSize();

  return (
    <HorizontallyCenteredFlexBox height={'100%'}>
      <Box maxWidth={'md'}>
        <CenteredFlexBox height={'20%'}>
          <AbInfoHeader
            title={t('infoHeader.home.mileGlor.title')}
            description={t('infoHeader.home.mileGlor.description')}
            variant="front"
          />
        </CenteredFlexBox>
        <CenteredFlexBox height={'60%'}>
          <Grid
            container
            direction="row"
            px={1}
            spacing={{ sm: 2, xs: 2 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid sm={6} xs={12} item>
              <CenteredFlexBox>
                <Image
                  duration={1000}
                  height={breakpointSize === 'xs' ? 175 : 300}
                  width={breakpointSize === 'xs' ? 300 : 450}
                  easing="ease-out"
                  alt="Abair Applications"
                  src={recordingStudio}
                  showLoading
                />
              </CenteredFlexBox>
            </Grid>
            <Grid sm={6} xs={12} item>
              <CenteredFlexBox>
                <Image
                  duration={1000}
                  height={breakpointSize === 'xs' ? 150 : 250}
                  width={breakpointSize === 'xs' ? 180 : 250}
                  easing="ease-out"
                  alt="Abair Applications"
                  src={mileGlorLogo}
                  showLoading
                />
              </CenteredFlexBox>
            </Grid>
          </Grid>
        </CenteredFlexBox>
        <CenteredFlexBox height={'20%'}>
          <AbButton
            color={'primary'}
            label={t('pages.home.go')}
            onClick={() => {
              window.location.href = 'https://phoneticsrv3.lcs.tcd.ie/studio/ga/recorder/';
            }}
          />
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
};

export default AbHomeMileGlorCtrl;
