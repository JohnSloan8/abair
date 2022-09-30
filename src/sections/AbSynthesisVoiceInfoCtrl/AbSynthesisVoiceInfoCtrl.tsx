import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useSynthesisVoiceIndex, useSynthesisVoiceOptions } from '@/store/synthesis/voiceOptions';

const AbSynthesisVoiceInfoCtrl = () => {
  const { synthesisVoiceIndex } = useSynthesisVoiceIndex();
  const { synthesisVoiceOptions } = useSynthesisVoiceOptions();

  return (
    <Box
      mb={1}
      border={2}
      borderColor={synthesisVoiceIndex === -1 ? 'warning.main' : 'black'}
      p={1}
      sx={{ borderRadius: 1 }}
    >
      {synthesisVoiceIndex === -1 ? (
        <Typography variant="body1" align="center" color="warning.main">
          no voice
        </Typography>
      ) : (
        <Typography variant="body1" align="center" color="default">
          {`${synthesisVoiceOptions[synthesisVoiceIndex].name} - ${synthesisVoiceOptions[synthesisVoiceIndex].gender} - ${synthesisVoiceOptions[synthesisVoiceIndex].locale}`}
        </Typography>
      )}
    </Box>
  );
};

export default AbSynthesisVoiceInfoCtrl;
