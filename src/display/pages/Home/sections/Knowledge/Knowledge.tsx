import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { AbButton, AbInfoHeader } from 'abair-components';
import Image from 'mui-image';

import { CenteredFlexBox } from '@/display/utils/flex';
import { useBreakpointSize } from '@/store/viewDimensions';

import publicationsLogo from '/assets/images/misc/publications.png';

const AbHomePageKnowledgeCtrl = () => {
  const { t } = useTranslation();
  const { breakpointSize } = useBreakpointSize();
  const navigate = useNavigate();

  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'20%'}>
        <AbInfoHeader
          title={t('infoHeader.home.knowledge.title')}
          description={t('infoHeader.home.knowledge.description')}
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'70%'}>
        <Box component={Link} to={'/knowledge'}>
          <Image
            duration={1000}
            height={breakpointSize === 'xs' ? 137.5 : 200}
            width={breakpointSize === 'xs' ? 150 : 220}
            easing="ease-out"
            alt="Abair Applications"
            src={publicationsLogo}
            showLoading
          />
        </Box>
      </CenteredFlexBox>
      <CenteredFlexBox height={'10%'}>
        <Box width={200}>
          <AbButton
            label={t('pages.home.seeAll')}
            onClick={() => {
              navigate('/knowledge');
            }}
            selected={true}
            color={'primary'}
            fullWidth={true}
          />
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageKnowledgeCtrl;
