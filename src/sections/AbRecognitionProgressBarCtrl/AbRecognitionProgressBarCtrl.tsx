import Box from '@mui/material/Box';

import AbProgressBar from '@/components/AbProgressBar';
import { recognitionTimeLimit } from '@/config';
import { useVoiceRecording } from '@/store/recognition';

const AbRecognitionProgressBarCtrl = () => {
  const { voiceRecording, setVoiceRecording } = useVoiceRecording();

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <AbProgressBar
        running={voiceRecording}
        color="warning.main"
        timeLimit={recognitionTimeLimit}
        handleComplete={() => {
          setVoiceRecording(false);
        }}
      />
    </Box>
  );
};

export default AbRecognitionProgressBarCtrl;
