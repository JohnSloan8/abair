import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { FullSizeCenteredFlexBox } from '@/components/styled';

const AbRecognitionInstructionsCtrl = () => {
  return (
    <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
      <FullSizeCenteredFlexBox>
        <Typography variant="h6">Please go to a quiet space</Typography>
        <Typography variant="h6">When recording, speak clearly into the microphone</Typography>
      </FullSizeCenteredFlexBox>
    </Box>
  );
};

export default AbRecognitionInstructionsCtrl;
