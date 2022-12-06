import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import { AbInfoHeader } from 'abair-components';

import Publications from '@/state-control/Publications';
import Meta from '@/utils/Meta';
import { HorizontallyCenteredFlexBox } from '@/utils/flex';

function Knowledge() {
  const { t } = useTranslation();

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
        <Meta title={t('pageTitles.knowledge')} />
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pageTitles.knowledge')} />
        </Box>
        <Publications />
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default Knowledge;
