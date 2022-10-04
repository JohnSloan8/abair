import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/components/styled';

const AbRecognitionInstructionsCtrl = () => {
  return (
    <CenteredFlexBox>
      <Typography px={1} variant="body2" align="center" color="default">
        Quiet space &nbsp;{'>'}&nbsp; Tap Microphone &nbsp;{'>'}&nbsp; Speak clearly
      </Typography>
    </CenteredFlexBox>
  );
};

export default AbRecognitionInstructionsCtrl;
