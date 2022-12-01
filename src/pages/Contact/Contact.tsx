import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import { AbInfoHeader } from 'abair-components';

import Meta from '@/utils/Meta';
import { HorizontallyCenteredFlexBox } from '@/utils/flex';

function Contact() {
  const { t } = useTranslation();

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
        <Meta title={t('pageTitles.contact')} />
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pageTitles.contact')} />
        </Box>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default Contact;
