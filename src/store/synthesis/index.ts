import { atom, selector, useRecoilState } from 'recoil';

import { synthesisAudios } from '@/models/synthesis';

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

const awaitingSynthesisState = atom<boolean>({
  key: 'awaiting-synthesis-state',
  default: false,
});

const useAwaitingSynthesis = () => {
  const [awaitingSynthesis, setAwaitingSynthesis] = useRecoilState(awaitingSynthesisState);

  return { awaitingSynthesis, setAwaitingSynthesis };
};

const synthesisAudioState = atom<string>({
  key: 'synthesis-audio-state',
  default: '',
});

const useSynthesisAudio = () => {
  const [synthesisAudio, setSynthesisAudio] = useRecoilState(synthesisAudioState);

  return { synthesisAudio, setSynthesisAudio };
};

const synthesisAudiosState = atom<synthesisAudios[]>({
  key: 'synthesis-audios-state',
  default: [],
});

const useSynthesisAudios = () => {
  const [synthesisAudios, setSynthesisAudios] = useRecoilState(synthesisAudiosState);

  return { synthesisAudios, setSynthesisAudios };
};

const isSynthesisAudioEmpty = selector({
  key: 'synthesis-audio-empty-state', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const data = get(synthesisAudioState);
    return data.length > 0 ? false : true;
  },
});

const synthesisAudioPlayingState = atom<boolean>({
  key: 'synthesis-audio-playing-state',
  default: false,
});

const useSynthesisAudioPlaying = () => {
  const [synthesisAudioPlaying, setSynthesisAudioPlaying] = useRecoilState(
    synthesisAudioPlayingState,
  );

  return { synthesisAudioPlaying, setSynthesisAudioPlaying };
};

const synthesisAudiosPlayingState = atom<boolean>({
  key: 'synthesis-audio-playing-state',
  default: false,
});

const useSynthesisAudiosPlaying = () => {
  const [synthesisAudiosPlaying, setSynthesisAudiosPlaying] = useRecoilState(
    synthesisAudiosPlayingState,
  );

  return { synthesisAudiosPlaying, setSynthesisAudiosPlaying };
};

export {
  useSynthesisText,
  isSynthesisTextEmptyString,
  useAwaitingSynthesis,
  useSynthesisAudio,
  isSynthesisAudioEmpty,
  useSynthesisAudioPlaying,
  useSynthesisAudios,
  useSynthesisAudiosPlaying,
};
