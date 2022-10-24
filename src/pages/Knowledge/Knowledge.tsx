import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { HorizontallyCenteredFlexBox } from '@/components/styled';
import AbKnowledgeCtrl from '@/sections/AbKnowledgeCtrl';

function Knowledge() {
  const { t } = useTranslation();

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
        <Meta title={t('pageTitles.knowledge')} />
        <AbInfoHeader title={t('pageTitles.knowledge')} variant="front" />
        <AbKnowledgeCtrl />
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default Knowledge;
