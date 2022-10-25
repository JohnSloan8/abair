import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import Image from 'mui-image';

import AbButton from '@/components/AbButton';
import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox } from '@/components/styled';
import { useBreakpointSize } from '@/store/viewDimensions';

const AbHomeMileGlorCtrl = () => {
  const { t } = useTranslation();
  const { breakpointSize } = useBreakpointSize();

  return (
    <CenteredFlexBox>
      <Box py={{ sm: 4, xs: 2 }}>
        <AbInfoHeader
          title={t('infoHeader.home.mileGlor.title')}
          description={t('infoHeader.home.mileGlor.description')}
          variant="front"
        />
        <Box my={{ sm: 12, xs: 6 }}>
          <Image
            duration={1000}
            height={breakpointSize === 'xs' ? 280 : 400}
            width={breakpointSize === 'xs' ? 340 : 500}
            easing="ease-out"
            alt="Abair Applications"
            src="assets/images/misc/recording-studio-drawing.webp"
            showLoading
          />
        </Box>
        <CenteredFlexBox>
          <AbButton
            variation={'model'}
            label={t('pages.home.go')}
            onClick={() => {
              window.location.href = 'https://phoneticsrv3.lcs.tcd.ie/studio/ga/recorder/';
            }}
          />
        </CenteredFlexBox>
      </Box>
    </CenteredFlexBox>
  );
};

export default AbHomeMileGlorCtrl;
