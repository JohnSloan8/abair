import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useSynthesisVoiceIndex, useSynthesisVoiceOptions } from '@/store/synthesis/voiceOptions';

const AbSynthesisVoiceInfoCtrl = () => {
  const { synthesisVoiceIndex } = useSynthesisVoiceIndex();
  const { synthesisVoiceOptions } = useSynthesisVoiceOptions();

  return (
    <Box>
      {synthesisVoiceIndex === -1 ? (
        <Typography variant="body1" align="center" color="warning.main">
          no voice
        </Typography>
      ) : (
        <Typography variant="body1" align="center" color="default">
          {`Voice: ${synthesisVoiceOptions[synthesisVoiceIndex].name}`}
        </Typography>
      )}
    </Box>
  );
};

export default AbSynthesisVoiceInfoCtrl;
