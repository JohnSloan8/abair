import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import Image from 'mui-image';

import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox } from '@/components/styled';
import { useBreakpointSize } from '@/store/viewDimensions';

const AbHomePageKnowledgeCtrl = () => {
  const { t } = useTranslation();
  const { breakpointSize } = useBreakpointSize();

  return (
    <Box height={'100%'}>
      <CenteredFlexBox>
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader
            title={t('infoHeader.home.knowledge.title')}
            description={t('infoHeader.home.knowledge.description')}
            variant="front"
          />
        </Box>
      </CenteredFlexBox>
      <CenteredFlexBox my={16}>
        <Box component={Link} to={'/knowledge'}>
          <Image
            duration={1000}
            height={breakpointSize === 'xs' ? 137.5 : 250}
            width={breakpointSize === 'xs' ? 150 : 275}
            easing="ease-out"
            alt="Abair Applications"
            src="assets/images/misc/publications.png"
            showLoading
          />
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageKnowledgeCtrl;
