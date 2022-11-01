import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import Image from 'mui-image';

import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox } from '@/components/styled';
import { useBreakpointSize } from '@/store/viewDimensions';

const AbHomePageApplicationsCtrl = () => {
  const { breakpointSize } = useBreakpointSize();
  const { t } = useTranslation();

  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'20%'}>
        <AbInfoHeader
          title={t('infoHeader.home.applications.title')}
          description={t('infoHeader.home.applications.description')}
          variant="front"
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'80%'}>
        <Link to="/dev/applications">
          <Image
            duration={1000}
            width={breakpointSize === 'xs' ? 300 : 600}
            easing="ease-out"
            alt="Abair Applications"
            src="/assets/images/misc/abair-applications.png"
            showLoading
          />
        </Link>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageApplicationsCtrl;
