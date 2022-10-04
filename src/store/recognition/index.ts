import { atom, selector, useRecoilState } from 'recoil';

import { transcriptionModel } from '@/models/transcription';

const recognitionState = atom<transcriptionModel | undefined>({
  key: 'recognition-state',
  default: undefined,
});

const useRecognition = () => {
  const [recognition, setRecognition] = useRecoilState(recognitionState);
  return { recognition, setRecognition };
};

const recognitionTextState = atom<string>({
  key: 'recognition-text-state',
  default: '',
});

const useRecognitionText = () => {
  const [recognitionText, setRecognitionText] = useRecoilState(recognitionTextState);
  return { recognitionText, setRecognitionText };
};

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

export {
  useRecognition,
  useVoiceRecording,
  useRecognitionText,
  useRecognitionAudio,
  isRecognitionAudioEmpty,
  useAwaitingTranscription,
  useRecognitionAudioPlaying,
};
