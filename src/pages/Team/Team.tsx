import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';

function Team() {
  const { t } = useTranslation();

  return (
    <FullSizeBox>
      <CenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'md' }}>
          <Meta title={t('pageTitles.team')} />
          <AbInfoHeader title={t('pageTitles.team')} variant="front" />
        </Box>
      </CenteredFlexBox>
    </FullSizeBox>
  );
}

export default Team;
