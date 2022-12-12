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
    const empty = text.length > 0 ? false : true;
    return empty;
  },
});

export { useSynthesisText, isSynthesisTextEmptyString };
