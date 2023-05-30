import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { AbButton } from 'abair-components';
import { AbInfoHeader } from 'abair-components';
import Image from 'mui-image';

import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { useBreakpointSize } from '@/store/viewDimensions';

import mileGlorLogo from '/assets/images/misc/míleglorUnited.png';

const AbHomeMileGlorCtrl = () => {
  const { t } = useTranslation();
  const { breakpointSize } = useBreakpointSize();

  return (
    <HorizontallyCenteredFlexBox height={'100%'}>
      <Box maxWidth={'md'}>
        <HorizontallyCenteredFlexBox height={'25%'}>
          <Box px={2}>
            <AbInfoHeader
              title={t('infoHeader.home.mileGlor.title')}
              description={t('infoHeader.home.mileGlor.description')}
              descriptionFonts={['body1', 'body2']}
            />
          </Box>
        </HorizontallyCenteredFlexBox>
        <CenteredFlexBox height={'60%'}>
          <Button
            onClick={() => {
              window.location.href = 'https://phoneticsrv3.lcs.tcd.ie/studio/ga/recorder/';
            }}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent', // Set the hover background color to transparent
              },
            }}
          >
            <Image
              duration={1000}
              height={breakpointSize === 'xs' ? 300 : 300}
              width={breakpointSize === 'xs' ? 300 : 300}
              easing="ease-out"
              alt="Mile Glór Logo"
              src={mileGlorLogo}
              showLoading
            />
          </Button>
        </CenteredFlexBox>
        <CenteredFlexBox height={'5%'}>
          <Box width={200}>
            <AbButton
              color={'primary'}
              label={t('pages.home.go')}
              onClick={() => {
                window.location.href = 'https://phoneticsrv3.lcs.tcd.ie/studio/ga/recorder/';
              }}
              fullWidth={true}
            />
          </Box>
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
};

export default AbHomeMileGlorCtrl;
