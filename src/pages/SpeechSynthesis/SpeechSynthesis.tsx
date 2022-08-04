import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function SpeechSynthesis() {
  return (
    <>
      <Meta title="speech synthesis" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Speech Synthesis</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default SpeechSynthesis;
