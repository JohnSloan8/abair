import { atom, selector, useRecoilState } from 'recoil';

const voiceRecordingState = atom<boolean>({
  key: 'voice-recording-state',
  default: false,
});

const useVoiceRecording = () => {
  const [voiceRecording, setVoiceRecording] = useRecoilState(voiceRecordingState);

  return { voiceRecording, setVoiceRecording };
};

const awaitingTranscriptionState = atom<boolean>({
  key: 'awaiting-transcription-state',
  default: false,
});

const useAwaitingTranscription = () => {
  const [awaitingTranscription, setAwaitingTranscription] = useRecoilState(
    awaitingTranscriptionState,
  );

  return { awaitingTranscription, setAwaitingTranscription };
};

const recognitionAudioState = atom<string | undefined>({
  key: 'recognition-audio-state',
  default: '',
});

const useRecognitionAudio = () => {
  const [recognitionAudio, setRecognitionAudio] = useRecoilState(recognitionAudioState);

  return { recognitionAudio, setRecognitionAudio };
};

const recognitionAudioPlayingState = atom<boolean>({
  key: 'recognition-audio-playing-state',
  default: false,
});

const useRecognitionAudioPlaying = () => {
  const [recognitionAudioPlaying, setRecognitionAudioPlaying] = useRecoilState(
    recognitionAudioPlayingState,
  );

  return { recognitionAudioPlaying, setRecognitionAudioPlaying };
};

const isRecognitionAudioEmpty = selector({
  key: 'recognition-audio-empty-state',
  get: ({ get }) => {
    const data = get(recognitionAudioState);
    if (data) {
      return data.length > 0 ? false : true;
    }
    return true;
  },
});

const streamState = atom<MediaStream | undefined>({
  key: 'stream-state',
  default: undefined,
});

const useStream = () => {
  const [stream, setStream] = useRecoilState(streamState);

  return { stream, setStream };
};

const mediaRecorderExistsState = atom<boolean>({
  key: 'media-recorder-exists-state',
  default: false,
});

const useMediaRecorderExists = () => {
  const [mediaRecorderExists, setMediaRecorderExists] = useRecoilState(mediaRecorderExistsState);

  return { mediaRecorderExists, setMediaRecorderExists };
};

export {
  useVoiceRecording,
  useRecognitionAudio,
  isRecognitionAudioEmpty,
  useAwaitingTranscription,
  useRecognitionAudioPlaying,
  useStream,
  useMediaRecorderExists,
};
