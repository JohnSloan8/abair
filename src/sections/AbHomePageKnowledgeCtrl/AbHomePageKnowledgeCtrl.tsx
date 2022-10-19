import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox } from '@/components/styled';

const AbHomePageKnowledgeCtrl = () => {
  const { t } = useTranslation();

  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'15%'}>
        <AbInfoHeader
          title={t('infoHeader.home.knowledge.title')}
          description={t('infoHeader.home.knowledge.description')}
          variant="front"
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'85%'}>
        <Box component={Link} to={'/knowledge'}>
          <Typography variant="body1" m={2} align="center">
            {t('pages.home.readPublications')}
          </Typography>
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageKnowledgeCtrl;
