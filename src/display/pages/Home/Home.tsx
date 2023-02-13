import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import Meta from '@/display/sections/Meta';
import { FullSizeBox } from '@/display/utils/flex';

import Applications from './sections/Applications';
// import CoreTechnologies from './sections/CoreTechnologies';
import Knowledge from './sections/Knowledge';
import Main from './sections/Main';
import MileGlor from './sections/MileGlor';
import News from './sections/News';

function Home() {
  const { t } = useTranslation();
  return (
    <Box>
      <Meta title={t('pageTitles.home')} />
      <FullSizeBox>
        <Main />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'primary.wafer' }}>
        <Applications />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 2, sm: 4 }}>
        <News />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'primary.wafer' }}>
        <MileGlor />
      </FullSizeBox>
      {/* <FullSizeBox py={{ xs: 2, sm: 4 }}>
        <CoreTechnologies />
      </FullSizeBox> */}
      <FullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'primary.wafer' }}>
        <Knowledge />
      </FullSizeBox>
    </Box>
  );
}

export default Home;
