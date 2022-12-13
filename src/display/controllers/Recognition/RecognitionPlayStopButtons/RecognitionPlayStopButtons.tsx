import { useRef } from 'react';
import { useRecoilValue } from 'recoil';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Box from '@mui/material/Box';

import { AbIconButton } from 'abair-components';

import {
  isRecognitionAudioEmpty,
  useAwaitingTranscription,
  useRecognitionAudio,
  useRecognitionAudioPlaying,
  useVoiceRecording,
} from '@/store/recognition';

const RecognitionPlayStopButtons = () => {
  const { recognitionAudio } = useRecognitionAudio();
  const emptyRecognitionAudio = useRecoilValue(isRecognitionAudioEmpty);
  const { voiceRecording } = useVoiceRecording();
  const { awaitingTranscription } = useAwaitingTranscription();
  const { recognitionAudioPlaying, setRecognitionAudioPlaying } = useRecognitionAudioPlaying();
  const audioRef = useRef<HTMLAudioElement>(null);

  const playRecognitionAudio = () => {
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.play();
        setRecognitionAudioPlaying(true);
      } else {
        console.log('audio.current === null');
      }
    } else {
      console.log('audio.current === undefined');
    }
  };

  const stopRecognitionAudio = () => {
    console.log('in stop');
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.pause();
        setRecognitionAudioPlaying(false);
      } else {
        console.log('audio.current === null');
      }
    } else {
      console.log('audio.current === undefined');
    }
  };

  return (
    <Box
      sx={{
        visibility:
          emptyRecognitionAudio || voiceRecording || awaitingTranscription ? 'hidden' : 'visible',
      }}
    >
      {!recognitionAudioPlaying ? (
        <AbIconButton
          color="warning"
          onClick={() => {
            playRecognitionAudio();
          }}
          icon={PlayArrowIcon}
        />
      ) : (
        <AbIconButton
          color="warning"
          onClick={() => {
            stopRecognitionAudio();
          }}
          icon={StopIcon}
        />
      )}
      <audio src={recognitionAudio} ref={audioRef} onEnded={stopRecognitionAudio} />
    </Box>
  );
};

export default RecognitionPlayStopButtons;
