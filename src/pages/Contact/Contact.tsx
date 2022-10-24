import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';

function Contact() {
  const { t } = useTranslation();

  return (
    <CenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
        <Meta title={t('pageTitles.contact')} />
        <AbInfoHeader title={t('pageTitles.contact')} variant="front" />
      </Box>
    </CenteredFlexBox>
  );
}

export default Contact;
