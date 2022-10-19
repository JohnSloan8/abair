import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
import AbKnowledgeCtrl from '@/sections/AbKnowledgeCtrl';

function Knowledge() {
  const { t } = useTranslation();

  return (
    <FullSizeBox>
      <CenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'md' }}>
          <Meta title={t('pageTitles.knowledge')} />
          <AbInfoHeader title={t('pageTitles.knowledge')} variant="front" />
          <AbKnowledgeCtrl />
        </Box>
      </CenteredFlexBox>
    </FullSizeBox>
  );
}

export default Knowledge;
