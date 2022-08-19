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
  key: 'recognitionTextEmptyStringState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(recognitionTextState);
    return text.length > 0 ? false : true;
  },
});

const recognitionAudioState = atom<string>({
  key: 'recognition-audio-state',
  default: '',
});

const useRecognitionAudio = () => {
  const [RecognitionAudio, setRecognitionAudio] = useRecoilState(recognitionAudioState);

  return { RecognitionAudio, setRecognitionAudio };
};

const isRecognitionAudioEmpty = selector({
  key: 'recognition-audio-empty-state', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const data = get(recognitionAudioState);
    return data.length > 0 ? false : true;
  },
});

export {
  useRecognitionText,
  useRecording,
  isRecognitionTextEmptyString,
  useRecognitionAudio,
  isRecognitionAudioEmpty,
};
