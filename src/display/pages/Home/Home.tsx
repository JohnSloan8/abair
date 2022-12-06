import { useTranslation } from 'react-i18next';

import Meta from '@/utils/Meta';
import { FullSizeBox } from '@/utils/flex';

import Applications from './sections/Applications';
import CoreTechnologies from './sections/CoreTechnologies';
import Knowledge from './sections/Knowledge';
import Main from './sections/Main';
import MileGlor from './sections/MileGlor';
import News from './sections/News';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Meta title={t('pageTitles.home')} />
      <Main />
      <FullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'primary.wafer' }}>
        <MileGlor />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 2, sm: 4 }}>
        <CoreTechnologies />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'primary.wafer' }}>
        <Applications />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 2, sm: 4 }}>
        <News />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 2, sm: 4 }} sx={{ backgroundColor: 'primary.wafer' }}>
        <Knowledge />
      </FullSizeBox>
    </>
  );
}

export default Home;
