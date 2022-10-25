import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { HorizontallyCenteredFlexBox } from '@/components/styled';

function Team() {
  const { t } = useTranslation();

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
        <Meta title={t('pageTitles.team')} />
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pageTitles.team')} variant="front" />
        </Box>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default Team;
