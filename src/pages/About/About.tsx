import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { HorizontallyCenteredFlexBox } from '@/components/styled';

function About() {
  const { t } = useTranslation();

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'md' }} mb={8}>
        <Meta title={t('pageTitles.about')} />
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pageTitles.about')} variant="front" />
        </Box>
        <Typography variant={'body1'}>{t('pages.about.aboutUsPin')}</Typography>
        <Typography variant={'body1'}>{t('pages.about.aboutUs')}</Typography>
        <Typography variant={'h6'} align={'center'} mt={6} mb={1}>
          {t('pages.about.synthesisTitle')}
        </Typography>
        <Typography variant={'body1'}>{t('pages.about.synthesis')}</Typography>
        <Typography variant={'h6'} align={'center'} mt={6} mb={1}>
          {t('pages.about.speechRecognitionTitle')}
        </Typography>
        <Typography variant={'body1'}>{t('pages.about.speechRecognition')}</Typography>
        <Typography variant={'h6'} align={'center'} mt={6} mb={1}>
          {t('pages.about.challengeTitle')}
        </Typography>
        <Typography variant={'body1'}>{t('pages.about.challenge')}</Typography>
        <Typography variant={'h6'} align={'center'} mt={6} mb={1}>
          {t('pages.about.aheadTitle')}
        </Typography>
        <Typography variant={'body1'}>{t('pages.about.ahead')}</Typography>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default About;
