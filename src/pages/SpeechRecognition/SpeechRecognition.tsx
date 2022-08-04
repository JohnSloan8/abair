import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function SpeechRecognition() {
  return (
    <>
      <Meta title="speech recognition" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Speech Recognition</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default SpeechRecognition;
