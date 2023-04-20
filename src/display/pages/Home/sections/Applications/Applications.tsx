import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { AbButton, AbInfoHeader } from 'abair-components';
import Image from 'mui-image';

import { CenteredFlexBox } from '@/display/utils/flex';
import { useBreakpointSize } from '@/store/viewDimensions';

import applicationsLogo from '/assets/images/misc/abair-applications.png';

const AbHomePageApplicationsCtrl = () => {
  const { breakpointSize } = useBreakpointSize();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'20%'}>
        <AbInfoHeader
          title={t('infoHeader.home.applications.title')}
          description={t('infoHeader.home.applications.description')}
        />
      </CenteredFlexBox>

      <CenteredFlexBox height={'70%'}>
        <Link to="/applications">
          <Image
            duration={1000}
            width={breakpointSize === 'xs' ? 400 : 900}
            easing="ease-out"
            alt="Abair Applications"
            src={applicationsLogo}
            showLoading
          />
        </Link>
      </CenteredFlexBox>
      <CenteredFlexBox height={'10%'}>
        <Box width={200}>
          <AbButton
            label={t('pages.home.seeAll')}
            onClick={() => {
              navigate('/applications');
            }}
            selected={true}
            color={'secondary'}
            fullWidth={true}
          />
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageApplicationsCtrl;
