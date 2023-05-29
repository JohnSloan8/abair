import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

import { AbButton, AbInfoHeader } from 'abair-components';
import Image from 'mui-image';

import { CenteredFlexBox } from '@/display/utils/flex';
import { useBreakpointSize } from '@/store/viewDimensions';

import publicationsLogo from '/assets/images/misc/kisspng-book-cover-outline-clip-art-5aed58b683c385.5774176815255041825397.png';

const APIs = () => {
  const { t } = useTranslation();
  const { breakpointSize } = useBreakpointSize();

  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'20%'}>
        <AbInfoHeader
          title={t('infoHeader.home.Neartu.title')}
          description={t('infoHeader.home.Neartu.description')}
        />
      </CenteredFlexBox>
      <CenteredFlexBox>
        <AbButton
          label={'Request Access'}
          onClick={() => null}
          selected={true}
          color={'secondary'}
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'80%'}>
        <Box component={Link} to={'/Neartu'}>
          <Image
            duration={1000}
            height={breakpointSize === 'xs' ? 137.5 : 350}
            width={breakpointSize === 'xs' ? 150 : 430}
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

export default APIs;
