import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import AbTextField from '@/components/AbTextField';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { useRecording } from '@/store/recognition';

function SpeechRecognition() {
  const { recording, toggleRecording } = useRecording();

  return (
    <CenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <Meta title="speech recognition" />
        <AbInfoHeader title="Speech Recognition" />
        <Box>
          <AbTextField variation="recognition" />
        </Box>
        <CenteredFlexBox pt={4}>
          {!recording ? (
            <IconButton
              aria-label="microphone"
              color="info"
              sx={{
                backgroundColor: 'secondary.main',
                '&:hover': { backgroundColor: 'secondary.dark' },
              }}
              onClick={toggleRecording}
            >
              <KeyboardVoiceIcon fontSize="large" />
            </IconButton>
          ) : (
            <IconButton
              aria-label="stop"
              color="info"
              sx={{
                backgroundColor: 'warning.main',
                '&:hover': { backgroundColor: 'warning.dark' },
              }}
              onClick={toggleRecording}
            >
              <StopIcon fontSize="large" />
            </IconButton>
          )}
        </CenteredFlexBox>
      </Box>
    </CenteredFlexBox>
  );
}

export default SpeechRecognition;
