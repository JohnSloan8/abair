import { useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { useRecoilValue } from 'recoil';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';
import Box from '@mui/material/Box';

import AbAudioPlayer from '@/components/AbAudioPlayer';
import AbIconButton from '@/components/AbIconButton';
import AbInfoHeader from '@/components/AbInfoHeader';
import AbTextField from '@/components/AbTextField';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { isRecognitionAudioEmpty, useRecognitionAudio, useRecording } from '@/store/recognition';

function SpeechRecognition() {
  const { recording, setRecording } = useRecording();
  const { recognitionAudio, setRecognitionAudio } = useRecognitionAudio();
  const { /*status,*/ startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    audio: true,
    video: false,
  });
  const emptyAudio = useRecoilValue(isRecognitionAudioEmpty);

  const toggleRecording = () => {
    recording ? stopRecording() : startRecording();
    setRecording((recording: boolean) => !recording);
  };

  useEffect(() => {
    setRecognitionAudio(mediaBlobUrl);
  }, [mediaBlobUrl, setRecognitionAudio]);

  return (
    <CenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <Meta title="speech recognition" />
        <AbInfoHeader title="Speech Recognition" />
        <Box>
          <AbTextField variation="recognition" />
        </Box>
        {/* <p>{status}</p> */}
        <CenteredFlexBox pt={4}>
          {!recording ? (
            <AbIconButton
              variation="record"
              handleClick={toggleRecording}
              icon={KeyboardVoiceIcon}
            />
          ) : (
            <AbIconButton variation="stop" handleClick={toggleRecording} icon={StopIcon} />
          )}
        </CenteredFlexBox>
        {!emptyAudio && (
          <CenteredFlexBox>
            <AbAudioPlayer audioURL={recognitionAudio} />
          </CenteredFlexBox>
        )}
      </Box>
    </CenteredFlexBox>
  );
}

export default SpeechRecognition;
