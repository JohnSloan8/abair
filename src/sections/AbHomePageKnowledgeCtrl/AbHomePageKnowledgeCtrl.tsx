import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import Image from 'mui-image';

import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox } from '@/components/styled';
import { useBreakpointSize } from '@/store/viewDimensions';

import publicationsLogo from '/assets/images/misc/publications.png';

const AbHomePageKnowledgeCtrl = () => {
  const { t } = useTranslation();
  const { breakpointSize } = useBreakpointSize();

  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'20%'}>
        <AbInfoHeader
          title={t('infoHeader.home.knowledge.title')}
          description={t('infoHeader.home.knowledge.description')}
          variant="front"
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'80%'}>
        <Box component={Link} to={'/dev/knowledge'}>
          <Image
            duration={1000}
            height={breakpointSize === 'xs' ? 137.5 : 250}
            width={breakpointSize === 'xs' ? 150 : 275}
            easing="ease-out"
            alt="Abair Applications"
            src={publicationsLogo}
            showLoading
          />
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageKnowledgeCtrl;
