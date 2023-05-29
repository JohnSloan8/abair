import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { AbButton, AbInfoHeader } from 'abair-components';
import Image from 'mui-image';

import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { useBreakpointSize } from '@/store/viewDimensions';

import applicationsLogo from '/assets/images/misc/abair-applications.png';

const AbHomePageApplicationsCtrl = () => {
  const { breakpointSize } = useBreakpointSize();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box height={'100%'}>
      <HorizontallyCenteredFlexBox height={'20%'}>
        <Box>
          <AbInfoHeader
            title={t('infoHeader.home.applications.title')}
            description={t('infoHeader.home.applications.description')}
          />
        </Box>
      </HorizontallyCenteredFlexBox>

      <CenteredFlexBox height={'50%'}>
        <Link to="/applications">
          <Image
            duration={1000}
            width={breakpointSize === 'xs' ? 400 : 650}
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
            color={'primary'}
            fullWidth={true}
          />
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageApplicationsCtrl;
