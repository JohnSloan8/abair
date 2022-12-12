import { atom, selector, useRecoilState } from 'recoil';

import { synthesisAudioModel } from '@/models/synthesis';

const synthesisAudioState = atom<string>({
  key: 'synthesis-audio-state',
  default: '',
});

const useSynthesisAudio = () => {
  const [synthesisAudio, setSynthesisAudio] = useRecoilState(synthesisAudioState);

  return { synthesisAudio, setSynthesisAudio };
};

const synthesisAudiosState = atom<synthesisAudioModel[]>({
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

export { useSynthesisAudio, isSynthesisAudioEmpty, useSynthesisAudioPlaying, useSynthesisAudios };
