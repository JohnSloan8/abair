import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import { AbInfoHeader } from 'abair-components';
import Image from 'mui-image';

import { useBreakpointSize } from '@/store/viewDimensions';
import { CenteredFlexBox } from '@/utils/flex';

import applicationsLogo from '/assets/images/misc/abair-applications.png';

const AbHomePageApplicationsCtrl = () => {
  const { breakpointSize } = useBreakpointSize();
  const { t } = useTranslation();

  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'20%'}>
        <AbInfoHeader
          title={t('infoHeader.home.applications.title')}
          description={t('infoHeader.home.applications.description')}
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'80%'}>
        <Link to="/applications">
          <Image
            duration={1000}
            width={breakpointSize === 'xs' ? 300 : 600}
            easing="ease-out"
            alt="Abair Applications"
            src={applicationsLogo}
            showLoading
          />
        </Link>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageApplicationsCtrl;
