import { useReactMediaRecorder } from 'react-media-recorder';

import Box from '@mui/material/Box';

import AbIconButton from '@/components/AbIconButton';
import AbInfoHeader from '@/components/AbInfoHeader';
import AbTextField from '@/components/AbTextField';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { useRecording } from '@/store/recognition';

function SpeechRecognition() {
  const { recording, setRecording } = useRecording();
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    audio: true,
    video: false,
  });

  const toggleRecording = () => {
    recording ? stopRecording() : startRecording();
    setRecording((recording: boolean) => !recording);
  };

  return (
    <CenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <Meta title="speech recognition" />
        <AbInfoHeader title="Speech Recognition" />
        <Box>
          <AbTextField variation="recognition" />
        </Box>
        <p>{status}</p>
        <CenteredFlexBox pt={4}>
          {!recording ? (
            <AbIconButton variation="record" handleClick={toggleRecording} />
          ) : (
            <AbIconButton variation="stop" handleClick={toggleRecording} />
          )}
        </CenteredFlexBox>
        <audio src={mediaBlobUrl} controls autoPlay />
      </Box>
    </CenteredFlexBox>
  );
}

export default SpeechRecognition;
