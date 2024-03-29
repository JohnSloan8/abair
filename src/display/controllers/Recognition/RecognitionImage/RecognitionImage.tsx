import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';

import Image from 'mui-image';

import { CenteredFlexBox } from '@/display/utils/flex';
import { frontPageSelectionBoxSize } from '@/store/viewDimensions';

import womanSpeakingLogo from '/assets/images/misc/woman-speaking-into-phone.png';

const RecognitionImage = () => {
  const frontPageSelectionBoxSizeValue = useRecoilValue(frontPageSelectionBoxSize);

  return (
    <Box
      sx={{ height: frontPageSelectionBoxSizeValue, width: '100%', position: 'relative' }}
      minHeight={200}
    >
      <CenteredFlexBox>
        <Box sx={{ position: 'absolute', bottom: 0, height: '95%' }}>
          <Image
            duration={0}
            height={'100%'}
            width={'100%'}
            easing="ease-out"
            alt={`woman speaking into phone`}
            src={womanSpeakingLogo}
            showLoading
          />
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default RecognitionImage;
