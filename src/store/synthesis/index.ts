import { atom, selector, useRecoilState } from 'recoil';

const synthesisTextState = atom<string>({
  key: 'synthesis-text-state',
  default: '',
});

const useSynthesisText = () => {
  const [synthesisText, setSynthesisText] = useRecoilState(synthesisTextState);
  return { synthesisText, setSynthesisText };
};

const isSynthesisTextEmptyString = selector({
  key: 'synthesisTextEmptyStringState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(synthesisTextState);
    return text.length > 0 ? false : true;
  },
});

const synthesisAudioState = atom<string>({
  key: 'synthesis-audio-state',
  default: '',
});

const useSynthesisAudio = () => {
  const [synthesisAudio, setSynthesisAudio] = useRecoilState(synthesisAudioState);

  return { synthesisAudio, setSynthesisAudio };
};

const isSynthesisAudioEmpty = selector({
  key: 'synthesis-audio-empty-state', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const data = get(synthesisAudioState);
    return data.length > 0 ? false : true;
  },
});

export { useSynthesisText, isSynthesisTextEmptyString, useSynthesisAudio, isSynthesisAudioEmpty };
