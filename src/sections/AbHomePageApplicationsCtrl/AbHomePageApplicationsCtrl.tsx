import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import Image from 'mui-image';

import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox } from '@/components/styled';
import { useBreakpointSize } from '@/store/viewDimensions';

const AbHomePageApplicationsCtrl = () => {
  const { breakpointSize } = useBreakpointSize();

  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'15%'}>
        <AbInfoHeader
          title="Applications"
          description="Access a wide range of applications developed using our core technologies for public, education, and accessibility."
          variant="front"
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'85%'}>
        <Link to="/applications">
          <Image
            duration={1000}
            width={breakpointSize === 'xs' ? 400 : 700}
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
