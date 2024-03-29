import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AbInfoHeader } from 'abair-components';

import Meta from '@/display/sections/Meta';
import { HorizontallyCenteredFlexBox } from '@/display/utils/flex';

function About() {
  const { t } = useTranslation();

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'md' }} mb={8} px={1}>
        <Meta title={t('pageTitles.about')} />
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pageTitles.about')} />
        </Box>
        <Typography mb={2} variant={'body1'}>
          {t('pages.about.aboutUsPin')}
        </Typography>
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
