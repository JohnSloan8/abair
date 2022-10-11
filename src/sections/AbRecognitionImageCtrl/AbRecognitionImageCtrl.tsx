import Box from '@mui/material/Box';

import Image from 'mui-image';

import { CenteredFlexBox } from '@/components/styled';

import womanSpeakingIntoPhoneImg from '/assets/images/misc/woman-speaking-into-phone.png';

const AbRecognitionImageCtrl = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
      <CenteredFlexBox>
        <Box sx={{ position: 'absolute', bottom: 0, height: '95%' }}>
          <Image
            duration={0}
            height={'100%'}
            width={'100%'}
            easing="ease-out"
            alt={`woman speaking into phone`}
            src={womanSpeakingIntoPhoneImg}
            showLoading
          />
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbRecognitionImageCtrl;
