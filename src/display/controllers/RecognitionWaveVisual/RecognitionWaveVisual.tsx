/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box';

import { AbRecognitionWaveVisual } from 'abair-components';

import { CenteredFlexBox } from '@/display/utils/flex';
import { useStream } from '@/store/recognition';
import { useVoiceRecording } from '@/store/recognition';
import { useBreakpointSize } from '@/store/viewDimensions';

const RecognitionWaveVisual = () => {
  const { stream } = useStream();
  const { breakpointSize } = useBreakpointSize();
  const { voiceRecording } = useVoiceRecording();

  return voiceRecording ? (
    <CenteredFlexBox sx={{ width: '100%', position: 'relative' }}>
      <Box sx={{ position: 'absolute', bottom: { sm: 16, xs: -5 } }}>
        <AbRecognitionWaveVisual stream={stream} breakpointSize={breakpointSize} />
      </Box>
    </CenteredFlexBox>
  ) : null;
};

export default RecognitionWaveVisual;
