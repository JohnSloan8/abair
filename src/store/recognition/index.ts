import { atom, selector, useRecoilState } from 'recoil';

const recognitionTextState = atom<string>({
  key: 'recognition-text-state',
  default: '',
});

const useRecognitionText = () => {
  const [recognitionText, setRecognitionText] = useRecoilState(recognitionTextState);
  return { recognitionText, setRecognitionText };
};

const recordingState = atom<boolean>({
  key: 'recording-state',
  default: false,
});

const useRecording = () => {
  const [recording, setRecording] = useRecoilState(recordingState);

  return { recording, setRecording };
};

const isRecognitionTextEmptyString = selector({
  key: 'recognitionTextEmptyStringState',
  get: ({ get }) => {
    const text = get(recognitionTextState);
    return text.length > 0 ? false : true;
  },
});

const recognitionAudioState = atom<string | undefined>({
  key: 'recognition-audio-state',
  default: '',
});

const useRecognitionAudio = () => {
  const [recognitionAudio, setRecognitionAudio] = useRecoilState(recognitionAudioState);

  return { recognitionAudio, setRecognitionAudio };
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
  useRecognitionText,
  useRecording,
  isRecognitionTextEmptyString,
  useRecognitionAudio,
  isRecognitionAudioEmpty,
};
