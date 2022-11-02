import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AbClickableCard from '@/components/AbClickableCard';
import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox } from '@/components/styled';
import { useBreakpointSize } from '@/store/viewDimensions';

import recognitionCard from '/assets/images/misc/recognition-card-screenshot.png';
import synthesisCard from '/assets/images/misc/synthesis-card-screenshot.png';

const AbHomePageCoreTechnologiesCtrl = () => {
  const { breakpointSize } = useBreakpointSize();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'20%'}>
        <AbInfoHeader
          title={t('infoHeader.home.core.title')}
          description={t('infoHeader.home.core.description')}
          variant="front"
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'80%'}>
        <Grid
          container
          direction="row"
          px={1}
          spacing={{ sm: 4, xs: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <AbClickableCard
              handleClickEvent={() => navigate('/speech-synthesis')}
              title={t('pageTitles.synthesis')}
              description={t('pages.home.technologyCards.synthesis.description')}
              variation={breakpointSize === 'xs' ? 'app' : 'main'}
              image={synthesisCard}
            />
          </Grid>
          <Grid item>
            <AbClickableCard
              handleClickEvent={() => navigate('/speech-recognition')}
              title={t('pageTitles.recognition')}
              description={t('pages.home.technologyCards.recognition.description')}
              variation={breakpointSize === 'xs' ? 'app' : 'main'}
              image={recognitionCard}
            />
          </Grid>
        </Grid>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageCoreTechnologiesCtrl;
