import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';

function Team() {
  const { t } = useTranslation();

  return (
    <CenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
        <Meta title={t('pageTitles.team')} />
        <AbInfoHeader title={t('pageTitles.team')} variant="front" />
      </Box>
    </CenteredFlexBox>
  );
}

export default Team;
