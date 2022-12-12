import { atom, useRecoilState } from 'recoil';

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

const audioContextState = atom<AudioContext | undefined>({
  key: 'audio-context-state',
  default: undefined,
});

const useAudioContext = () => {
  const [audioContext, setAudioContext] = useRecoilState(audioContextState);

  return { audioContext, setAudioContext };
};

export { useRecognitionAudio, recognitionAudioState, useRecognitionAudioPlaying, useAudioContext };
