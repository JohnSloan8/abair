import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Image from 'mui-image';

import { CenteredFlexBox } from '@/components/styled';

import womanSpeakingIntoPhoneImg from '/assets/images/misc/woman-speaking-into-phone.png';

const AbRecognitionInstructionsCtrl = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
      <CenteredFlexBox mt={0} mb={4}>
        <Box height={{ sm: 310, xs: 236 }}>
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
      <Typography pt={{ sm: 1, xs: 0 }} align="center" variant="body1">
        Please go to a quiet space
      </Typography>
      <Typography pb={{ sm: 2, xs: 1 }} align="center" variant="body1">
        When recording, speak clearly into the microphone
      </Typography>
    </Box>
  );
};

export default AbRecognitionInstructionsCtrl;
