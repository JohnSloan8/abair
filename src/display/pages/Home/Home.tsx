import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import Meta from '@/display/sections/Meta';
import { FullSizeBox } from '@/display/utils/flex';

// import APIs from './sections/APIs';
import Knowledge from './sections/Knowledge';
import News from './sections/News';
// import Corpora from './sections/Corpora';
import Second from './sections/Second';
import Top from './sections/Top';

function Home() {
  const { t } = useTranslation();

  return (
    <Box>
      <Meta title={t('pageTitles.home')} />

      <Top />
      <Box py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'background.default' }}>
        <Second />
      </Box>
      <FullSizeBox
        py={{ xs: 2, sm: 4 }}
        borderColor="primary.light"
        sx={{ backgroundColor: 'primary.wafer' }}
      >
        <News />
      </FullSizeBox>

      <FullSizeBox
        py={{ xs: 2, sm: 4 }}
        borderColor="primary.light"
        sx={{ backgroundColor: 'primary.wafer' }}
      >
        <Knowledge />
      </FullSizeBox>
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
