import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import { AbInfoHeader } from 'abair-components';

import Meta from '@/display/sections/Meta';
import { AlmostFullSizeBox, CenteredFlexBox } from '@/display/utils/flex';

import Applications from './sections/Applications';
// import CoreTechnologies from './sections/CoreTechnologies';
import Knowledge from './sections/Knowledge';
import MileGlor from './sections/MileGlor';
import News from './sections/News';
import Recognition from './sections/Recognition';
import Synthesis from './sections/Synthesis';

function Home() {
  const { t } = useTranslation();
  return (
    <Box>
      <Meta title={t('pageTitles.home')} />
      <CenteredFlexBox>
        <AbInfoHeader title={t('infoHeader.home.main.title')} />
      </CenteredFlexBox>
      <AlmostFullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'secondary.wafer' }}>
        <Synthesis />
      </AlmostFullSizeBox>
      <AlmostFullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'warning.wafer' }}>
        <Recognition />
      </AlmostFullSizeBox>

      <AlmostFullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'background.default' }}>
        <Applications />
      </AlmostFullSizeBox>
      <AlmostFullSizeBox py={{ xs: 2, sm: 4 }}>
        <News />
      </AlmostFullSizeBox>
      <AlmostFullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'primary.wafer' }}>
        <MileGlor />
      </AlmostFullSizeBox>
      {/* <AlmostFullSizeBox py={{ xs: 2, sm: 4 }}>
        <CoreTechnologies />
      </AlmostFullSizeBox> */}
      <AlmostFullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'primary.wafer' }}>
        <Knowledge />
      </AlmostFullSizeBox>
    </Box>
  );
}

export default Home;
