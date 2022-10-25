import { useTranslation } from 'react-i18next';

import Meta from '@/components/Meta';
import { FullSizeBox } from '@/components/styled';
import AbHomeMileGlorCtrl from '@/sections/AbHomeMileGlorCtrl';
import AbHomePageApplicationsCtrl from '@/sections/AbHomePageApplicationsCtrl';
import AbHomePageCoreTechnologiesCtrl from '@/sections/AbHomePageCoreTechnologiesCtrl';
import AbHomePageKnowledgeCtrl from '@/sections/AbHomePageKnowledgeCtrl';
import AbHomePageNewsCtrl from '@/sections/AbHomePageNewsCtrl';
import AbHomePageSection1Ctrl from '@/sections/AbHomePageSection1Ctrl';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Meta title={t('pageTitles.home')} />
      <AbHomePageSection1Ctrl />
      <FullSizeBox py={{ xs: 4, sm: 8 }} sx={{ backgroundColor: 'primary.wafer' }}>
        <AbHomeMileGlorCtrl />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 4, sm: 8 }}>
        <AbHomePageCoreTechnologiesCtrl />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 4, sm: 8 }} sx={{ backgroundColor: 'primary.wafer' }}>
        <AbHomePageApplicationsCtrl />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 4, sm: 8 }}>
        <AbHomePageNewsCtrl />
      </FullSizeBox>
      <FullSizeBox py={{ xs: 4, sm: 8 }} sx={{ backgroundColor: 'primary.wafer' }}>
        <AbHomePageKnowledgeCtrl />
      </FullSizeBox>
    </>
  );
}

export default Home;
