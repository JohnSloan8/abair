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
    <Box height={'100%'} p={4}>
      <CenteredFlexBox>
        <AbInfoHeader
          title={t('infoHeader.home.applications.title')}
          description={t('infoHeader.home.applications.description')}
          variant="front"
        />
      </CenteredFlexBox>
      <CenteredFlexBox pt={12}>
        <Link to="/applications">
          <Image
            duration={1000}
            width={breakpointSize === 'xs' ? 300 : 700}
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
