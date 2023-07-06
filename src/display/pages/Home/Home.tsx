/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Image from 'mui-image';

import Meta from '@/display/sections/Meta';
import { TwoThirdsSizeBox } from '@/display/utils/flex';
import { CenteredFlexBox } from '@/display/utils/flex';
import { usePosterShown } from '@/store/news';
import { useBreakpointSize } from '@/store/viewDimensions';

// import APIs from './sections/APIs';
import Knowledge from './sections/Knowledge';
import News from './sections/News';
// import Corpora from './sections/Corpora';
import Second from './sections/Second';
import Top from './sections/Top';
import ringPoster from '/assets/images/misc/RingPoster.jpg';

function Home() {
  const { t } = useTranslation();
  const { breakpointSize } = useBreakpointSize();
  const { posterShown, setPosterShown } = usePosterShown();
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    if (!posterShown) {
      setTimeout(() => {
        setShowPoster(true);
        setPosterShown(true);
      }, 2000);
    }
  }, []);

  return (
    <Box>
      <Meta title={t('pageTitles.home')} />
      {showPoster && (
        <CenteredFlexBox
          sx={{
            zIndex: 10000,
            position: 'absolute',
            top: 0,
            height: '100%',
            width: '100%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              height: '100%',
              width: '100%',

              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          ></Box>
          <Box sx={{ position: 'absolute' }}>
            <Image
              duration={1000}
              width={breakpointSize === 'xs' ? 340 : breakpointSize === 'sm' ? 540 : 800}
              height={breakpointSize === 'xs' ? 340 : breakpointSize === 'sm' ? 540 : 800}
              easing="ease-out"
              alt="Abair Applications"
              src={ringPoster}
              showLoading
            />
            <Button
              variant="contained"
              color="warning"
              sx={{ position: 'absolute', top: 10, right: 10 }}
              onClick={() => {
                setShowPoster(false);
              }}
            >
              X
            </Button>
          </Box>
        </CenteredFlexBox>
      )}
      <Top />
      <Box py={{ xs: 1, sm: 2 }} sx={{ backgroundColor: 'background.default' }}>
        <Second />
      </Box>
      <TwoThirdsSizeBox
        py={{ xs: 2, sm: 4 }}
        borderColor="primary.light"
        sx={{ backgroundColor: 'primary.wafer' }}
      >
        <News />
      </TwoThirdsSizeBox>

      <TwoThirdsSizeBox
        py={{ xs: 2, sm: 4 }}
        borderColor="primary.light"
        sx={{ backgroundColor: 'background.default' }}
      >
        <Knowledge />
      </TwoThirdsSizeBox>
      {/* <FullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'background.paper' }}>
        <APIs />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'background.default' }}>
        <Corpora />
      </FullSizeBox> */}
    </Box>
  );
}

export default Home;
